/*Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.*/

const guests = [
    'Ateeq b',
    'Hammad Azzam', 
    'Hamza A'
];
var msg = "You are Invited to dinner today...!";
console.log(guests[0]+", " +msg);
console.log(guests[1]+", " +msg);
// The no.3 Guest didnt make it 

console.log("****POP***")
guests.pop();
console.log(guests);

console.log("****PUSH***")
guests.push("Abdullah") // Pushed new Guest 
console.log(guests)

console.log(guests[2]+", " +msg);
