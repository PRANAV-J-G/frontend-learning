const monthlyrent = "500";
const yearlyrent = "monthlyrent" * 12 ;
console.log(yearlyrent);


// template strings in js 
// concatenate strings with a space without an additional empty " " string 
// this allows to make spaces in multiple strings based on the literal space instead of a simple " " string 

const firstName = "Brian" ; 
const lastName = "Cranston" ; 

const sentence = `Hello ${firstName} ${lastName}! How are you doing ?`;

//instead of 
const sentence1 = "Hello" + firstName + " " + lastName;