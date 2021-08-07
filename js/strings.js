// Strings and all strings methods
const str = 'some string';

// get element of the string
str[0]; // s
str.charAt(1); // 0

// replace part of the string
str.replace('some', 'new some') // new some string

// convert number to string
const num = 1;
String(num); // typeof numAsString is a string
num.toString()
num + ''

// find string length
str.length // 11

// methods to convert string to lower case or upper case
str.toLowerCase(); // some value
str.toUpperCase(); // SOME VALUE

// method returns the first index at which a given element can be found in the array, or -1 if it is not present.
str.indexOf('s') // 0
str.indexOf('a') // -1

// method performs a case-sensitive search to determine whether one string may be found within another string,
// returning true or false as appropriate.
str.includes('some') // true

// method retrieves the result of matching a string against a regular expression.
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex); // expected output: Array ["T", "I"]

// The split() method divides a String into an ordered list of substrings, puts these substrings into an array,
//  and returns the array.  The division is done by searching for a pattern;
// where the pattern is provided as the first parameter in the method's call.
str.split('') // ["s", "o", "m", "e", " ", "s", "t", "r", "i", "n", "g"]

//  method returns the part of the string between the start and end indexes, or to the end of the string.
str.substring(0,4) // "some"

// method extracts a section of a string and returns it as a new string, without modifying the original string.
str.slice(0,4) // "some"

// method removes whitespace from both ends of a string. 
// Whitespace in this context is all the whitespace characters 
//(space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
' 1'.trim() // "1"
