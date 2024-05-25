// date = 09-March-2024
// 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.
// Write a function that accepts a array of items
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // The function should have one parameter that collects as many items as the function call provides, 
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    }
    else {
        console.log("You ordered a sandwich with: ".concat(items.join(', ')));
    }
    console.log("--------------------------");
}
// Call the function three times, using a different number of arguments each time.
order_sandwich("Chicken", "Cheese", "Lettuce", "Tomato");
order_sandwich("Meat", "Swiss");
order_sandwich();
