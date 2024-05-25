// date = 09-March-2024
//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. It should then accept an arbitrary number
// of keyword arguments. Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.


interface Car {
        manufacturer: string;
        model: string;
        [key: string]: string; }
       // Write a function that stores information about a car in a Object. 
    function createCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
        //function should always receive a manufacturer and a model name
        const car: Car = { manufacturer, model };
        options.forEach(([key, value]) => {
        car[key] = value;
        });
        return car;
    }
    // Call the function
    const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', '2022']);
    //Print the Object that’s returned to make sure all the information was stored correctly.
    console.log(myCar);
