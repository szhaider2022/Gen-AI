
/*
19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
of people you are inviting to dinner.
*/
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


console.log(`There a ${Invitee.length} numbers of people to be invited in the dinner`)
