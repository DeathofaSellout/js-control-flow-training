console.log("sing.js loaded");
let beers = prompt("How many verses do you want to hear?");
for(let i = beers; i >= 0; i--){
  if(i >= 2){
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer! Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall!");
  } else if(i === 1) {
    console.log(i + " bottle of beer on the wall, " + i + " bottle of beer! Take one down and pass it around, 0 bottles of beer on the wall!");
  } else {
    console.log("0 bottles... No more bottles...");
  }
}
