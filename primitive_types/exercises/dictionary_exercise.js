// lookup table: sex code -> readable word
var sexLookup = {
    M: "Male",
    F: "Female",
    O: "Other",
    U: "Unknown"
}

// build a patient dictionary out of message fields
var patient = {}
patient["mrn"] = msg['PID']['PID.3']['PID.3.1'].toString()
patient["dob"] = msg['PID']['PID.7']['PID.7.1'].toString()
patient["sexCode"] = msg['PID']['PID.8']['PID.8.1'].toString()

// translate the sex code, with a safe fallback
var code = patient["sexCode"]
patient["sex"] = sexLookup[code] || "Unrecognized"

// does a key exist
logger.debug("has dob: " + ("dob" in patient))
logger.debug("has ssn: " + ("ssn" in patient))

// confirm the lookup (safe, non-PHI value)
logger.debug("sex: " + patient["sex"])

// walk the dictionary, logging keys only (values are PHI)
for (var key in patient) {
    logger.debug("field: " + key)
}

// how many fields did we collect
logger.debug("field count: " + Object.keys(patient).length)