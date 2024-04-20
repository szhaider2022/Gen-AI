/*
16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

let Invitee = ['Zayghum', 'Eric', 'Jhonson', 'mutahir'];
console.log(Invitee)
Invitee.splice(0, 0, 'ali akber')
console.log(Invitee)
let index_count = Invitee.length / 2
console.log('index count =', index_count)
Invitee.splice(2, 0, 'Mehdi')
console.log(Invitee)
