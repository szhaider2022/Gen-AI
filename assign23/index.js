/*
 Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each
line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and
another 5 tests evaluate to False.

*/
var car = 'subaru';
var model = 2024;
var owned_by = 'Bank';
if (car == 'subaru') {
    console.log("I predict True");
}
if (car == 'toyota' || model == 2024) {
    console.log('You are correct');
}
if (car == 'toyota' && model == 2024) {
    console.log('You are correct');
}
else
    console.log("Your answer is Incorrect");
if ((car == 'subaru' && model == 2024) || owned_by == 'Banca') {
    console.log('You are absolutely correct');
}
else
    console.log("Your answer is Incorrect");
if (car == 'toyota' || model == 2024 && owned_by == 'Bank') {
    console.log("Al done");
}
else
    console.log('Abey saley');
