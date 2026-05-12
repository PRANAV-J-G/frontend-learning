let friends = 0 ; 

while (friends < 10){
    console.log(friends)
    friends = friends + 1 ; 
}

console.log(friends)


// for loops 

let count = 0; 

for (let i = 0 ; i < 10 ; i++){
    count += 1;
}

console.log(count)


// looping over arrays 

const arr = [1,2,4,5,2,12]; 
for (let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]) 
}

// for each loop 
arr.forEach(function(num){
    console.log(num);
})

// map function in forEach loops 
const newNumbers = arr.map(function(num){
    return num + 1; 
})
console.log(newNumbers);
    
// internals of a forEach loop 
const someFunction = function() {return 4} ; 
const otherFunction = function(fn) { return fn()};

console.log(otherFunction(someFunction));