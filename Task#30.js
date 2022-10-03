var users = [
];
/* The Login will check if that is Admin it will print it, 
next loop it will check what is coming then it will print accordingly...*/

for (let i = 1; i < 2; i++) { 
    if (i == 'Admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else if(i == 'user'){
        console.log("Hello " + users[i] + " ,thank you for logging in again")
    }
    else{
        console.log("We need to find some users!");
    }
}

