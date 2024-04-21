// Seeing the World: Think of at least five places in the world you’d like to visit.

//Store the locations in a array. Make sure the array is not in alphabetical order.
let place_to_visit=['Iraq','Iran','Egypt','Syria','Germany'];
// Print your array in its original order.
console.log('original order: ',place_to_visit)

// Print your array in alphabetical order without modifying the actual list.
console.log('Alphabetical Order without modification of the orignal list',place_to_visit.slice().sort())
// • Show that your array is still in its original order by printing it.
console.log('Original Order',place_to_visit)
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse Order',place_to_visit.slice().sort().reverse())
// • Show that your array is still in its original order by printing it again.
console.log('Original Order',place_to_visit)
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('Reversed Order',place_to_visit.reverse())

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('original order: ',place_to_visit.reverse())
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Alphabetical order: ',place_to_visit.sort())
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Reversed order: ',place_to_visit.sort().reverse())


// let numbers=[12,21,54,1]
// let random_number=['abc',23,'zac','zxy',true]


// // console.log(numbers.sort())
// // console.log(random_number.sort())

// place_to_visit.sort((a,b) => {
//     if (b>a) return 1;
//     if (b<a) return -1;
//     return 0;
// })
// console.log(place_to_visit)