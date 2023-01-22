/*
Write a function called onlyEvenValues 
which accepts an array and returns a 
new array with only the even values 
in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

    use primitive js first
    then use filter

*/

// we want to look through the array
// check in the array if theres even values
// take the even values and put them in array

//iterate through the array
// if num is even add the even number to new arr
// else keep iterating

//
//
//

function onlyEvenValues(arr) {
  return arr.filter(function (val, i) {
    return val % 2 === 0;
  });
}

console.log(onlyEvenValues(arr));

//
//
//

function onlyEvenValuesPrimitive(arr) {
  let newArr = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      newArr.push(num);
    } else {
      num++;
    }
  }
  return newArr;
}

console.log(onlyEvenValuesPrimitive(arr));

//
//
//

function onlyEvenValuesPrimitiveOptimized(arr) {
  let newArr = [];
  for (let num of arr) {
    num % 2 === 0 ? newArr.push(num) : num++;
  }
  return newArr;
}

console.log(onlyEvenValuesPrimitiveOptimized(arr));

//NEXT PROBLEM //NEXT PROBLEM //NEXT PROBLEM
//NEXT PROBLEM //NEXT PROBLEM //NEXT PROBLEM
//NEXT PROBLEM //NEXT PROBLEM //NEXT PROBLEM

/*
Write a function called removeVowels 
which accepts a string and returns 
a new string with all of the vowels 
(both uppercased and lowercased) removed. 
Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

// define what vowels are
// define an empty string
// transform the string into an array
// once the string is an array itterate through each letter
// check if the letter is a vowel
// if the letter is a vowel add it to a new string

function removeVowelsPrimitive(str) {
  const vowels = "aeiou";
  newStr = "";
  let arrOfStrings = str.toLowerCase().split("");
  for (let i = 0; i < arrOfStrings.length; i++) {
    if (vowels.indexOf(arrOfStrings[i]) === -1) {
      newStr = newStr + arrOfStrings[i];
    }
  }
  return newStr;
}

console.log(removeVowelsPrimitive("valadez"));

//
//
//

function removeVowelsPrimitiveImproved(str) {
  const vowels = "aeiouAEIOU";
  let newStr = "";
  let arrOfletters = str.split("");
  for (let letters of arrOfletters) {
    if (vowels.indexOf(letters) === -1) {
      newStr += letters;
    }
  }
  return newStr;
}

console.log(removeVowelsPrimitiveImproved("valadez"));

//
//
//

function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  let newStr = str.split("");
  const noVowels = newStr.filter(function (val, index) {
    if (vowels.indexOf(val) === -1) {
      return val;
    }
  });
  return noVowels.join("");
}

console.log(removeVowels("valadez"));

///
///

///
///
/*
Write a function called vowelCount 
which accepts a string and returns 
an object with the keys as the vowel 
and the values as the number of times 
the vowel appears in the string. 
This function should be case insensitive 
so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

//look for vowels in the string
//// change the string to something iterable
//// define vowels
// iterate over each letter
// if the letter is a vowel place the letter in the object
// if the letter is not a vowel pass and continue iterating

function vowelCount(str) {
  const vowels = "aeiou";
  let obj = {};
  let arrOfletters = str.toLowerCase().split("");
  for (let i = 0; i < arrOfletters.length; i++) {
    if (vowels.includes(arrOfletters[i])) {
      if (!obj[arrOfletters[i]]) {
        obj[arrOfletters[i]] = 1;
      } else {
        obj[arrOfletters[i]]++;
      }
    }
  }
  return obj;
}

console.log(
  vowelCount("Elie") // {e:2,i:1};
);

function vowelCount2(str) {
  const vowels = "aeiou";
  let obj = {};
  let arrOfletters = str.toLowerCase().split("");
  for (let letters of arrOfletters) {
    if (vowels.includes(letters)) {
      !obj[letters] ? (obj[letters] = 1) : obj[letters]++;
    }
  }
  return obj;
}

console.log(
  vowelCount2("Elie") // {e:2,i:1};
);

function vowelCount3(str) {
  const vowels = "aeiou";
  let arr = str.toLowerCase().split("");
  return arr.reduce((acc, nexVal) => {
    if (vowels.includes(nexVal)) {
      !acc[nexVal] ? (acc[nexVal] = 1) : acc[nexVal]++;
    }
    return acc;
  }, {});
}

console.log(vowelCount3("williamvaladez"));

//
//
//
///
//
//

/*
Write a function called valTimesIndex 
which accepts an array and returns a 
new array with each value multiplied 
by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

// define a new empty array
// iteratre over the array
// look at each value in the array
// multiply by its index

function valTimesIndex(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * i);
  }
  return newArr;
}

console.log(valTimesIndex([1, -2, -3]));

function valTimesIndex2(arr) {
  arr.map((val, i) => {
    val * i;
  });
}

console.log(valTimesIndex([0, 2, 6]));

//
///
//
//
//
//
/*
Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

// in an object the key is the category given to a value
// the value is the item assigned to the category

/*
const object = {
    name: will,
    cat: nilo,
    wife: chloe
}

in the object above name, cat, and wife are keys... 
while will chloe and nilo are the values
*/

function addKeyAndValue(arr, key, value) {}

//
//
//
function addKeyAndValue(arr, key, value) {
  for (let objects of arr) {
    if (!objects[key]) {
      objects[key] = value;
    }
  }
  return arr;
}

