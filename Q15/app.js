// date = 24-feb-2024
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end 
//of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t 
//make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guest = ["Sir Zia", "Sir Ameen", "Sir Isfahan", "Sir Mubashir", "Sir Hamza", "Sir Bilal", "Sir Ashrib"];
var notCome = guest[0];
console.log(notCome, "Dawat me nh ayenge");
guest.splice(0, 1, "Sir Qaiser");
guest.forEach(function (dinner) { return console.log("Assalam olaikum ".concat(dinner, ",i am inviting my honourable teachers on dinner at my home ")); });
