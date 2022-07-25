//Print numbers from 1 to 10

for (let i = 1; i < 11; i++) {
  console.log(i);
}

//Print the odd numbers less than 100

for (let i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Print the multiplication table with 7

for (let i = 0; i < 11; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

//Print all the multiplication tables with numbers from 1 to 10

for (let i = 0; i < 11; i++) {
  for (let o = 0; o < 11; o++) {
    console.log(`${i} * ${o} = ${i * o}`);
  }
}

//Calculate the sum of numbers from 1 to 10

let tmp = 0;

for (let i = 0; i < 11; i++) {
  console.log((tmp += i));
}

//Calculate the sum of even numbers greater than 10 and less than 30

let tmp = 0;

for (let i = 10; i < 30; i++) {
  if (i % 2 === 1) {
    console.log((tmp += i));
  }
}

function calculateCelsiusToFareint(celsius) {
  return (celsius * 9) / 5 + 32;
}

calculateCelsiusToFareint(40);

//Create a function that will convert from Fahrenheit to Celsius

function calculateFareintToCelsius(Fahrenheit) {
  return ((Fahrenheit - 32) * 5) / 9;
}

calculateFareintToCelsius(34);

//Calculate the sum of numbers in an array of numbers

function calculateTheSumOfNumber(array) {
  return array.reduce((e, a) => e + a);
}

calculateTheSumOfNumber([3, 7, 3, 2, 8]);

function calculateTheSumOfNumberV2(array) {
  let tmp = 0;

  for (let i = 0; i < array.length; i++) {
    tmp += array[i];
  }
  return tmp;
}

calculateTheSumOfNumberV2([3, 7, 3, 2, 8]);

//Calculate the average of the numbers in an array of numbers

function calculateAverageOfArray(array) {
  tmp = 0;
  for (let i = 0; i < array.length; i++) {
    tmp += array[i];
  }
  return tmp / array.length;
}

calculateAverageOfArray([3, 7, 3, 2, 8]);

function calculateAverageOfArrayV2(array) {
  return array.reduce((e, a) => e + a) / array.length;
}

calculateAverageOfArrayV2([3, 7, 3, 2, 8]);

//Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function returnPositiveNumber(array) {
  return array.filter((e) => e > -1);
}

returnPositiveNumber([-3, 7, -9, 2, 8]);

//Find the maximum number in an array of numbers

function findLargestNumber(array) {
  return array.reduce((e, a) => Math.max(e, a));
}

findLargestNumber([3, 9, 3, 2, 8]);

function findLargestNumberv2(array) {
  let tmp = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > tmp) {
      tmp = array[i];
    }
  }
  return tmp;
}

findLargestNumberv2([3, 9, 3, 2, 8]);

//Calculate the sum of digits of a positive integer number

function calculaeSumIntegerNumber(array) {
  let tmp = 0;
  for (let arrays of array) {
    if (arrays == Math.trunc(arrays)) {
      tmp += arrays;
    }
  }
  return tmp;
}

calculaeSumIntegerNumber([1, 7, 3, -8, 2.3, 3, 8.1]);

function calculaeSumIntegerNumber(array) {
  return array.filter((e) => Number.isInteger(e));
}

calculaeSumIntegerNumber([1, 7, -8, 3, 3.9]);

//Reverse an array

function reverseArray(array) {
  return array.reverse();
}

reverseArray([1, 7, 3, -8, 2.3, 3, 8.1]);

function reverseArrayV2(array) {
  let tmp = [];
  for (let i = array.length - 1; i >= 0; i--) {
    tmp.push(array[i]);
  }
  return tmp;
}

reverseArrayV2([1, 6, 3, 9, 4]);

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("Hello world");

function reverseStringV2(str) {
  let tmp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    tmp += str[i];
  }
  return tmp;
}

reverseStringV2("Hello world");

//Create a function that will merge two arrays and return the result as a new array

function mergeTwoArray (arrayOne, arrayTwo) {
    return arrayOne.concat(arrayTwo);
}

mergeTwoArray([1, 7, 3, 9, 3], [1, 6, 4, 0])

function mergeTwoArrayV2 (arrayOne, arrayTwo) {
    let tmp = [];
    for (let arrayOnes of arrayOne) {
        tmp.push(arrayOnes)
    }

    for (let arrayTwos of arrayTwo) {
        tmp.push(arrayTwos);
    }
    return tmp;
}

mergeTwoArrayV2([1, 7, 3, 9, 3], [1, 6, 4, 0])

//Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function returnArrayWithArrayTwo (arrayOne, arrayTwo) {
  let tmp = [];
  for (let arrayOnes of arrayOne) {
    for (let arrayTwos of arrayTwo) {
      if (arrayOnes == arrayTwos) {
        tmp.push(arrayOnes);
      }
    }
  }
  return tmp;
}

returnArrayWithArrayTwo([1, 7, 3, 8], [1, 7, 4, 6])

//Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

function returnElementArray (arrayOne, arrayTwo) {
  let tmp = [];

  for (let arrayOnes of arrayOne) {
      if (!arrayTwo.includes(arrayOnes)) {
        tmp.push(arrayOnes)
      }
    }
    return tmp;
  }

returnElementArray([1, 6, 3, 9], [1, 6, 9, 0])

//Create a function that converts a string to an array of characters

function convertStringToArray (str) {
  let tmp = [];
  for (let strs of str) {
    tmp.push(strs)
  }
  return tmp;
}

convertStringToArray("Hello world");