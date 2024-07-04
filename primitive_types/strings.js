/*
	We'll go over different properties and methods we can use within the string class.
	Properties:
		- length
	Instance Methods:
		- charAt()
		- concat()
		- startsWith()
		- endsWith()
		- includes()
		- indexOf()
		- lastIndexOf()
		- match()
		- slice()
		- padEnd()
		- padStart()
		- split()
		- substring()
		- toUpperCase()
		- toLowerCase()
		- trimStart()
		- trimEnd()
		- trim()
*/

var a = "This is a string"
var b = 'This is a string too!'

logger.debug(typeof(a))
logger.debug(typeof(b))

logger.debug(a)
logger.debug(b)

/*
	length
	returns the number of characters in the string
*/
var value = "123456789"
var value2 = "Name: John Smith"

logger.debug(value.length)	// 9
logger.debug(value2.length)	// 16

/* ---------------------
	Instance Methods
--------------------- */
var sentence = "The wheels on the bus, go round and round."
var sentence1 = "The wheels on the bus"
var sentence2 = "go round and round"

/*
	charAt()
	Given an number, it'll pull the character out at that specified location (zero-indexed)
*/

logger.debug(sentence.charAt(2))	// e
logger.debug(sentence.charAt(3))	// blank space

/*
	concat()
	Joins together strings in order
*/

logger.debug(sentence1.concat(', ', sentence2)) 	// The wheels on the bus, go round and round
logger.debug(sentence1.concat(sentence2))		// The wheels on the busgo round and round

/*
	startsWith()
	Returns a boolean if the start of the string contains the string in the method.
	We can add a start position to start at a certain characters (zero indexed)
*/

logger.debug("Start With: " + sentence1.startsWith('The'))	// true
logger.debug("Start With: " + sentence.startsWith('The'))	// true
logger.debug("Start With: " + sentence2.startsWith('The'))	// false

logger.debug("Start With: " + sentence1.startsWith('The', 5))	// false




/*
	endsWith()
	Returns a boolean if the string ends with the string parameter
	Can also add an end position as the second argument (defaults to length of string) (not zero indexed)
*/
logger.debug(sentence1.endsWith('bus'))		// true
logger.debug(sentence1.endsWith('round'))	// false
logger.debug(sentence2.endsWith('round'))	// true

logger.debug(sentence1.endsWith('bus', 13))	// false, because it looks at 'The wheels on' (the first 13 characters)
logger.debug(sentence1.endsWith('on', 13))	// true, because it looks at 'The wheels on' (the first 13 characters)

/*
	includes()
	Returns a boolean if the string is in the search string
	Can also add a position as the second argument, so the position it should start searching (zero-indexed)
	Can't use regex
*/

logger.debug(sentence1.includes('wheels'))	// true
logger.debug(sentence1.includes('spider'))	// false

logger.debug(sentence1.includes('bus', 13))	// true, because it looks at ' the bus' (starting at the 14th character)
logger.debug(sentence1.includes('on', 13))	// false, because it looks at ' the bus' (starting at the 14th character)

/*
	indexOf()
	Returns the first position of the specified string, returns -1 if not found
	Can also add an end position as the second argument (defaults to length of string) (zero indexed)
	Can't use regex
*/

logger.debug(sentence1.indexOf('wheels'))	// 4
logger.debug(sentence1.indexOf('spider'))	// -1
logger.debug(sentence1.indexOf(' '))		// 3
logger.debug(sentence1.indexOf('w'))		// 4
logger.debug(sentence1.indexOf('W'))		// -1, because it's case sensitive

logger.debug(sentence1.indexOf('bus', 13))	// 18, because it looks at ' the bus' (starting at the 14th character)
logger.debug(sentence1.indexOf('on', 13))	// -1, because it looks at ' the bus' (starting at the 14th character)

/*
lastIndexOf()
Returns the last position of the specified string, returns -1 if not found
Can also add an end position as the second argument (defaults to length of string) (zero indexed)
Can't use regex
*/

logger.debug(sentence1.lastIndexOf('wheels'))	// 4, since there's only one wheels
logger.debug(sentence1.lastIndexOf('spider'))	// -1
logger.debug(sentence1.lastIndexOf(' '))		// 17
logger.debug(sentence1.lastIndexOf('w'))		// 4
logger.debug(sentence1.lastIndexOf('W'))		// -1, because it's case sensitive

