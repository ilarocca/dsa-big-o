// 1.1

// 15 people
// if one of 15 have same breed as my dog
// Constant run time
function sameBreed(n, a) {
  const personWithDog = n.find((element) => element === a);
  return personWithDog;
}

// 1.2
// 15 people
// ask one by one
// Linear run time
function sameBreed(n, a) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === a) return `${n[i]} has the same dog, a ${a}`;
  }
}

// 2
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// this is Constant run time. No matter the value, the time constraint will always be 1.

// 3
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
// this is Polynomial run time. This requires a nested loop and the running time will be some input(arr1) raised to the power of the constant power(arr2)

// 4
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
// This is linear run time. The run time is directly proportional to the size of the input

// 5
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
// This is also linear run time. The run time is directly proportional to the size of the input

// 6
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}
// this is Polynomial run time. This requires a nested loop and the running time will be some input(arr[i]) raised to the power of the constant power(arr[j])

// 7
// This is also linear run time. The run time is directly proportional to the size of the input
// it loops through the length of the number and pushes i's value to the result array

// 8
// this is Logarithmic time. This function establishes the currentIndex and current element, depending on
// if the element is less than or greater than the 'item' param, the min/max index is altered -/+ 1 to go through the rest of the array to find a match

// 9
// Constant run time. no matter input size, will always take same amount of time to complete.

// 10
// linear run time

// 11
function Hanoi(n, from, to, via) {
  if (n == 0) return;

  Hanoi(n - 1, from, via, to);
  moveDisk(from, to);
  Hanoi(n - 1, via, to, from);
}

function countingSheep(numSheep) {
  for (let i = numSheep; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log("All sheep jumped over the fence");
}
countingSheep(4);

function powerCalculator(base, exp) {
  let result = base;
  for (i = 1; i < exp; i++) {
    result *= base;
  }
  console.log(result);
}
powerCalculator(2, 3);

function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  let revStr = "";
  for (i = 1; i <= str.length; i++) {
    revStr += str[str.length - i];
  }
  console.log(revStr);
}
reverseString("hello");

function nthTriNum(n) {
  let triNum = 0;
  for (let i = 0; i <= n; i++) {
    triNum += i;
  }
  console.log(triNum);
}

nthTriNum(5);

function strSplit(str, sep) {
  let result = [];
  let prevIndex = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sep) {
      result.push(str.slice(prevIndex + 1, i));
      prevIndex = i;
    }
    if (i === str.length - 1 && str[i] !== sep) {
      result.push(str.slice(prevIndex + 1, i + 1));
    }
  }
  console.log(result);
}

strSplit("02/20/2020", "/");

function fibonacci(n) {
  let seq = [1, 1];
  if (n === 0) {
    console.log(0);
    return;
  }
  if (n === 1) {
    console.log(1);
    return;
  }
  if (n === 2) {
    console.log(seq);
    return;
  }
  for (let i = 2; i <= n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  console.log(seq);
}

fibonacci(9);

function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
  console.log(result);
}

factorial(5);

// 13 & 14
// Count Sheep: O(n)
// Power Calculator: O(n)
// Reverse String: O(n)
// Triangle: O(n)
// Split: O(n)
// Factorial: O(n)
// Fibonacci: O(n)
