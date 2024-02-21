// Code your solution in this file!
const returnFirstTwoDrivers = function(driver) {
    return [driver[0], driver[1]]
}

const returnLastTwoDrivers = function(driver) {
    return [driver[2], driver[3]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (value) {
    return function (fare) {
        return fare * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (drivers, scuber){
    if(scuber === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    } else if (scuber === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}