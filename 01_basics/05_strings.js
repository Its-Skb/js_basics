const name = "Saurabh"
const repoCount = 8

// console.log(name + repoCount);

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Chess_King");

console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(1, 4);
console.log(newString);

const anotherString = gameName.slice(-4, -1); 
console.log(anotherString);

const newString2 = "   Hello World!   ";
console.log(newString2);
console.log(newString2.trim());

 
const url = "https://www.youtube.com/channel/Saurabh%20Kr";

console.log(url.replace('%20', '-'));

console.log(url.includes('Saurabh'));
console.log(url.includes('Kumar'));

console.log(gameName.split("_"))
