"use strict";

class Math {

    /* This function will return the square of the number*/
    square(number) {
        return number * number;
    }

    /* This function will return the base to the power exponent*/
    power(base, exponent) {
        let pow = 1;
        for (let i = 1; i <= exponent; i++)
            pow *= base;
        return pow;
    }

    /* This function will return the simple interest*/
    simpleInterest(principal, rate, time) {
        return (principal * rate * time) / 100;
    }

    /* This function will return the compound interest*/
    compoundInterest(principal, rate, time, noOfTimeInterestCompounded) {
        let n = noOfTimeInterestCompounded;
        return principal * (this.power(1 + (rate / (n * 100)), n * time));
    }
}

module.exports = Math;