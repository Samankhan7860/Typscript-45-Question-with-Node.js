// date = 07-March-2024

//Large Shirts: Modify the make_shirt() function so that shirts are large by default with
// a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//making a function 

    function make_shirt(size: string = "Large", message: string = "I love TypeScript.") {
        console.log(`The size of the shirt is ${size} and the message on the shirt is  ${message}`);
    }

//calling the function

    make_shirt();
    make_shirt("Medium");
    make_shirt("Small", " JavaScript is very easy.");