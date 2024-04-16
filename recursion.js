/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = 0){
  if (i === words.length) return longestWord;
  //set longest to the longer of the two comparison, the word at i or longest
  longestWord = Math.max(words[i].length, longestWord)
  return longest(words, i + 1, longestWord)
}

/** everyOther: return a string with every other letter. */


function everyOther(string, i = 0, newString = ""){
  if (i >= string.length) return newString;
  newString += string[i];
  // add 2 to index to skip every other number
  return everyOther(string, i + 2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(string, i = 0){
  let leftIdx = i;
  let rightIdx = string.length - i - 1;
  // if you get far enough that left/right idx match, return true! you made it!
  if (leftIdx >= rightIdx) return true;
  // if left and right side are not the same, return false
  if(string[leftIdx] !== string[rightIdx]) return false;

  return isPalindrome(string, i + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(array, string, i = 0){
  if(i >= array.length) return -1;
  if(string !== array[i]){
      return findIndex(array, string, i + 1)
  } return i;
  
}

/** revString: return a copy of a string, but in reverse. */

function revString(string, i = 0, reverse = ""){
  if (i >= string.length) return reverse;
  reverse += (string[string.length - i - 1]);
  return revString(string, i + 1, reverse)
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj){
  let stringsArr = [];
  for (let key in obj) {
      if (typeof obj[key] === "string") stringsArr.push(obj[key]);
      if (typeof obj[key] === "object") stringsArr.push(...gatherStrings(obj[key]));
  }
  return stringsArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
