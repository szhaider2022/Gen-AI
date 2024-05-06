"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csv = require('csv-parser');
var fs = require('fs');
fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', function (row) {
    console.log(row);
})
    .on('end', function () {
    console.log('CSV file successfully processed');
});
// type User = {
//   firstName: string,
//   lastName?: string
// }
// let firstUser:User = {
//   firstName: "John",
// }
// let secondUser:Required<User> = {
//   firstName: "John",
//   lastName: "peter"
// }
// const fs = require('fs');
// // fs is a core Node.js module for file system operations
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     //if (err) throw err;
//     console.log(data);
// });
// // This code reads the content of 'example.txt' and logs it to the consolex1
