# Custom js Library for math functions & Finance calculations

To run, follow these steps-
* Open your preferred terminal (or command prompt) and install the npm package by runnning the code:
 ```
 npm install -g cm-math-lib
 ```
 
* After installation is complete, use the library functions in your project as given below-
```
const mathLib = require("math-lib");

//print square of 5 ie 25
console.log(math.square(5));

//print 2 to the power of 5 ie 32
console.log(math.power(2,5));

//print simple interest where principal = 1000, rate = 2, time period = 2
console.log(math.simpleInterest(1000,2,2));

//print compound interest where principal = 1000, rate = 3, time = 7, no of time interest is compounded = 6
console.log(math.compoundInterest(1000,3,7,6));
```

---