const avenger = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰💰💰💰",
    power: "🤖",
    phrase: "Live happily"
}

console.log(avenger)

const {
    name,
    networth,
    power = "💿",
    skill = ["genius", "billionarie", "philanthropist"]
} = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰💰💰💰",
    power: "🤖",
    phrase: "Live happily"
}

console.log(name, power, skill)



const person = {
    firstName: "Jack",
    lastName: "Doe",
    age: 20
}

console.log(person.firstName, person.lastName)

const { firstName, lastName } = person

console.log(firstName, lastName)

//rename var during desctructring

const { firstName: userName, age: personAge } = person

console.log(userName, personAge)

//nested destruct


const person1 = {
    name1: 'John',
    age1: 25,
    address: {
        city: "india",
        zipcode: "100001"
    },
    hobbies: ["reading", "writing", "travelling", "coding"]
}

console.log(person1.hobbies[0])
const { name1, age1, address: { city, zipcode }, hobbies: [reading, writing, travelling, coding] } = person1

console.log(reading)
console.log(city)
console.log(coding)


//object shorthand => key and value name should be same

const studentName = "renuka"
const batch = "FSD59WD2"
const mark = 90

const student1 = {
    studentName,
    batch,
    score: mark,
}

console.log(student1)