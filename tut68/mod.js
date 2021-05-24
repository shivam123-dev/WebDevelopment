// Creating a module

console.log("This is module.js");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

// It exports the average function whenever the mod.js
// is imported

// module.exports = average; // Single exporting method

// For multiple exporting
// "module.exports" is an object

// First Way
// module.exports = {
//     avg: average,
//     name: "Shivam",
//     repo: "Github"
// }

// Second Way
module.exports.name = "Shivam";