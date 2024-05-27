// class => blueprint of an object

//class creation 

class Cars {
    constructor() {
        this.name = "BMW",
            this.model = "X7",
            this.color = "Black"
    }
}

//create object 

const bmw = new Cars()
console.log(bmw) //Cars {name: 'BMW', model: 'X7', color: 'Black'}

const bmw1 = new Cars()
console.log(bmw1) //Cars {name: 'BMW', model: 'X7', color: 'Black'}



class Cars1 {
    constructor(name1, model1, color1) {
        this.name1 = name1
        this.model1 = model1
        this.color1 = color1
    }
}

//create object 

const rr = new Cars1("RR", "RR1", "white")
console.log(rr)

const vw = new Cars1("VW", "vento", "red")
console.log(vw)


//this => access property of an object 

let firstName = "Yukesh"
let lastName = "Chandran"

const user = {
    firstName: "Soorya",
    lastName: "Deviga",
    greet: function () {
        return `Say hi to ${this.firstName} ${this.lastName}`
    }
}

console.log(user.greet())