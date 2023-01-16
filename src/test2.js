// write program that takes a number as an argument and returns true if the number is prime and false if it is not
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        } else {
            return true;
        }
    }
}
isPrime(); // expected output: true

// write a program that takes two words as an argument and returns true if they are anagrams and false if they are not
function isAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    const word1Array = word1.split(''); // split the word into an array of characters
    const word2Array = word2.split(''); // split the word into an array of characters
    for (let i = 0; i < word1Array.length; i++) { // loop through the first word (iterate through the array)
        if (!word2Array.includes(word1Array[i])) {
            return false;
        }
    }
    return true;
}

function isAnagramAlternative(word1, word2) {
    if (word1.length !== word2.length) { // if the words are not the same length they cannot be anagrams
        return false; // so return false
    }
    // sort the letters in the words alphabetically
    const sortedWord1 = word1.split('').sort().join(''); // first split the word into an array of characters, then sort the array, then join the array back into a string
    const sortedWord2 = word2.split('').sort().join('');
    // compare the sorted words
    return sortedWord1 === sortedWord2; // this line will return true or false
}

isAnagramAlternative(listen, silent); // expected output: true

// exmplaine to me how .split() works
// .split() is a method that takes a string and returns an array of strings
// .split() takes an argument that is the character that you want to split the string on

let text = "How are you doing today?";
const myArray = text.split(" "); // split the string on the space character
// expected output: Array ["How", "are", "you", "doing", "today?"]
document.getElementById("demo").innerHTML = myArray;

//
let text = "How are you doing today?";
const myArray = text.split(" "); // split the string on the space character

console.log(innerHTML = myArray[1]); // Return the second word. Expected output: are

//
let text = "How are you doing today?";
const myArray = text.split(""); // Split the string on each character becuase it is an empty string

console.log(innerHTML = myArray); // Expected output: Array ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", " ", "t", "o", "d", "a", "y", "?"]

//
let text = "How are you doing today?";
const myArray = text.split(" ", 3); // Use the limit parameter to return only the first 3 words

console.log(innerHTML = myArray); // expected output: Array ["How", "are", "you"]



// Tax calculator test
function taxCalculator(income, taxRate) {

}

// Write a function that takes two arguments, an amount in dollars and a tax rate in percent, and returns the amount of tax due.
function taxCalculator(income, taxRate) {
    return income * (taxRate / 100);
    // explaine the above line
    // the above line takes the income and multiplies it by the tax rate divided by 100
}
taxCalculator(600000, 30); // expected output: 180000
taxCalculator(50, 30); // expected output: 15. If a jumper costs $50 and the tax rate is 30%, then the tax due is $15


// write an exmaple ruby-method
def my_method
    puts "Hello World"
end

// write an example ruby-method that takes an argument
def my_method(name)
    puts "Hello #{name}"
end

// what is an eternal recursion?
// an eternal recursion is a function that calls itself without an exit condition

// what is a recursive function?
// a recursive function is a function that calls itself

def fix_spelling(name)
if (name = 'twittr') // we should use == instead of = because we are comparing two values
    name = 'twitter' // we should use return instead of name = 'twitter' because we want to return the value of name
else
    fix_spelling(name)
end
return 'name'
end

// add commnets to the above code to explain the errors
// the above code is an eternal recursion because it calls itself without an exit condition
// the above code is also an infinite loop because it calls itself without an exit condition

// write a function that takes three measurements of a triangle and returns the type of triangle
// equilateral, isosceles, scalene, or not a triangle
function triangleType(a, b, c) {
    if (a === b && b === c) {
        return 'equilateral';
    } else if (a === b || b === c || a === c) {
        return 'isosceles';
    } else if (a !== b && b !== c && a !== c) {
        return 'scalene';
    } else {
        return 'not a triangle';
    }
}
triangleType(3, 3, 3); // expected output: equilateral

// Write a function that takes three measurements in centimeters as an input and returns a the volume over a litre
function volumeOverLitre(a, b, c) {
    return (a * b * c) / 1000; // convert the volume to litres
}
volumeOverLitre(10, 10, 10); // expected output: 1 // the same as saying 1 litre



// write a program that prints the numbers 1 to 100 and for multiples of 3 print Fizz instead of the number and for multiples of 5 print Buzz
function process() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
process();

