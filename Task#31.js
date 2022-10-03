var current_users = [
    'muhammad',
    'khalid',
    'ateeq',
    'hammad',
    'yousha'
];
var new_users = [
    'abdullah',
    'eessa',
    'Ateeq',
    'Eric',
    'Yousha'
];

for(let i=0 ; i < new_users.length; i++){
    if( current_users[i] = new_users[i].toLowerCase() ){
        console.log("Sorry " + new_users[i] + ", that name is taken.");
    }
    else{
        console.log("Great, " + new_users[i] + " is still available.");
    }
}
