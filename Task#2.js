/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
 uppercase, and titlecase.*/

function lowercase(name){
    var name = name.toLowerCase();
    return name;
}
function uppercase(name){
    var name = name.toUpperCase();
    return name;
}
console.log(lowercase("Muhammad"));
console.log(uppercase("Muhammad"));

