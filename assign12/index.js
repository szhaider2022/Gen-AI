/*
12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
should be the same, but each message should be personalized with the person’s name.
*/
var names = ['Ammar', 'Mutahir', 'Ali Mehdi', 'Zaidi'];
for (var a = 0; a < names.length; a++) {
    //let friends_sequence=names[a]
    //console.log('Good to see you', names[a]) 
    console.log("Good to see you ".concat(names[a]));
}
