// date = 21-feb-2024

//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase

let personName = "saman Khan";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase() ));