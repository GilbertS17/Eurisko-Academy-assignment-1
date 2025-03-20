function reverseString(str: string): string {
  // splitting the string into array of characters
  // then calling the function reverse to reverse
  // the array of characters and joining them back into a string
  return str.split("").reverse().join("");
}
