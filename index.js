const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
console.log(drivers)


const returnFirstTwoDrivers = function() {
    let firstTwo = ['Sally', 'Bob']
    return (firstTwo);
}
returnFirstTwoDrivers();

const returnLastTwoDrivers = function() {
    let lastTwo = ['Freddy', 'Claudia']
    return (lastTwo);
}
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

selectingDrivers[1]

const createFareMultiplier = x => {
    return function(fare) {
        return fare * x
    }
}
console.log(createFareMultiplier(4));

const fareDoubler = x => {
    return (x *2);
}

const fareTripler = x => {
    return (x * 3);
}

const selectDifferentDrivers = (drivers, select) => {
    if (select === returnFirstTwoDrivers) {
          return returnFirstTwoDrivers(drivers)
      } else if (select === returnLastTwoDrivers) {
          return returnLastTwoDrivers(drivers);
      }
  }
  selectDifferentDrivers(drivers, returnFirstTwoDrivers);



