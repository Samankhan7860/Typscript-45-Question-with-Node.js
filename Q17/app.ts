// date = 24-feb-2024
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest = [
  "Sir Zia",
  "Sir Ameen",
  "Sir Isfahan",
  "Sir Mubashir",
  "Sir Hamza",
  "Sir Bilal",
  "Sir Ashrib",
];

let notCome = guest[0];

console.log(notCome, "Dawat me nh ayenge");
guest.splice(0, 1, "Sir Qaiser");

console.log("Good News!we have a bigger dinner table for dinner");

guest.unshift("Sir Daniyal");

guest.push("Sir Kamran Tessori");

let middle: number = Math.floor(guest.length / 2);

guest.splice(middle, 0, "Sir Shahmeer");

console.log("Updated List of our guest");
guest.forEach((oneguest) =>
  console.log(
    `Assalam moalaikum ${oneguest},i am inviting my honourable teachers on dinner at my home`
  )
);

console.log(
  "Unfortunately , the new dinner table wont arrive in time for the dinner, So i decided to invite only two guest on dinner at my home"
);

while (guest.length > 2) {
  let remove = guest.pop();
  console.log(`Sorry ,${remove} i cant invite you for dinner`);
}

console.log("Invitations to the last 2 Guests");

guest.forEach((lasttwo) =>
  console.log(`Hello ${lasttwo} , You are still invited`)
);

guest.pop();
guest.pop();

console.log("Empty List", guest);
