console.log("login.js loaded");
let userLogin = {
  username: "whatupboi",
  password: "password"
};
let notAnswer = true;
let total = 0
while(notAnswer && total !== 3){
  let pass = prompt(`What is your password, ${userLogin.username}?`);
  if(pass === userLogin.password){
    console.log("you go boi");
    notAnswer = false;
  } else if (pass !== userLogin.password){
    console.log("you wrong boi");
    total += 1;
  }
}
