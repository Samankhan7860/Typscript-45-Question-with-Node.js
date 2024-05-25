// date = 02-March-2024
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let userNames = ["Kishwer","Admin","Maham","Farees","Hareem"];

// • Remove all of the usernames from your array, and make sure the correct message is printed.

userNames = [];

//• If the list is empty, print the message We need to find some users!
if(userNames.length == 0){
    console.log("We need to find some users!");
}
else{userNames.forEach(user => {
    if(user === "Admin"){
        console.log(`Hello ${user}`, "would you like to see a status report?");
    }
    else{
        console.log(`Hello ${user}`,"Thank you for logging in again.");
    }
});
}