// write a program that prints the numbers 1 to 100 and replace numbers containing 3 with Fizz and replace numbers containing 5 with Buzz
function process2() {
    for (let i = 1; i <= 100; i++) {
        if (i.toString().includes('3') && i.toString().includes('5')) {
            console.log('FizzBuzz');
        } else if (i.toString().includes('3')) {
            console.log('Fizz');
        } else if (i.toString().includes('5')) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
process2();

// What is JSX?
// JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.
// write an example retun statement using JSX
return (
    <div>
        <h1>Hello World</h1>
    </div>
);

// rewrite the above an if statement using JSX
if (condition) {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

// rewrite the above if statement using JSX
return (
    <div>
        <h1>Hello World</h1>
        {condition ? <h1>Hello World</h1> : null}
    </div>
);

// put an if statement inside the return statement
return (
    <div>
        <h1>Hello World</h1>
        {condition && <h1>Hello World</h1>}
    </div>
);
// write an example JSX return statment that contains a valid code comment
return (
    <div>
        <h1>Hello World</h1>
        {/* this is a valid code comment */}
    </div>
);



// write a program that prints the numbers 1 to 100 and replace the digitis 3 with Fizz and 5 with Buzz only in the number
function process3() {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i.toString().includes('3')) {
            output += 'Fizz';
        }
        if (i.toString().includes('5')) {
            output += 'Buzz';
        }
        if (output === '') {
            output = i;
        }
        console.log(output);
    }
}
process3();

// rewrite the above program in a mathematical base of 5 instead of 10
function process4() {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 5 === 3) {
            output += 'Fizz';
        }
        if (i % 5 === 0) {
            output += 'Buzz';
        }
        if (output === '') {
            output = i;
        }
        console.log(output);
    }
}
process4();




function process10() {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        switch (true) {
            case i.toString().includes('3'):
                output += 'Fizz';
            case i.toString().includes('5'):
                output += 'Buzz';
            default:
                output = i;
        }
        console.log(output);
    }
}
process10();

// write a program that prints the numbers 1 to 100 and for multiples of 3 prints Fizz and for multiples of 5 print Buzz and for multiples of 3 and 5 print FizzBuzz
function process5() {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0) {
            output += 'Fizz';
        }
        if (i % 5 === 0) {
            output += 'Buzz';
        }
        if (output === '') {
            output = i;
        }
        console.log(output);
    }
}
process5();

// write a program that prints the numbers 1 to 100 and for numbers that multiply by both 3 and 5 print FizzBuzz
function process6() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log(i);
        }
    }
}
process6();

// write a program that prints the numbers 1 to 100 and for multiples of 3 prints Fizz and for multiples of 5 print Buzz and for multiples of 3 and 5 print FizzBuzz
function FizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

FizzBuzz();


// understanding
// += example x += y is the same as x = x + y
//text += cars[0] + "<br>";  // is the same as text = text + cars[0] + "<br>";

// without a for loop
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

// using a for loop

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
let i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

// using a for loop with let
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

// the concept of a for loop
for (statement 1; statement 2; statement 3) {
    // code block to be executed
}

// statement 1 is executed (one time) before the execution of the code block.
// this used to set the initial value of the loop variable
// statement 2 defines the condition for executing the code block.
// statement 3 is executed (every time) after the code block has been executed.
// this used to increment the loop variable
// the for loop will continue to loop as long as the condition is true
// when the condition becomes false, the loop will stop
// .length is a property of an array that returns the number of elements in the array
// here it is used to determine the number of times the loop should run

// find the length of Hello World
const str = 'Hello World';
const len = str.length;
console.log(len);

// find the length of an array
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
const len = cars.length;
console.log(len);

// find the length of a string
const str = 'Hello World';
const len = str.length;
console.log(len);

// create a for loop that increments i up to 5
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// will ouput 0, 1, 2, 3, 4 because the loop starts at 0 not 1

