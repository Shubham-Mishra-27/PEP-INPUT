// Write a function calculateDiscount that takes two parameters: price and discount (with a default value of 10). 
// The function should return the final price after applying the discount.

function calculateDiscount(price,discount=10){
    return (price-((discount*price)/100))
}
console.log(calculateDiscount(15,10))


//Create a function mergeArrays that takes two arrays as parameters and returns a new array that combines both arrays using the spread operator.

function mergeArrays(a,b) {
    return [...a,...b];
}
console.log(mergeArrays([2,3,4],[5,6]))

//Write a function logArguments that takes any number of arguments and logs them to the console. Use rest parameters to collect the arguments.

function logArguments(...a) {
    console.log(...a)
}

logArguments(2,3,4,5)

//Create a function createMessage that takes a default message and an indefinite number of names. 
// The function should return an array of personalized messages for each name.

function createMessage(a = "Welcome to Goa,",...b) {
    console.log(a,...b)
}

createMessage("Welcome to goa,","Singham")

// Define a function sum that takes three numbers as parameters and returns their sum. Use the spread operator to call this function with an array of numbers.

function sum(a,b,c) {
    return a+b+c;
}

const nums = [2,3,4]
console.log(sum(...nums));

//Write a function createUserProfile that takes three parameters: username, age (defaulting to 25), and 
// country (defaulting to "Unknown"). Return an object with these properties.

function createUserProfile(username, age = 25, country = "Unknown") {
    return {
        username,
        age,
        country
    };
}

console.log(createUserProfile("JohnDoe", 30, "USA"));
console.log(createUserProfile("JaneDoe"));
