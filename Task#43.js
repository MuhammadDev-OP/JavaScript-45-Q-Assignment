function show_magicians(magicians){
    for(let i=0; i < magicians.length ; ++i){
        console.log(magicians[i]);
    }
}

var great_magicians = [];
function make_great(magicians){
    for(let i=0; i < magicians.length; ++i ){
        var magician = magicians[i];
        var great_magician = magician + " The Great";
        great_magicians.push(great_magician);
        console.log(great_magicians[i]);
    }

}
var magicians = ["maasd","khoniea","imar"];
show_magicians(magicians); // Originals
make_great(magicians);  // Great One 

console.log(magicians); // ITs Same
