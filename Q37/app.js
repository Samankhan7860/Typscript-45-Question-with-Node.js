// date = 07-March-2024
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with
// a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//making a function 
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    console.log("The size of the shirt is ".concat(size, " and the message on the shirt is  ").concat(message));
}
//calling the function
make_shirt();
make_shirt("Medium");
make_shirt("Small", " JavaScript is very easy.");
