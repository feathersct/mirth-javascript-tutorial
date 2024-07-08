/*
    Given an HL7 message, filter the SSN values to just display the last 4.
    Hint the SSN field is PID.19.1

    Assumptions:
        - we can assume that the SSN is only numbers (no hyphens)

*/

var ssn = msg['PID']['PID.19']['PID.19.1'].toString()

logger.debug(ssn.charAt(0))