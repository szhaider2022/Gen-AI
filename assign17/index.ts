/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.
*/

//console.log('\n'+'\x1b[4m'+'a) List of invitees who will attend the dinner to night:'+'\n');

let Invitee = ['Zayghum', 'Eric', 'Jhonson', 'mutahir'];
console.log(Invitee)
Invitee.splice(0, 0, 'ali akber')
console.log(Invitee)
let index_count = Invitee.length / 2
console.log('index count =', index_count)
Invitee.splice(2, 0, 'Mehdi')
console.log(Invitee)
console.log("We can invite only two people for dinner \n========================================")
// while (Invitee.length <2 ) {
//     let remove_guest='variable' + Invitee 
//     console.log(`We are sorry ${Invitee}, we can't invite you to dinner`, Invitee.pop())

// }
for (var remove_guest=0;remove_guest<=Invitee.length;remove_guest++) {
    console.log(`We are sorry ${Invitee[remove_guest]}, we can't invite you to dinner`, Invitee.pop())

}
for (var a=0;a<Invitee.length;a++) {
    console.log(`\n ${Invitee[a]} you are still invited`)
}
Invitee.splice(0)
console.log(Invitee)