console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);

function addKeyAndValue2(arr, key, value) {
  arr.map((eachObj) => {
    eachObj[key] = value;
  });
  return arr;
}

console.log(
  addKeyAndValue2(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);

//
//
//
///
///
///

/*
Write a function called showFirstAndLast 
which accepts an array of strings and 
returns a new array with only the first 
and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']


*/

// define a newArr
// split each item into its own array
// look through the split arr
// take the first letter
// take the last letter
// put those letters into a new arr
// return the new arr

function showFirstAndLast(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i][0];
    let last = arr[i][arr[i].length - 1];
    newArr.push(first + last);
  }
  return newArr;
}

console.log(
  showFirstAndLast(["colt", "matt", "tim", "test"]) // ["ct", "mt", "tm", "tt"]
);

function showFirstAndLast2(arr) {
  let newArr = [];
  for (let words of arr) {
    let first = words[0];
    let last = words[words.length - 1];
    newArr.push(first + last);
  }
  return newArr;
}

console.log(
  showFirstAndLast2(["colt", "matt", "tim", "test"]) // ["ct", "mt", "tm", "tt"]
);

function showFirstAndLast3(arr) {
  const newArr = arr.map((val, i) => {
    return val[0] + val[val.length - 1];
  });
  return newArr;
}

console.log(
  showFirstAndLast3(["colt", "matt", "tim", "test"]) // ["ct", "mt", "tm", "tt"]
);
//
///
////
///

/*
Write a function called findInObj which accepts an array 
of objects, a key, and some value to search for and 
returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

// search through the array for value
// if we find that value return the first found value

function findInObj(arr, key, searchValue) {
  for (let objects of arr) {
    if ((objects[key] = searchValue)) {
      return objects;
    }
  }
}

console.log(
  findInObj(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner",
    true
  )
); // {first: 'Tim', last:"Garcia", isCatOwner: true}

function findInObj2(arr, key, searchValue) {
  return arr.find((val, i) => {
    return val[key] === searchValue;
  });
}

console.log(
  findInObj2(
    [
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia", isCatOwner: true },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele", isCatOwner: true },
    ],
    "isCatOwner",
    true
  )
); // {first: 'Tim', last:"Garcia", isCatOwner: true}

//
//
//
//
//
//

/*
Write a function called extractValue 
which accepts an array of objects 
and a key and returns a new array 
with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

const array = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

// create a new array with only the values of the key
// iterate through each object
// take the value of the key and extract it
// place the value into a new array
function extractValue2(array, key) {
  return array.reduce((acc, objects) => {
    return (acc += `'${objects[key]}',`);
  }, []);
}

extractValue2(array, "name");

function extractValue(arr, key) {
  let newArr = [];
  for (let objects of arr) {
    newArr.push(objects.name);
  }
  return newArr;
}

extractValue(array, "name"); // ['Elie', 'Tim', 'Matt', 'Colt']

//
//
///
//
//
//
//
//

/*
Write a function called addKeyAndValue 
which accepts an array of objects and 
returns the array of objects passed to 
it with each object now including the 
key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

const arr2 = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

// look at the array by iterating
// take each object and add the key and value
// if the object is empty add the key and value
// if it is not continue iterating

function addKeyAndValue(arr2, key, value) {
  for (let i = 0; i < arr2.length; i++) {
    let obj = arr2[i];
    obj[key] = value;
  }
  return arr2;
}

function addKeyAndValue2(arr2, key, value) {
  for (let obj of arr2) {
    obj[key] = value;
  }
  return arr2;
}

function addKeyAndValue3(arr2, key, value) {
  return arr2.reduce((acc, currentObj) => {
    currentObj[key] = value;
    acc.push(currentObj);
    return acc;
  }, []);
}

addKeyAndValue3(arr2, "title", "ninkapoops");
addKeyAndValue(arr2, "title", "Instructor");
addKeyAndValue2(arr2, "title", "Instructor");

//
//
//
//
//
//
//
//

/*
Write a function called partition which
 accepts an array and a callback and 
 returns an array with two arrays inside of it. 

 The partition function should run the callback 
 function on each value in the array and 
 if the result of the callback function at 
 that specific value is true, the value should 
 be placed in the first subarray.
  
 If the result 
 of the callback function at that specific value 
 is false, the value should be placed 
 in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const names = ["Elie", "Colt", "Tim", "Matt"];

function isEven(val) {
  return val % 2 === 0;
}

function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}

console.log(isEven(arr));

// look through the arr by looping through it.
// use the call back function on the arr?
// check to see if the callback function returns true
// if it does return true grab the true values and put them in an array
// if it doesnt return true grab the false values and put them in their own array

function partition(arr, callback) {
  let evenArr = [];
  let oddArr = [];
  let seperatedArr = [];
  for (let items of arr) {
    callback(items) === true ? evenArr.push(items) : oddArr.push(items);
  }
  seperatedArr = [...[evenArr], ...[oddArr]];
  return seperatedArr;
}

function partition2(arr, callback) {
  oddArr = [];
  return arr.reduce(
    (acc, current) => {
      callback(current) === true
        ? acc.array1.push(current)
        : acc.array2.push(current);
      return acc;
    },
    { array1: [], array2: [] }
  );
}

console.log(partition2(arr, isEven)); // [[2,4,6,8], [1,3,5,7]];
console.log(partition2(names, isLongerThanThreeCharacters));
