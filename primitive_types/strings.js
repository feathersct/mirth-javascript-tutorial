/*
    We can intialize a string using quotes, this could be double quotes or single quotes
    Also since most of our messages are text based, then when we pull our a value it'll most likely be a string
*/
var stringOne = "JavaScript within Mirth Connect"
var stringTwo = "Learn javascript specifically for mirth."
var fileName = "patient_panel.1.csv"
var ssn = msg['PID']['PID.19']['PID.19.1'].toString()   // doesn't work for javascript source connectors

// Display the string in the log
logger.debug(ssn)

// Get the type of an object
logger.debug(typeof(stringOne))
logger.debug(typeof stringOne)
logger.debug(typeof(ssn))

// Get the length of a string
logger.debug(stringOne.length)

// Getting a specific character
logger.debug(stringOne[0])
logger.debug(stringOne.charAt(0))

// Getting the postion of a character
logger.debug(fileName.indexOf('.'))
logger.debug(fileName.lastIndexOf('.'))

// Search for a value inside of a string
logger.debug(stringOne.includes('JavaScript'))
logger.debug(stringTwo.includes('JavaScript'))

// Use regex to find a certain value or values
var findJSValues = /javascript/gi
logger.debug(stringOne.match(findJSValues).length)

// We can see if a string starts with a certain value
logger.debug(fileName.startsWith('patient_panel'))

// We can see if a string ends with a certain value
logger.debug(fileName.endsWith('.csv'))

// We can get only part of a string
logger.debug(fileName.slice(0, fileName.indexOf('.')))  // just the file name
logger.debug(fileName.slice(fileName.indexOf('.')))

logger.debug(fileName.substring(0, fileName.indexOf('.')))  // just the file name
logger.debug(fileName.substring(fileName.indexOf('.')))

// Difference between substring and slice
logger.debug(fileName.slice(fileName.indexOf('.'), 0))  // returns none because it didn't switch the values
logger.debug(fileName.substring(fileName.indexOf('.'), 0))  // automatically switches the values for us if start > end

// We can split out a string into an array
var csvHeaders = "PatientId,FirstName,LastName,DOB"
var columns = csvHeaders.split(',')
logger.debug(columns.length)
logger.debug(columns[0])
logger.debug(columns[1])
logger.debug(columns[2])
logger.debug(columns[3])

// We can join strings together with the concat method
logger.debug(stringOne.concat(stringTwo))
// maybe we want to add a comma in between, we can add another parameter to concat
logger.debug(stringOne.concat(", ", stringTwo))
// Alternatively we could use the plus to add them
logger.debug(stringOne + ", " + stringTwo)

// If we wanted to add it to the variable we could use the += operator
stringOne += ", " + stringTwo
logger.debug(stringOne)

// We have a few formatting methods we can call
// We can make all the characters uppercase
logger.debug(stringOne.toUpperCase())

// We can make all the characters lowercase
logger.debug(stringOne.toLowerCase())

// We can pad the start with a string so we meet the number of characters
var name1 = "John"
var name2 = "Marcus"
var name3 = "Elizabeth"
logger.debug(name1.padStart(12))
logger.debug(name2.padStart(12))
logger.debug(name3.padStart(12))

// Additionally we could pad the ends
logger.debug("'" + name1.padEnd(12) + "'")
logger.debug("'" + name2.padEnd(12) + "'")
logger.debug("'" + name3.padEnd(12) + "'")

// We can also trim whitespace from either ends or both
name1 = "  John  "
logger.debug("'" + name1.trimStart() + "'")

logger.debug("'" + name1.trimEnd() + "'")

logger.debug("'" + name1.trim() + "'")
