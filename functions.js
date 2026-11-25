// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number. 
function multiply(num1,num2,num3){
    return num1 * num2 * num3
}
console.log(multiply(1,8,9))

// // TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
const convertToSeconds = function(minutes){
    return minutes * 60
}
console.log(convertToSeconds(72))

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
function fahrenheitToCelsius(temperature){
    return (temperature - 32) * (5 / 9)
}
console.log(fahrenheitToCelsius(68))


// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverse(Hello){
    return Hello.split("").reverse("").join("")

}
console.log(reverse("Hello"))

// TODO: Create a function that takes in a string and returns the number of Vowelsinthe sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
function countVowels(str) {
  let count = 0
  const vowels = "aeiou"

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }

  return count
}

console.log(countVowels("Javascript"))
// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers
function isPrime(num) {
  if (num <= 1) {
    return false
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(7))
console.log(isPrime(10))