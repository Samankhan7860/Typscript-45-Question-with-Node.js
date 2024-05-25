// date = 27-feb-2024
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
var five = "five";
var apple = "APPLE";
var num = 10;
var num1 = 20;
var fruits = ["Orange", "Mango", "Kiwi", "Grapes", "Banana"];
//• Tests for equality and inequality with strings
console.log("Test 1: five  is equal to five?");
console.log(five == five);
console.log("\nTest 2: five  is  not equal to five?");
console.log(five != five);
//• Tests using the lower case function
console.log("\nTest 3: Is APPLE is equal to apple after converting to lowercase?");
console.log(apple.toLowerCase() == "apple");
console.log("\nTest 4: Is APPLE is not equal to apple after converting to lowercase?");
console.log(apple.toLowerCase() != "apple");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
//and less than or equal to
//Equal to
console.log("\nTest 5: Is 20 is not equal to 10?");
console.log(num != num1);
//Not Equal to
console.log("\nTest 6: Is 10 is  equal to 20?");
console.log(num == num1);
//Greater than
console.log("\nTest 7: Is 10 is  greater than zero?");
console.log(num > 0);
//Less than
console.log("\nTest 8: Is 10 is less than zero?");
console.log(num < 0);
//Greater than or equal to
console.log("\nTest 7: Is 10 is  greater than or equal to five?");
console.log(num >= 5);
//less than or equal to 
console.log("\nTest 7: Is 10 is  less than or equal to five?");
console.log(num <= 5);
//• Tests using "and" and "or" operators
// using && (And)
console.log("\n twenty is not equals to 10 and twenty is greater than 10");
console.log(num1 != 10 && num1 > 10);
console.log("\n twenty is not equals to 10 and twenty is greater than 30");
console.log(num1 != 10 && num1 > 30);
// using || (Or)
console.log("\n twenty is greater than 50 OR twenty is  equals to 20");
console.log(num1 > 50 || num1 == 20);
console.log("\n twenty is greater than 50 OR twenty is not equals to 20");
console.log(num1 > 50 || num1 != 20);
//• Test whether an item is in a array
console.log("\n Is Orange  is include in my fruits array?");
console.log(fruits.includes("Orange"));
//• Test whether an item is not in a array
console.log("\n Is Orange  is not include in my fruits array?");
console.log(!fruits.includes("Orange"));
