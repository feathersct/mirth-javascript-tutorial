// grab our fields as strings
var ssn = msg['PID']['PID.19']['PID.19.1'].toString()
var patientClass = msg['PV1']['PV1.2']['PV1.2.1'].toString()

// build our booleans
var hasSSN = ssn !== ""
var isInpatient = patientClass === "I"
var isEmergency = patientClass === "E"
var needsBed = isInpatient || isEmergency
var shouldProcess = needsBed && hasSSN
var rejectMessage = !shouldProcess

// ternary for our note
var processingNote = shouldProcess ? "Process immediately" : "Hold for review"

// log out the results (no PHI)
logger.debug("hasSSN: " + hasSSN)
logger.debug("isInpatient: " + isInpatient)
logger.debug("isEmergency: " + isEmergency)
logger.debug("needsBed: " + needsBed)
logger.debug("shouldProcess: " + shouldProcess)
logger.debug("rejectMessage: " + rejectMessage)
logger.debug("processingNote: " + processingNote)