// date = 01-March-2024
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
// let users = ["Kishwer","Admin","Maham","Farees","Hareem"];
// if(users.length === 0){
//     console.log("We need to find some users!");
// }
// else{usernames.forEach(user => {
//     if(user === "Admin"){
//         console.log(`Hello ${user}`, "would you like to see a status report?");
//     }
//     else{
//         console.log(`Hello ${user}`,"Thank you for logging in again.");
//     }
// });}
var userNames = ["Kishwer", "Admin", "Maham", "Farees", "Hareem"];
userNames = [];
if (userNames.length == 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(function (user) {
        if (user === "Admin") {
            console.log("Hello ".concat(user), "would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user), "Thank you for logging in again.");
        }
    });
}
