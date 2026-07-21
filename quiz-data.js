/**
 * Content for the Nowak Insider team personality quiz.
 * Personas match the 5 generic, non-copyrighted icons already defined in
 * ../assets/icons/icon-set.js (spaceHero, wizard, detective, adventurer,
 * superhero) so no new artwork is needed.
 */
const QUIZ_DATA = {
  title: "Which Pop-Culture Personality Are You?",
  subtitle: "Take this month's team personality quiz and compare your result with your coworkers.",

  personaOrder: ["spaceHero", "wizard", "detective", "adventurer", "superhero"],

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
        { persona: "superhero", text: "You calmly fix it, then warn the next person before they get jammed too." }
      ]
    },
    {
      prompt: "A customer calls with a \"quick question.\" 45 minutes later...",
      options: [
        { persona: "spaceHero", text: "You've already solved three of their problems and offered a fourth." },
        { persona: "wizard", text: "You somehow made a confusing situation make total sense." },
        { persona: "detective", text: "You've figured out the real issue, which was never the question they asked." },
        { persona: "adventurer", text: "You're still on the phone, thoroughly enjoying wherever this went." },
        { persona: "superhero", text: "You wrap it up patiently, exactly like you do every single time." }
      ]
    },
    {
      prompt: "It's your turn to make the coffee. What do you brew?",
      options: [
        { persona: "spaceHero", text: "Double strength. No time to waste today." },
        { persona: "wizard", text: "Something nobody asked for that ends up being everyone's favorite." },
        { persona: "detective", text: "Measured out exactly right, every time, no guessing." },
        { persona: "adventurer", text: "Whatever's left in the cabinet — today's a surprise-flavor day." },
        { persona: "superhero", text: "A full pot, made early, so nobody has to ask." }
      ]
    },
    {
      prompt: "You spot a typo in a report right before it goes out.",
      options: [
        { persona: "spaceHero", text: "Fixed and re-sent before anyone even noticed." },
        { persona: "wizard", text: "You quietly correct it like it was never there." },
        { persona: "detective", text: "You dig deeper and find two more nobody caught." },
        { persona: "adventurer", text: "You fix it, but only after considering leaving it for character." },
        { persona: "superhero", text: "You fix it and flag it kindly so it doesn't happen again." }
      ]
    },
    {
      prompt: "A rush order lands at 4:45pm on a Friday.",
      options: [
        { persona: "spaceHero", text: "Challenge accepted. You're already halfway done." },
        { persona: "wizard", text: "You pull a solution out of thin air with ten minutes to spare." },
        { persona: "detective", text: "You find the fastest way out the door, no wasted steps." },
        { persona: "adventurer", text: "Perfect. You were getting bored anyway." },
        { persona: "superhero", text: "You handle it like it's just another Friday, because for you, it is." }
      ]
    },
    {
      prompt: "Someone starts an office debate (pens, the thermostat, whose turn it is).",
      options: [
        { persona: "spaceHero", text: "You pick a side immediately and defend it loudly." },
        { persona: "wizard", text: "You somehow end the debate with one calm sentence." },
        { persona: "detective", text: "You already know who took the stapler. You've known for weeks." },
        { persona: "adventurer", text: "You have no side — you're just here for the entertainment." },
        { persona: "superhero", text: "You stay out of it and quietly go find everyone a solution." }
      ]
    },
    {
      prompt: "It's a new teammate's first day. How do you welcome them?",
      options: [
        { persona: "spaceHero", text: "You've already got them three tasks deep and thriving." },
        { persona: "wizard", text: "You teach them the one trick that makes everything easier." },
        { persona: "detective", text: "You ask them great questions and remember every answer." },
        { persona: "adventurer", text: "You take them along for whatever chaos the day brings." },
        { persona: "superhero", text: "You check in on them all day, quietly making sure they're okay." }
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
