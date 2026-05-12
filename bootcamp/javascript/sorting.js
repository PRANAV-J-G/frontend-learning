const primeNumbers = [1,3,5,7,11]; 
// sorts by string
// sorts by unicode values 
console.log(primeNumbers.sort());
// return 1,11,3,5,7

// sorting by number 
//memorize this 
// this is a simple comparator , that tells the sort function which number to put first when 
// comparing the two numbers
console.log(primeNumbers.sort(function(num1,num2){
    if (num1 > num2){
        return 1;
    } else if (num2 > num1){
        return -1;
    }
    return 0 ;
}))


// chaining all these 

const Strings = ['a','C','d','e','b']; 
console.log(Strings.map(function(string) {return string.toUpperCase()}).sort())


// arrow functions 
const letters = ['a','C','d','e','b']; 
const upper = letters.map(str => {
    return str.toUpperCase();
}).sort();
console.log(upper); 


// another way of doing this same thing 
const sample = "My name is Pranav"; 

const result = sample.split(' ').map(s => 
    s.toUpperCase()
).filter(s => s !== 'IS').join(' '); 
console.log(result);



