function createPlayerDetails(input) {
    let inputValue = parseInt(input);
    let addedNumber = 0;
    let calculatedValue = 0;
    let calculation = '';

    if(inputValue % 3 === 1) {
        addedNumber = -1;
    } else if(inputValue % 3 === 0) {
        addedNumber = 0;
    } else {
        addedNumber = 1;
    }
    
    calculatedValue = (inputValue + addedNumber) /3;

    calculation = calculation + '[('+addedNumber+'+'+inputValue+') /3] = ' + calculatedValue;

    return {
        addedNumber: addedNumber,
        calculatedValue: calculatedValue,
        calculation: calculation
    }
}

module.exports = createPlayerDetails;