// date = 29-feb-2024

console.log("---------------1----------------")
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

let aliencolor = "green";

//• If the alien is green, print a message that the player earned 5 points.
if (aliencolor === "green") {
    console.log("(version 1) Player just earned 5 points for shooting the green alien.");
}

//• If the alien is yellow, print a message that the player earned 10 points.
else if (aliencolor === "yellow") {
    console.log("(version 1) Player just earned 10 points for shooting the yellow alien.");
}

//• If the alien is red, print a message that the player earned 15 points.
else if (aliencolor === "red") {
    console.log("(version 1) Player just earned 15 points for shooting the red alien.");
}

console.log("---------------2----------------")


//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Version 2

let aliencolor2 = "yellow";

if (aliencolor2 === "green") { 
    console.log("(version 2) Player just earned 5 points for shooting the green alien.");
}

else if (aliencolor2 === "yellow") {
    console.log("(version 2)Player just earned 10 points for shooting the yellow alien.");
}

else if (aliencolor2 === "red") {
    console.log("(version 2) Player just earned 15 points for shooting the red alien.");
}

console.log("---------------3----------------")
//Version 3
let aliencolor3 = "red";

if (aliencolor3 === "green") { 
    console.log("(version 3) Player just earned 5 points for shooting the green alien.");
}

else if (aliencolor3 === "yellow") {
    console.log("(version 3)Player just earned 10 points for shooting the yellow alien.");
}

else if (aliencolor3 === "red") {
    console.log("(version 3) Player just earned 15 points for shooting the red alien.");
}