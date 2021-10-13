function isPalindrome(word) {
  // Write your algorithm here
  let arrayOfLetters = word.split("")
  let reversed = arrayOfLetters.reverse()
  let joinedWord = reversed.join("")
  if (word === joinedWord) {
    return true
  } else{
    return false
  }
}

/* 
  Add your pseudocode here
  take a parameter and use split to make it into an array
  take that array and use the .reverse() operator
  join the string back together
  create if statement
  in the if statement if set the argument to stricly equal the new word.
  if true return true
  if false, return false
*/

/*
  Add written explanation of your solution here
  I took the word and split it into an array. I then used the reverse method to reverse the letters and joined then back together. I then created and if statement to see if 
  the argument word would be strictly equal to the new reversed word. If it was true, it would return true and if it returned false, it would return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
