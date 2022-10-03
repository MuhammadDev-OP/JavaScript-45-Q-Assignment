//Task 16
/*More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.*/

const guests = [
    'Ateeq b',
    'Hammad Azzam', 
    'Hamza A'
];
var msg = "You are Invited to dinner today...!";
console.log(guests[0]+", " +msg);
console.log(guests[1]+", " +msg);
// The no.3 Guest didnt make it 

console.log("****POP***");
guests.pop();
console.log(guests);

console.log("****PUSH***");
guests.push("Abdullah"); // Pushed new Guest 
console.log(guests);

console.log(guests[2]+", " +msg);

// Got More Space

console.log("Just Got New Dinner Table. And Space is available");
guests.unshift("Oasama");
guests.push("Maaaz");
guests.splice(2,0,"Saad");
console.log(guests);

//console.log("\n****Messages****");

for (let i=0; i<guests.length; i++){
    console.log(guests[i]+", " +msg)
}


