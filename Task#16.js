/*
    Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

    Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
    Remove guests from your list one at a time until only two names remain in your list. 
    Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
    Print a message to each of the two people still on your list, letting them know they’re still invited.
    Remove the last two names from your list, so you have an empty list. 
    Print your list to make sure you actually have an empty list at the end of your program.*/
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

guests.pop();
guests.pop();
guests.pop();
guests.pop();
console.log(guests);
guests.splice(0, guests.length);
console.log(guests);
console.log("All elements deleted");
