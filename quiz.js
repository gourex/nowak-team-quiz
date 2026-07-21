(function () {
  const ICONS = window.NOWAK_ICONS || {};
  const DATA = window.QUIZ_DATA;

  function iconSvg(name) {
    const path = ICONS[name] || "";
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  }

  const screens = {
    start: document.getElementById("screen-start"),
    question: document.getElementById("screen-question"),
    result: document.getElementById("screen-result")
  };

  function showScreen(name) {
    Object.keys(screens).forEach((key) => {
      screens[key].classList.toggle("active", key === name);
    });
  }

  const progressFill = document.getElementById("progressFill");

  function setProgress(percent) {
    progressFill.style.width = percent + "%";
  }

  // ---- Start screen -------------------------------------------------------
  document.getElementById("startTitle").textContent = DATA.title;
  document.getElementById("startSub").textContent = DATA.subtitle;

  const personaRow = document.getElementById("personaRow");
  DATA.personaOrder.forEach((key) => {
    const badge = document.createElement("div");
    badge.className = "persona-badge";
    badge.innerHTML = iconSvg(DATA.personas[key].icon);
    personaRow.appendChild(badge);
  });

  // ---- Quiz state ----------------------------------------------------------
  let currentIndex = -1;
  let answers = [];

  function startQuiz() {
    answers = [];
    currentIndex = 0;
    renderQuestion();
  }

  function renderQuestion() {
    const total = DATA.questions.length;
    const q = DATA.questions[currentIndex];

    setProgress(Math.round((currentIndex / total) * 100));
    document.getElementById("questionCount").textContent =
      `Question ${currentIndex + 1} of ${total}`;
    document.getElementById("questionPrompt").textContent = q.prompt;

    const list = document.getElementById("optionsList");
    list.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "option-card";
      btn.type = "button";
      btn.textContent = opt.text;
      btn.addEventListener("click", () => selectAnswer(opt.persona));
      list.appendChild(btn);
    });

    showScreen("question");
  }

  function selectAnswer(persona) {
    answers.push(persona);
    if (currentIndex + 1 < DATA.questions.length) {
      currentIndex += 1;
      renderQuestion();
    } else {
      showResult();
    }
  }

  function computeResultPersona() {
    const counts = {};
    const firstSeen = {};
    answers.forEach((persona, i) => {
      counts[persona] = (counts[persona] || 0) + 1;
      if (!(persona in firstSeen)) firstSeen[persona] = i;
    });

    let best = null;
    Object.keys(counts).forEach((persona) => {
      if (
        best === null ||
        counts[persona] > counts[best] ||
        (counts[persona] === counts[best] && firstSeen[persona] < firstSeen[best])
      ) {
        best = persona;
      }
    });
    return best;
  }

  function showResult() {
    setProgress(100);
    const key = computeResultPersona();
    const persona = DATA.personas[key];

    document.getElementById("resultIcon").innerHTML = iconSvg(persona.icon);
    document.getElementById("resultTitle").textContent = persona.title;
    document.getElementById("resultTagline").textContent = persona.tagline;
    document.getElementById("resultDescription").textContent = persona.description;
    document.getElementById("copyFeedback").textContent = "";

    showScreen("result");
  }

  function copyResult() {
    const key = computeResultPersona();
    const persona = DATA.personas[key];
    const text = `I got "${persona.title}" on the Nowak team quiz! ${persona.tagline}`;
    const feedback = document.getElementById("copyFeedback");

    const done = () => {
      feedback.textContent = "Copied! Paste it wherever you share with the team.";
      setTimeout(() => { feedback.textContent = ""; }, 3000);
    };
    const fail = () => {
      feedback.textContent = text;
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fail);
    } else {
      fail();
    }
  }

  document.getElementById("startBtn").addEventListener("click", startQuiz);
  document.getElementById("retakeBtn").addEventListener("click", () => {
    setProgress(0);
    showScreen("start");
  });
  document.getElementById("copyBtn").addEventListener("click", copyResult);
})();
