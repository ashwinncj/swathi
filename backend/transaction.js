var sha1 = require('sha1')
const uuidv1 = require('uuid/v1')

var transaction = {
    site: function(params) {
        return createSiteNumber(params)
    },
    view: function() {

    }
}

function createPatient(data) {

}

//Function to create a tansaction to add Site Number
//Required parameters - name
//Expected Output - siteId
function createSiteNumber(params) {
    let data = {}
    data.tx = "site"
    data.id = uuidv1()
    data.name = params.name

    let meta = addMeta(data)
    let encapsulatedTx = {
        data: data,
        meta: meta
    }
    console.log(encapsulatedTx)
    return encapsulatedTx
}

function createRegion(data) {

}
//Function to create Region ID for the site
//Required parameters-Country Name
//Expected output-Region Id.

function createStrata(data) {

}
//Function to create Startification for the patient.
//Required parameters-Age.
//Expected output-Rand Id.

function createRandNumber(data) {

}
//Function to assign Rand Number for the patient.
//Required parameters-Age.
//Expected output-Rand Id.

/////////////////////////////////////////////////////////////////////////////////

function createVisitType(data) {

}


//Function to create Visit Type  for the patient.
//Required parameters-Scheduled/Unscheduled Visit
//Expected output-Patient assign to visit type.

////////////////////////////////////////////////////////////////////////////////////
//function to create visit number for the patient.
//Required parameters-Visit number to be enetered.
//Expected output -Patient details updated with respective visit.
function createVisitNumber(data) {

}

/////////////////////////////////////////////////////////////////////////////////
function addMeta(data) {
    let meta = {
        txHash: sha1(JSON.stringify(data)),
        txTime: new Date().toISOString()
    }
    return meta
}



module.exports = transaction