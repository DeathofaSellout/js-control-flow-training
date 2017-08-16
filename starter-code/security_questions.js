console.log("security_questions.js loaded");
let securityQuestions = [
  { question: "What was your first pet's name?",
    expectedAnswer: "FlufferNutter"
  },
  { question: "What is your mother's maiden name?",
    expectedAnswer: "Fluffer"
  },
  { question: "What is the name of your street?",
    expectedAnswer: "Nutter"
  },
];
for(let i = securityQuestions.length - 1; i >= 0; i-=1){
  let answer = window.prompt(securityQuestions[i].question);
  if(answer !== securityQuestions[i].expectedAnswer){
    alert("You are wrong, hombre!");
    break;
  }
}