// create a for loop that will increment i from 1 to 101
for (let i = 1; i < 101; i++) { // this will increment i from 1 to 100
    // Explain the Modulus (Division Remainder) Operator
    // The modulus operator (%) returns the division remainder.
    // The modulus operator is used to check if a number is even or odd (2 % 2 = 0, 3 % 2 = 1).
    // The modulus operator is used to find the odd numbers.
    // The modulus operator is used to find the even numbers.
    // The modulus operator is used to find the prime numbers.
    if (i % 15 == 0) console.log("FizzBuzz"); // here we are checking if the number is divisible by 15 and the result is equal to 0. If it is then we print FizzBuzz
    // the modulus operator deals with whole numbers only. So for example if i is equal to 7 and we use the modulus operator to check if it is divisible by 3 then the result would be 1 because 7 divided by 3 is 2 with a remainder of 1. So the modulus operator will return 1.
    // So with if (i % 15 == 0) console.log("FizzBuzz"); we are checking to see if the integer is divisible by 15 without a remainder. If there is a remainder then the programm will move on to the next if statement.
    // 1 % 15 = 1 goes into 15 0 times with a remainder of 1
    // 2 % 15 = 2 goes into 15 0 times with a remainder of 2
    // 3 % 15 = 3 goes into 15 0 times with a remainder of 3
    // 4 % 15 = 4 goes into 15 0 times with a remainder of 4
    // 5 % 15 = 5 goes into 15 0 times with a remainder of 5
    // and so on until we reach 15 which is goes into 15 exactly 1 time with no remainder so is eqaul to 0 and will print FizzBuzz
    // 15 % 15 = 0 15 goes into 15 exactly 1 time with no remainder
    else if (i % 3 == 0) console.log("Fizz"); // here we are checking if the number is divisible by 3 and the result is equal to 0. If it is then we print Fizz
    // 1 % 3 = 1 goes into 3 0 times with a remainder of 1
    // 2 % 3 = 2 goes into 3 0 times with a remainder of 2
    // 3 % 3 = 3 goes into 3 1 time with no remainder so print Fizz
    else if (i % 5 == 0) console.log("Buzz"); // here we are checking if the number is divisible by 5 and the result is equal to 0. If it is then we print Buzz
    else console.log(i); // if none of the above conditions are met then we just print the number
}

// copy the above for loop and remove the comments
for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// rewrite the above for loop using a ternary operator
for (let i = 1; i < 101; i++) {
    console.log((i % 15 == 0) ? "FizzBuzz" : (i % 3 == 0) ? "Fizz" : (i % 5 == 0) ? "Buzz" : i);
}

// this is a one line for loop that does the same as the above for loop
for (let i = 1; i < 101;) console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
// rewrite the above for loop the old way. The important part to understand is that % will only return true if the remainder is 0
// For example console.log(1 % 3 === 0); will return false because 1 divided by 3 is 0 with a remainder of 1
// but console.log(3 % 3 === 0); will return true because 3 divided by 3 is 1 with a remainder of 0
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// i++ is the same as i = i + 1
// i++%3 is the same as i = i + 1 % 3
// so if i is equal to 1 then i++%3 is the same as 1 = 1 + 1 % 3 which is the same as 1 = 2 % 3 
// which is the same as 1 = 2 because 2 divided by 3 is 0 with a remainder of 2. Any value that isn't 0 is true so 2 is true



// rewrite the above for loop using a swtich statement
for (let i = 1; i < 101; i++) {
    switch (true) {
        case i % 15 === 0:
            console.log('FizzBuzz');
            break;
        case i % 3 === 0:
            console.log('Fizz');
            break;
        case i % 5 === 0:
            console.log('Buzz');
            break;
        default:
            console.log(i);
    }
}


// write a program that takes two words as an argument and returns true if they are annagrams (contain the same letters) and false if they are not
// for example isAnagram('hello', 'llohe') should return true

// write the worst fizzbuzz program you can think of
// for example
for (let i = 1; i < 101; i++) { // this for loop will loop from 1 to 100
    if (i % 3 === 0) { // if i is divisible by 3 with no remainder then print Fizz
        if (i % 5 === 0) { // if i is divisible by 5 with no remainder then print Buzz
            console.log('FizzBuzz');
        } else { // if i is not divisible by 5 with no remainder then print Fizz
            console.log('Fizz');
        }
    } else if (i % 5 === 0) { // if i is not divisible by 3 with no remainder and is divisible by 5 with no remainder then print Buzz
        console.log('Buzz');
    } else { // if i is not divisible by 3 with no remainder and is not divisible by 5 with no remainder then print i
        console.log(i);
    }
}



// for example isPrime(7) should return true and isPrime(8) should return false

