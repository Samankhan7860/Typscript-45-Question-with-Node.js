// date = 01-March-2024
//if statements that check for certain fruits in your array.

//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//• Make a array of your three favorite fruits and call it favorite_fruits.

let favorite_fruits = ["Mango","Strawberry","Orange"]

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

if(favorite_fruits.includes("Mango")){
    console.log("You really like Mangoes?");//true
}

if(favorite_fruits.includes("Strawberry")){
    console.log("You really like Strawberries?");//true
}

if(favorite_fruits.includes("Apple")){
    console.log("You really like Apple?");//false
}

if(favorite_fruits.includes("Orange")){
    console.log("You really like Oranges?");//true
}

if(favorite_fruits.includes("Banana")){
    console.log("You really like Bananas?");//false
}