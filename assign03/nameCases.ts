let name ='syed ZEEshan haider'
// // //Lower case
 console.log(name.toLowerCase())
// // //Upper case
 console.log(name.toUpperCase())

 // //Title Case Method 1
 const newName=name.split(" ").map((l) => l[0].toUpperCase() + 
 l.substr(1)).join(" ");

 console.log(newName)

 // //Title Case Method 2
 function TitleCase(str) {
    str=str.toLowerCase();
    str=str.split(' ');
    for (var i=0; i<str.length; i++) {
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    
}
console.log(TitleCase(name));

//console.log(TitleCase)
