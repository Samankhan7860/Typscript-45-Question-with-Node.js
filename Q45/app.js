// date = 09-March-2024
//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. It should then accept an arbitrary number
// of keyword arguments. Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.
// Write a function that stores information about a car in a Object. 
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //function should always receive a manufacturer and a model name
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function
var myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', '2022']);
//Print the Object that’s returned to make sure all the information was stored correctly.
console.log(myCar);
