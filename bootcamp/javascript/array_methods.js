const PrimeNumbers = [1,3,5,7,9]; 
console.log(PrimeNumbers.length) 
console.log(PrimeNumbers.join(" | "))


const course = [
    { teacher : "Kyle Simpson" , course : "JavaScript" } ]

    // adds to the last of the list
course.push({teacher : "Jen" , course : "HTML"})
console.log(course)


// removes the last element in the list 
course.pop()
console.log(course)

course[0] = {teacher : "Avinash" , course : "Sampling"}
console.log(course)


multiple = [
    { teacher : "Kyle Simpson" , course : "JavaScript" } , 
    { teacher : " Kumar" , course : "Sampling"} , 
    { teacher : "Jen" , course : "HTML"}
]

// splice the list , it starts from the 0th index and shows only 2 elements as given in the second arg 
// const result = multiple.splice(0,2)
// console.log(result)


const result = multiple.splice(0,2,{teacher : "Pranav" , course : "Python"})
console.log(result)