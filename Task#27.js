const age = 17;

if(age < 2){
    console.log("Baby");
}
else if(age <=2  && age > 4 ){
    console.log("toddler");
}
else if(age >=4 && age < 13){
    console.log("kid");
}
else if(age >=13 && age < 20){
    console.log("teenager");
}
else if(age >=20 && age < 65){
    console.log("adult");
}
else if(age == 65 && age > 65){
    console.log("Elder");
}
else{
    console.error();
}

