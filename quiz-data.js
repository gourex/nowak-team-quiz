/**
 * Content for the Nowak Insider team personality quiz.
 * Personas are generic, non-copyrighted archetypes (no named characters),
 * each with a matching illustration in assets/icons/illustrations.js.
 */
const QUIZ_DATA = {
  title: "Which Pop-Culture Personality Are You?",
  subtitle: "Take this month's team personality quiz and compare your result with your coworkers.",

  personaOrder: [
    "spaceHero", "wizard", "detective", "adventurer", "superhero",
    "strategist", "rebel", "healer", "trickster", "sage"
  ],

  personas: {
    spaceHero: {
      icon: "spaceHero",
      title: "The Space Hero",
      tagline: "Fearless, fast, and already three steps ahead.",
      description: "While everyone else is still reading the email, you've already replied, solved it, and moved on to the next thing. You're the first to raise your hand for the new project or the rush order — and somehow you make it look easy. The team doesn't just count on you to show up. They count on you to launch."
    },
    wizard: {
      icon: "wizard",
      title: "The Wizard",
      tagline: "Makes the impossible look like Tuesday.",
      description: "Somebody's system is broken, a spreadsheet won't behave, or nobody remembers how the thing works — and it always ends with someone saying, \"just ask them, they'll know.\" You don't panic, you don't rush, you just quietly wave your hand and the problem disappears. Half the office thinks you have magic. The other half just knows you actually read the manual."
    },
    detective: {
      icon: "detective",
      title: "The Detective",
      tagline: "Catches what everyone else scrolled past.",
      description: "You're the one who looks at a report and says, \"wait, that number doesn't add up\" — and you're always right. Typos, missing digits, a total that's a little short of goal — nothing gets past you. You don't need the spotlight, just five quiet minutes, and the full story comes together."
    },
    adventurer: {
      icon: "adventurer",
      title: "The Adventurer",
      tagline: "Thrives when the plan changes at 4:45 on a Friday.",
      description: "Rush order? New process? Whole day flipped upside down an hour before quitting time? You're already in. You don't need everything mapped out — you just need a direction and you'll figure out the rest on the way. The unexpected doesn't throw you off. It's basically your favorite part of the job."
    },
    superhero: {
      icon: "superhero",
      title: "The Superhero",
      tagline: "Shows up every single day, no cape required.",
      description: "You're not the loudest voice in the room, but you're the one everyone quietly relies on. Answered calls, shipped orders, solved problems, showed up — day after day, without needing a shoutout. If the team ever retired the coffee pot from Employee of the Month, it'd probably go to you."
    },
    strategist: {
      icon: "strategist",
      title: "The Strategist",
      tagline: "Three moves ahead before the meeting even starts.",
      description: "You've already mapped out how this week goes before Monday's coffee is done brewing. While everyone else is reacting, you're the one who saw it coming and already has a plan B — and probably a plan C. Quiet, calculated, and somehow always one step ahead of the next \"urgent\" request."
    },
    rebel: {
      icon: "rebel",
      title: "The Rebel",
      tagline: "Does it their own way — and it still works.",
      description: "You don't follow the process because it's the process, you follow it because it works, and the second it doesn't, you'll find a better way. Half the office side-eyes your methods. The other half quietly starts copying them once they see the results."
    },
    healer: {
      icon: "healer",
      title: "The Healer",
      tagline: "Checks in before anyone has to ask.",
      description: "You're the one who notices when someone's had a rough day before they say a word. A kind word, a shared laugh, remembering how someone takes their coffee — you're a big reason the office feels like a team and not just a building full of desks."
    },
    trickster: {
      icon: "trickster",
      title: "The Trickster",
      tagline: "Cracks the joke exactly when everyone needs it.",
      description: "Long day, tense meeting, printer's jammed again — and somehow you're the one who says the thing that makes everyone actually laugh. You don't take yourself too seriously, and honestly, the whole team is better for it."
    },
    sage: {
      icon: "sage",
      title: "The Sage",
      tagline: "The one you ask before you Google it.",
      description: "You've seen this exact problem before — probably three times — and you already know how it ends. New teammates find you within their first week because word travels fast: if you want the real answer, you ask them first."
    }
  },

  questions: [
    {
      prompt: "The printer jams for the third time today. What's your move?",
      options: [
        { persona: "spaceHero", text: "Already elbow-deep in it before IT even calls back." },
        { persona: "wizard", text: "You know exactly which tray is misaligned without even looking." },
        { persona: "detective", text: "You investigate first — turns out it's been out of toner since Tuesday." },
        { persona: "adventurer", text: "Who needs a printer? You'll wing the meeting from memory." },
        { persona: "superhero", text: "You calmly fix it, then warn the next person before they get jammed too." },
        { persona: "strategist", text: "You already predicted this and printed everything yesterday, just in case." },
        { persona: "rebel", text: "You skip the printer entirely and find a workaround nobody thought of." },
        { persona: "healer", text: "You fix it, then ask if everyone else is having an okay day too." },
        { persona: "trickster", text: "You name the printer something embarrassing and announce it to the room." },
        { persona: "sage", text: "You've fixed this exact jam before. You know precisely which lever to jiggle." }
      ]
    },
    {
      prompt: "A customer calls with a \"quick question.\" 45 minutes later...",
      options: [
        { persona: "spaceHero", text: "You've already solved three of their problems and offered a fourth." },
        { persona: "wizard", text: "You somehow made a confusing situation make total sense." },
        { persona: "detective", text: "You've figured out the real issue, which was never the question they asked." },
        { persona: "adventurer", text: "You're still on the phone, thoroughly enjoying wherever this went." },
        { persona: "superhero", text: "You wrap it up patiently, exactly like you do every single time." },
        { persona: "strategist", text: "You've steered the whole call exactly where it needed to go from minute one." },
        { persona: "rebel", text: "You cut through the small talk and solve it in half the time anyone else would." },
        { persona: "healer", text: "You've made them feel completely heard, question solved or not." },
        { persona: "trickster", text: "You've both been laughing for twenty of those forty-five minutes." },
        { persona: "sage", text: "You knew the answer in the first thirty seconds and let them talk anyway." }
      ]
    },
    {
      prompt: "It's your turn to make the coffee. What do you brew?",
      options: [
        { persona: "spaceHero", text: "Double strength. No time to waste today." },
        { persona: "wizard", text: "Something nobody asked for that ends up being everyone's favorite." },
        { persona: "detective", text: "Measured out exactly right, every time, no guessing." },
        { persona: "adventurer", text: "Whatever's left in the cabinet — today's a surprise-flavor day." },
        { persona: "superhero", text: "A full pot, made early, so nobody has to ask." },
        { persona: "strategist", text: "You calculate exactly how many cups the office needs, down to the last drop." },
        { persona: "rebel", text: "You make it your way, rules and \"the usual pot\" be damned." },
        { persona: "healer", text: "You make an extra cup for whoever looks like they need it most." },
        { persona: "trickster", text: "You label it \"decaf\" as a joke. It is not decaf." },
        { persona: "sage", text: "The same reliable pot you've made a thousand times. Never fails." }
      ]
    },
    {
      prompt: "You spot a typo in a report right before it goes out.",
      options: [
        { persona: "spaceHero", text: "Fixed and re-sent before anyone even noticed." },
        { persona: "wizard", text: "You quietly correct it like it was never there." },
        { persona: "detective", text: "You dig deeper and find two more nobody caught." },
        { persona: "adventurer", text: "You fix it, but only after considering leaving it for character." },
        { persona: "superhero", text: "You fix it and flag it kindly so it doesn't happen again." },
        { persona: "strategist", text: "You already built in time to catch exactly this kind of thing." },
        { persona: "rebel", text: "You fix it your way, then quietly improve two other things nobody asked about." },
        { persona: "healer", text: "You fix it gently and make sure whoever wrote it doesn't feel bad." },
        { persona: "trickster", text: "You circle it in red first, just to watch their reaction." },
        { persona: "sage", text: "You caught it because you always catch it. This isn't your first rodeo." }
      ]
    },
    {
      prompt: "A rush order lands at 4:45pm on a Friday.",
      options: [
        { persona: "spaceHero", text: "Challenge accepted. You're already halfway done." },
        { persona: "wizard", text: "You pull a solution out of thin air with ten minutes to spare." },
        { persona: "detective", text: "You find the fastest way out the door, no wasted steps." },
        { persona: "adventurer", text: "Perfect. You were getting bored anyway." },
        { persona: "superhero", text: "You handle it like it's just another Friday, because for you, it is." },
        { persona: "strategist", text: "You already had a plan for exactly this scenario." },
        { persona: "rebel", text: "You ignore the \"normal\" process and get it done your own way, fast." },
        { persona: "healer", text: "You handle it, then make sure the team doesn't feel burned out by it." },
        { persona: "trickster", text: "You groan dramatically, then get it done in record time anyway." },
        { persona: "sage", text: "You've handled a hundred of these. This one's no different." }
      ]
    },
    {
      prompt: "Someone starts an office debate (pens, the thermostat, whose turn it is).",
      options: [
        { persona: "spaceHero", text: "You pick a side immediately and defend it loudly." },
        { persona: "wizard", text: "You somehow end the debate with one calm sentence." },
        { persona: "detective", text: "You already know who took the stapler. You've known for weeks." },
        { persona: "adventurer", text: "You have no side — you're just here for the entertainment." },
        { persona: "superhero", text: "You stay out of it and quietly go find everyone a solution." },
        { persona: "strategist", text: "You quietly present the most logical solution and everyone just agrees." },
        { persona: "rebel", text: "You take the unpopular side just to keep things interesting." },
        { persona: "healer", text: "You make sure nobody's feelings get caught in the crossfire." },
        { persona: "trickster", text: "You escalate it as a bit, purely for entertainment value." },
        { persona: "sage", text: "You've seen this debate before. You already know how it ends." }
      ]
    },
    {
      prompt: "It's a new teammate's first day. How do you welcome them?",
      options: [
        { persona: "spaceHero", text: "You've already got them three tasks deep and thriving." },
        { persona: "wizard", text: "You teach them the one trick that makes everything easier." },
        { persona: "detective", text: "You ask them great questions and remember every answer." },
        { persona: "adventurer", text: "You take them along for whatever chaos the day brings." },
        { persona: "superhero", text: "You check in on them all day, quietly making sure they're okay." },
        { persona: "strategist", text: "You've already mapped out their first two weeks to set them up right." },
        { persona: "rebel", text: "You show them the unofficial way things actually get done around here." },
        { persona: "healer", text: "You make sure they feel welcome before they even ask a question." },
        { persona: "trickster", text: "You introduce them to the office's running jokes on day one." },
        { persona: "sage", text: "You give them the one piece of advice that'll save them months." }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUIZ_DATA;
}
if (typeof window !== "undefined") {
  window.QUIZ_DATA = QUIZ_DATA;
}
