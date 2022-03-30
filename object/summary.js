//Declaring an Object
let japan = {
  key: "value",
  region: "East Asia",
  population: 125.8,
  capital: "Tokyo",
};

//Accessing Values
console.log(japan.key); //"value"
console.log(japan.region); // "Southeast Asia"
console.log(japan.population); // 69.8
console.log(japan.capital); // "Bangkok"

//Reassigning Values in Objects
console.log(japan.key);
japan.key = "newValue";
console.log(japan.key);

console.log(japan.population); // 67.4
japan.population = 70.0;
console.log(japan.population); // 70.0

//Adding New Key-Value Pairs to Objects
japan.newKey = "value";
japan.language = "japan";

console.log(japan);

//Removing Key-Value Pairs from Objects
delete japan.newKey;
delete japan.language;

console.log(japan);
