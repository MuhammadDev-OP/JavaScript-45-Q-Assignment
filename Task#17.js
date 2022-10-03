
    /*Seeing the World: Think of at least five places in the world you’d like to visit
    • Store the locations in a array.Make sure the array is not in alphabetical order.
    • Print your array in its original order.
    • Print your array in alphabetical order without modifying the actual list.
    • Show that your array is still in its original order by printing it.  
    • Print your array in reverse alphabetical order without changing the order of the original list. 
    • Show that your array is still in its original order by printing it again. 
    • Reverse the order of your list.Print the array to show that its order has changed. 
    • Reverse the order of your list again.Print the list to show it’s back to its original order.
    • Sort your array so it’s stored in alphabetical order.Print the array to show that its order has been changed.
    • Sort to change your array so it’s stored in reverse alphabetical order.Print the list to show that its order has changed.*/

const  fav_cities = [
    "Kabul",
    "Madina",
    "Idlib",
    "Amsterdam",
    "Grozny"
];
console.log(fav_cities);

const result = fav_cities.slice().sort();
console.log("*********")
console.log(result)
console.log("*********Original")
console.log(fav_cities)

const result1 = fav_cities.slice().reverse();
console.log("\n*********")
console.log(result1)
console.log("*********Original")
console.log(fav_cities)
// Again
const result2 = fav_cities.slice().reverse();
console.log("\n*********Again")
console.log(result2)
console.log("*********Original")
console.log(fav_cities)

// Sorting and Reverse
console.log("Sorting and Reversing\n");
console.log(fav_cities.sort());
console.log(fav_cities.reverse());

