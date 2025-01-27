// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
function capitalizeFirstLetter(string) {
    let words = string.split(" ");
    let capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    return capitalizedWords.join(" ");
}

console.log(capitalizeFirstLetter("mickey mouse"));
console.log(capitalizeFirstLetter('kiera gonzalez'));

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.
function wordsWithE(array) {
    return array.filter(word => word.includes("e") && !word.startsWith("e"));
}


console.log(wordsWithE(["ellen", "jane", "zigland", "pedestrian"]));
console.log(wordsWithE(['red', 'lindsay', 'equine', 'drip']));

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears
function objectLetter(string) {
    const counter = {};
    let str = string.split("");
    for (let i = 0; i < str.length; i++) {
        let test = str[i];
        if (!counter[test]) {
            counter[test] = 1;
            continue;
        } else {
            counter[test]++;
        
        }
        
    }
    return counter;
}

console.log(objectLetter("hello"));
console.log(objectLetter("michael"));
// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }