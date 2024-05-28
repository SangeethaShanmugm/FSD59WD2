const arr = ["We", "are", "learning", "spread", "operator"]

console.log(arr)//['We', 'are', 'learning', 'spread', 'operator']

console.log(...arr)//We are learning spread operator

console.log("We", "are", "learning", "spread", "operator")//We are learning spread operator

//copy array

const arr1 = ["one", "two"]

// const arr2 = [...arr1, "three", "four"]

// console.log(arr1)//['one', 'two']
// console.log(arr2)//['one', 'two', 'three', 'four']

const arr2 = ["three", "four", ...arr1]

console.log(arr1)//['one', 'two']
console.log(arr2)// ['three', 'four', 'one', 'two']


const sameAddress = arr1 === arr2//different address
console.log(sameAddress)//false

//clone array


let a = [1, 2, 3]
let b = a //copy by reference

console.log(a)//[1, 2, 3]
console.log(b)//[1, 2, 3]

const c = a === b//same address
console.log(c)//true

let data = ["apple", "orange", "grapes"]

let copiedData = [...data]

console.log(data)
console.log(copiedData)

let address = data === copiedData
console.log(address)

data.push("mango")

console.log(data)
console.log(copiedData)

address = data === copiedData
console.log(address)

//rest paramaters  => using spread operator in function argument


let result = function (...arg) {
    console.log(arg)
}

result(2)//[2]
result(2, 3, 4) // [2, 3, 4]
result(5, 6, 7, 8, 9) //[5, 6, 7, 8, 9]


function multiply(x, y, z, a) {
    console.log(x * y * z * a)
}
const multi = [1, 2, 3, 4, 5]

multiply(...multi) //24



function displayInfo(name, age, ...hobbies) {
    console.log(`Name: ${name}, Age: ${age}`) //Name: jack, Age: 20
    console.log(`Hobbies: "${hobbies.join('","')}"`)//Hobbies: reading,traveling,painting,gardening,cooking
}

displayInfo("jack", 20, "reading", "traveling", "painting", "gardening", "cooking")

