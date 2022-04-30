let number = Number();

if (number > 0 && number % 2 == 0) {
  console.log("Positive even");
} else if (number > 0 && number % 2 !== 0) {
  console.log("Positive odd");
} else if (number < 0 && number % 2 == 0) {
  console.log("negative even");
} else if (number < 0 && number % 2 !== 0) {
  console.log("negative odd");
} else {
  console.log("zero");
}
