const me = {
    name : {
        First : "Pranav",
    }, 
    location : {
        street : "Nowhere Street" ,
        city : "Coimbatore"
    },

    getDetails() {
        return `${this.name.First} lives in ${this.location.city} at ${this.location.street}` }
}


// the fields inside the object can be changed but the value of the object itself cannot be changed  
console.log(me.getDetails());


// console.log(result)