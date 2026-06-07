// numbers lesson
var _int = 1234		// floating point float
var _float = 1234.54	// float

// Convert string to number
logger.debug(Number("1234"))
logger.debug(Number("1234.56"))
logger.debug(Number("abc"))		// converts to NaN

/* ---------------------------------
Static Methods for Number
--------------------------------- */
/*
isInteger()
Checks to see if a number includes decimal places (except for anything past 16 decimal places, too small to be represented)
Returns true or false
*/
logger.debug(Number.isInteger(1234.56))		// false
logger.debug(Number.isInteger(1234))
logger.debug(Number.isInteger(9007199254740991)) // true
logger.debug(Number.isInteger(9007199254740992)) // true, it looks at the
logger.debug(Number.isInteger(-9007199254740991)) // true
logger.debug(Number.isInteger(-9007199254740992)) // false, because isSafeInteger looks at the actual value

/*
parseFloat()
Takes a string and attempts to convert to a float number value, returns NaN if it can't
*/
logger.debug("12.12: ".concat(Number.parseFloat("12.12")))	// definetly a float
logger.debug("1234: ".concat(Number.parseFloat("1234")))	// still technically a float
logger.debug("abc: ".concat(Number.parseFloat("abc")))		// not a float
logger.debug(" 12.12: ".concat(Number.parseFloat(" 12.12")))	// doesn't care about the leading whitespace
logger.debug("12. 12: ".concat(Number.parseFloat("12. 12")))	// takes the value before the whitespace

/*
parseInt()
Takes a string and attempts to convert to an integer
*/
logger.debug("12.12: ".concat(Number.parseInt("12.12")))	// converted to 12
logger.debug("12.9: ".concat(Number.parseInt(12.9)))	// converted to 12 (doesn't round)
logger.debug("abc: ".concat(Number.parseInt("abc")))	// NaN

/* ---------------------------------
Instance Methods for Number
--------------------------------- */
var _int = 12345678
var _float = 1234.5678

/*
toFixed()
fix the decimal places to a certain point
does round
*/
logger.debug(_float.toFixed(2))	// 1234.57
logger.debug(_float.toFixed(3))	// 1234.568
logger.debug(_float.toFixed())	// 1235 <- it gets rounded
logger.debug(_int.toFixed(2))		// 12345678.00

/*
toPrecision()
specifies the number to a specific number of digits
scientific notion if the number is greater than the precise digit
*/
var a = 12345
var b = 12345.21
var c = 12.01

logger.debug(a.toPrecision(6))	// 12345.0
logger.debug(a.toPrecision(4))	// 1.235e+4 <- scientific notion and rounded
logger.debug(a.toPrecision(5))	// 12345
logger.debug(b.toPrecision(9))	// 12345.2100
logger.debug(c.toPrecision(6))	// 12.0100

/*
toString()
gets the string version of the number, can be used to specify a base
*/
logger.debug(_int.toString()) 	// string version so "12345678"
logger.debug(_int.toString(2))		// binary version (101111000110000101001110)
logger.debug(Number(2).toString(2))	// easier binary version (10)


/*
    Number Calculations
*/

/*
adding
*/
var n = 2

logger.debug(n + 2)     // 4.0

// ++
n++
logger.debug(n)          // 3.0

n = 2 // reset
logger.debug(n++)       // 2.0 - because ++ runs after the logging statement
logger.debug(n++)       // 3.0 - because ++ runs after the logging statement

n = 2 // reset
logger.debug(++n)       // 3.0
logger.debug(++n)       // 4.0

// +=
n = 2 // reset
n += 3 // n = n + 3
logger.debug(n)         // 5.0

// -
n = 2 // reset
logger.debug(n-1)       // 1.0
