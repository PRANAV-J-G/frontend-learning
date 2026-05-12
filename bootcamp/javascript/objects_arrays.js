// the keys are unique in an object and they are used to access the values of the object
// they are basically dictionaries in python and they are used to store data in key value pairs
const person = {
    name : "Pranav",
    age : 20,
    city : "Bangalore" 
}

console.log(person)
// both person.name and person["name"] will give the same output but the second one is more useful when we want to access a property with a variable key
console.log(person.name)
console.log(person["name"])


function suggestmusic(person){
    if(person.age < 18){
        console.log("You should listen to pop music")
    } else if(person.age >= 18 && person.age < 30){
        console.log("You should listen to rock music")
    } else {
        console.log("You should listen to classical music")
    }
}

// objects can also have methods which are functions that are defined inside an object and can be called using the object
const person2 = {
    name : "Pranav", 
    age : 20,
    speak() {
        return ("Spit some bars")
    },
}
console.log(person2.speak())

// objects are not ordered , but lists and arrays are ordered,  can be ordered 
// arrays (lists)
const daysInAWeek = ["Monday","Tuesday","Wednesday","Thursday"] 
console.log(daysInAWeek[1]); 
console.log(daysInAWeek[2]); 

