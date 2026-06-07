var stringOne = "JavaScript within Mirth Connect"
var stringTwo = 'Learn javascript specifically for mirth.'
var fileName = "patient_panel.1.csv"
var ssn = msg['PID']['PID.19']['PID.19.1'].toString()

// how to log our strings (btw do not log out sensitive PHI)
// logging a raw value like this is exactly what NOT to do with PHI -
// we're only doing it here because this is fake test data. in a real
// channel, log the length or a masked value instead (more on this later)
logger.debug(ssn)   // 99999999

// typeof - check the type of a variable
logger.debug(typeof(stringOne))     // string
logger.debug(typeof stringOne)      // string

// length - check how many characters are in a string (the length)
logger.debug(stringOne.length)      // 31.0

// access each character in a string
logger.debug(stringOne[0])          // J
logger.debug(stringOne.charAt(0))   // J

// indexOf & lastIndexOf - get the position of a certain character
logger.debug(fileName.indexOf('.'))     // 13.0
logger.debug(fileName.lastIndexOf('.')) // 15.0
logger.debug(stringOne.indexOf('.'))    // -1.0

// includes
logger.debug(stringOne.includes('JavaScript'))  // true
logger.debug(stringTwo.includes('JavaScript'))  // false

// regex
var regex = /javascript/gi
logger.debug(stringOne.match(regex).length)     // 1.0
logger.debug(stringTwo.match(regex).length)     // 1.0

// startsWith - check if a string starts with a certain value
logger.debug(fileName.startsWith('patient_panel'))  // true

// endsWith - check if a string ends with a certain value
logger.debug(fileName.endsWith('.csv'))             // true

// slice - extract parts of a string (can use negative)
logger.debug(fileName.slice(0, fileName.indexOf('.')))  // patient_panel
logger.debug(fileName.slice(fileName.indexOf('.')))     // .1.csv 

// substring - extract parts of a string (swapping handled automatically)
logger.debug(fileName.substring(fileName.indexOf('.')))     // .1.csv 

// slice vs substring
logger.debug(fileName.substring(fileName.indexOf('.'), 0))     // patient_panel
logger.debug(fileName.slice(fileName.indexOf('.'), 0))         // (empty string)

// replace - replace a certain text with a different text
logger.debug(stringTwo.replace("mirth", "Mirth Connect"))   // Learn javascript specifically for Mirth Connect.

stringTwo = 'Learn javascript specifically for mirth mirth.'
logger.debug(stringTwo.replace("mirth", "Mirth Connect"))   // Learn javascript specifically for Mirth Connect mirth.

logger.debug(stringTwo.replace(/mirth/gi, "Mirth Connect")) // Learn javascript specifically for Mirth Connect Mirth Connect.

stringTwo = 'Learn javascript specifically for mirth.'  // just to reset

// split - create a list of strings from a delimiter
var csvHeaders = "PatientId,FirstName,LastName,DOB"
var columns = csvHeaders.split(',')

logger.debug(columns.length)    // 4.0
logger.debug(columns[0])        // PatientId
logger.debug(columns[1])        // FirstName
logger.debug(columns[2])        // LastName
logger.debug(columns[3])        // DOB

// concat - join strings together
logger.debug(stringOne.concat(stringTwo))           // JavaScript within Mirth ConnectLearn javascript specifically for mirth.
logger.debug(stringOne.concat(", ", stringTwo))     // JavaScript within Mirth Connect, Learn javascript specifically for mirth.

// + - additional way to join strings
logger.debug(stringOne + ", " + stringTwo)          // JavaScript within Mirth Connect, Learn javascript specifically for mirth.

// += - add it to the actual variable
stringOne += ", " + stringTwo
logger.debug(stringOne)                 // JavaScript within Mirth Connect, Learn javascript specifically for mirth.

// toUpperCase - turn every character into their capitalized versions
logger.debug(stringOne.toUpperCase())   // JAVASCRIPT WITHIN MIRTH CONNECT, LEARN JAVASCRIPT SPECIFICALLY FOR MIRTH.

// toLowerCase - turn every character into their lowercase versions
logger.debug(stringOne.toLowerCase())   // javascript within mirth connect, learn javascript specifically for mirth.

stringOne = "JavaScript within Mirth Connect"   // reset

/*
*   Padding
*/
var name1 = "John"
var name2 = "Marcus"
var name3 = "Elizabeth"

// padStart - add characters to the start of the string
logger.debug(name1.padStart(12))            //         John
logger.debug(name2.padStart(12))            //       Marcus
logger.debug(name3.padStart(12))            //    Elizabeth

logger.debug(name1.padStart(12, "*"))       // ********John
logger.debug(name2.padStart(12, "*"))       // ******Marcus
logger.debug(name3.padStart(12, "*"))       // ***Elizabeth

// padEnd - add characters to the end of the string
logger.debug(name1.padEnd(12, "*"))         // John********
logger.debug(name2.padEnd(12, "*"))         // Marcus******
logger.debug(name3.padEnd(12, "*"))         // Elizabeth***

var name1 = "  John  "

logger.debug("'" + name1 + "'")                 // '  John  '

// trimStart - remove whitespace at the start of the string
logger.debug("'" + name1.trimStart() + "'")     // 'John  '
// trimEnd - remove whitespace at the end of the string
logger.debug("'" + name1.trimEnd() + "'")       // '  John'
// trim - remove whitespace at the beginning and end of the string
logger.debug("'" + name1.trim() + "'")          // 'John'

// repeat - repeat a certain string value multiple times
logger.debug("*".repeat(4))     // ****

// escape characters
var title = "This course is titled \"Javascript within Mirth\""
logger.debug(title)     // This course is titled "Javascript within Mirth"