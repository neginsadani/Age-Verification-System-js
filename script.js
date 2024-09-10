let age = parseInt(prompt("Please enter your age:"));

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13 && age <= 17) {
  console.log("You are a teenager.");
} else if (age < 13 && age > 0) {
  console.log("You are a child.");
} else {
  console.log("You are not a Human.");
}
