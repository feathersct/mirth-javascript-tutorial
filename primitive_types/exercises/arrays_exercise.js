// collect all the test codes
var testCodes = []
for each (var obx in msg['OBX']) {
    testCodes.push(obx['OBX.3']['OBX.3.1'].toString())
}

// how many, and the first and last
logger.debug("result count: " + testCodes.length)
logger.debug("first: " + testCodes[0])
logger.debug("last: " + testCodes[testCodes.length - 1])

// is hemoglobin in the panel
var hasHemoglobin = testCodes.indexOf("HGB") !== -1
logger.debug("hasHemoglobin: " + hasHemoglobin)

// join into one readable string (before we sort)
var joined = testCodes.join(", ")
logger.debug("codes: " + joined)

// sort alphabetically (reorders in place)
testCodes.sort()
logger.debug("sorted: " + testCodes.join(", "))

// collect just the abnormal results
var abnormalCodes = []
for each (var obx in msg['OBX']) {
    var flag = obx['OBX.8']['OBX.8.1'].toString()
    if (flag !== "N" && flag !== "") {
        abnormalCodes.push(obx['OBX.3']['OBX.3.1'].toString())
    }
}
logger.debug("abnormal count: " + abnormalCodes.length)
logger.debug("abnormal: " + abnormalCodes.join(", "))