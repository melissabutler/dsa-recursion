function product(nums, i = 0) {
    if (i === nums.length) return 1;
    return nums[i] * product(nums, i + 1)
}

function longestWord(words, i = 0, longest = 0){
    if (i === words.length) return longest;
    //set longest to the longer of the two comparison, the word at i or longest
    longest = Math.max(words[i].length, longest)
    return longestWord(words, i + 1, longest)
}

function everyOther(string, i = 0, newString = ""){
    if (i >= string.length) return newString;
    newString += string[i];
    // add 2 to index to skip every other number
    return everyOther(string, i + 2, newString);
}

function isPalindrome(string, i = 0){
    let leftIdx = idx;
    let rightIdx = string.length - idx - 1;
    // if you get far enough that left/right idx match, return true! you made it!
    if (leftIdx >= rightIdx) return true;
    // if left and right side are not the same, return false
    if(string[leftIdx] !== str[rightIdx]) return false;

    return isPalindrome(string, i + 1)
}

function findIndex(array, string, i = 0){
    if(i >= array.length) return -1;
    if(string !== array[i]){
        return findIndex(array, string, i + 1)
    } return i;
    
}

function reverseString(string, i = 0, reverse = ""){
    if (i >= string.length) return reverse;
    reverse += (string[string.length - i - 1]);
    return reverseString(string, i + 1, reverse)
}

function gatherStrings(obj){
    let stringsArr = [];
    for (let key in obj) {
        if (typeof obj[key] === "string") stringsArr.push(obj[key]);
        if (typeof obj[key] === "object") stringsArr.push(...gatherStrings(obj[key]));
    }
    return stringsArr;
}