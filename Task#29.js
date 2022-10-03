var users = [
    'Admin',
    'Eric'
];
/* The Login will check if that is Admin it will print it, 
next loop it will check what is coming then it will print accordingly...*/
for (let i = 0; i < users.length; i++) { 
    if (i == 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + users[i] + " ,thank you for logging in again")
    }
    break;
}