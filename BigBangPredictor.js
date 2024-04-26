//Problem:
// There was a tale when 2 prime numbers collided and a big bang happened. Scientists found out
// the 2 prime numbers are 3 and 5 but they need a model to generate an array of numbers to
// predict when the big bang will happen again.

// Solution:
// Create a script to iterate through 1 to 100 and replace any number divisible by 3 with the word
// BIG number divisible by 5 with the word BANG. If the number is divisible by 3 and 5, replace it
// with BIG BANG. Generate the array and output to ‘output.json’ file with result as follow:
// [“1”, “2”, “BIG”, “4”, “BANG”, “BIG”, “7”, “8”, “BIG”, “BANG”, “11”, “BIG”, “13”, “14”, “BIGBANG”,
// .... all the way to 100]

//import built in module fs that allows working with file system
const fs = require('fs');
//Declare an array to store the output
const bigbang = [];

//Loop through from 1 to 100  for prediction of bigbang theory occurence . It will happen when both 3 and 5 are divisible 
//which shows that the prime number 3 and 5 are within the number
for (let i = 1; i <= 100; i++) {
    //if 3 and 5 is divisible return BIGBANG to indicate big bang happen
    if (i % 3 == 0 && i % 5 == 0)
        bigbang[i - 1] = "BIGBANG";
    // if only 3 is dividible return BIG to show the element for big bang explanation (3) is found
    else if (i % 3 == 0)
        bigbang[i - 1] = "BIG";
    // if only 5 is dividible return BANG to show the element for big bang explanation (5) is found
    else if (i % 5 == 0)
        bigbang[i - 1] = "BANG";
    //The rest will just store it number
    else
        bigbang[i - 1] = String(i);
}

//Convert array to json 
const myJSON = JSON.stringify(bigbang);

//write a .json file
fs.writeFileSync('output.json',myJSON);

