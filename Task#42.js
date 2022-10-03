function show_magicians(magicians){
    for(let i=0; i < magicians.length ; ++i){
        console.log(magicians[i]);
    }
}

// I Done 43 Task in it, but these are all same just we had to make a new array in 42, Thanks
var great_magicians = [];
function make_great(magicians){
    for(let i=0; i < magicians.length; ++i ){
        var magician = magicians[i];
        var great_magician = magician + " The Great";
        great_magicians.push(great_magician);
        console.log(great_magicians[i]);
        great_magicians[i] = magicians;
    }
    console.log(magicians);

}
var magicians = ["maasd","khoniea","imar"];
show_magicians(magicians);
make_great(magicians); 