logger.debug(sentence1.lastIndexOf('bus', 13))	// -1, because it looks at 'The wheels on' (starting at the 14th character)
logger.debug(sentence1.lastIndexOf('on', 13))	// 11, because it looks at 'The wheels on' (starting at the 14th character)

/*
indexOf() and lastIndexOf() together
finds the start and end chacters
*/
logger.debug(sentence2.indexOf('round'))		// 3
logger.debug(sentence2.lastIndexOf('round')) 	// 13

/*
match()
Gets the strings matching the string against a regex and returns an array (this could be an array of strings or characters, depending on regex)
returns empty array if no matches found
*/
var regex = /[A-Z]/g	// gets any uppercase letters
for each(var character in sentence1.match(regex)){
	logger.debug(character)
}

regex = /[a-z]/g		// gets any lowercase letters
for each(var character in sentence1.match(regex)){
	logger.debug(character)
}

regex = /[a-z]/		// returns the whole string if there's a lowercase in the string
for each(var character in sentence1.match(regex)){
	logger.debug(character)
}

regex = /The/g		// gets the word The
for each(var character in sentence1.match(regex)){
	logger.debug(character)
}

/*
	slice()
	extracts a section of the string
	zero-indexed
*/
var ssn1 = "123-56-7890"
var ssn2 = "098-76-5432"
var ssn3 = "203-78-3928"

logger.debug(ssn1.slice(4))		// 56-7890
logger.debug(ssn1.slice(4, 6))	// 56
logger.debug(ssn1.slice(7))		// 7890

logger.debug(ssn1.slice(-4))		// 7890
logger.debug(ssn2.slice(-4))		// 5432
logger.debug(ssn3.slice(-4))		// 3928


/*
	padEnd()
	adds a string to the end of a string until it reaches the amount given
	counts the amount of characters in the string so take that into effect
*/

logger.debug(sentence1.padEnd(25,'.'))					// adds 4 . because sentence1 is 21 characters in length
logger.debug(sentence1.padEnd(sentence1.length + 10, '.'))	// adds 10 . because we use sentence1 length
logger.debug(sentence1.padEnd(25) + sentence2)			// adds 4 ' ' and joins sentence2


/*
	padStart()
	adds a string to the end of a string until it reaches the amount given
	counts the amount of characters in the string so take that into effect
*/
var ssn1 = "123-56-7890"
var ssn2 = "098-76-5432"
var ssn3 = "203-78-3928"

logger.debug(ssn1.slice(-4).padStart(11,'*'))
logger.debug(ssn2.slice(-4).padStart(11,'*'))
logger.debug(ssn3.slice(-4).padStart(11,'*'))


/*
	split()
	Takes a string and splits the string by the string provided and returns an array.
*/
var csvHeaders = "PatientId,FirstName,LastName,DOB"
for each(var column in csvHeaders.split(',')){
	logger.debug(column)
}

/*
	substring()
	gets a section of the string based on start position or start and end position
*/

var str = "Name: John Smith"

logger.debug(str.substring(str.indexOf(' ')+1))	// John Smith

/*
	toLowerCase()
	Makes the string characters all lowercase
	Useful for comparing values
*/
var value1 = "Penicillin"
var value2 = "PENICILLIN"

logger.debug(value1.toLowerCase())	// penicillin
logger.debug(value2.toLowerCase())	// penicillin

logger.debug(value1.toLowerCase() == value2.toLowerCase())	// true

/*
	toUpperCase()
	Makes the string characters all uppercase
	Useful for comparing values
*/

var value1 = "Penicillin"
var value2 = "PENICILLIN"

logger.debug(value1.toUpperCase())		//PENICILLIN
logger.debug(value2.toUpperCase())		//PENICILLIN

logger.debug(value1.toUpperCase() == value2.toUpperCase())	// true

/*
	trimStart()
	removes the whitespace from the start of the string
*/

var value = "   John Smith   "
logger.debug(value.trimStart())	// 'John Smith   '

/*
	trimEnd()
	removes the whitespace from the end of the string
*/

var value = "   John Smith   "
logger.debug(value.trimEnd() + "'")	// '   John Smith'


/*
	trim()
	removes the whitespace from both ends of the string
*/

var value = "   John Smith   "
logger.debug("'" + value.trim() + "'")	// 'John Smith'