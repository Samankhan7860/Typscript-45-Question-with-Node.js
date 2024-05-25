// date = 24-feb-2024
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
//invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.

let guest = ["Sir Zia","Sir Ameen","Sir Isfahan","Sir Mubashir","Sir Hamza","Sir Bilal","Sir Ashrib"];

let notCome = guest[0];

console.log(notCome,"Dawat me nh ayenge");
guest.splice(0,1,"Sir Qaiser");

console.log("Good News!we have a bigger dinner table for dinner");

guest.unshift("Sir Daniyal");

guest.push("Sir Kamran Tessori");

let middle: number = Math.floor(guest.length / 2);

guest.splice(middle, 0,"Sir Shahmeer");

console.log("Updated List of our guest");
guest.forEach(oneguest => console.log(`Assalam moalaikum ${oneguest},i am inviting my honourable teachers on dinner at my home`));