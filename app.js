/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/



//console.log('Exercise 2 Result:', isAdult(21));

function isAdult(age) {
   if (age >= 18) {
    return 'adult';
   } else {
    if (age > 18) {
        return 'minor'
    }
   }
}

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
function isCharAVowel(chr) {
if ('a' === 'vowel') {
    return true;
} else {
    if ('y' !== 'vowel') {
        return false;
    }
}
}
//Maybe this one '?'
/*function isCharAVowel(chr) {
    if ('a' === 'vowel') {
        return true;
    } else {
            return false;
    }
    }*/
//console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnSmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
function generateEmail(name, domain) {
   // console.log(`${name}@${domain}`);
    // the 'return' method is what I was taught
   return name + '@' + domain

}
//call or invoke function

console.log('Exercise 4 Result:', generateEmail("johnSmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
function greetUser(name, timeOfDay) {
    return 'Hi' + "," + timeOfDay + "," + name;
    // I cannot find the bug that will allow spaces in replace of the commas
}


console.log('Exercise 5 Result:', greetUser("Sam", "morning"));