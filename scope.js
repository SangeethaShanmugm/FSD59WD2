//scope => lifetime of a variable
//let, const => block scope / local scope
//var  => global scope / functional scope
//block =>{}

{
    var y1 = 10;
    let y2 = 20
}

console.log(y1)

// not defined(error) vs undefined(value)

// can a block hold var or will it leak outside  => yes

var price = 1000

function getPrice() {
    console.log("The old price is", price)
    // var price = 500
    console.log("The new price is", price)
}

getPrice()

//hoisting + lexical scope

//grandFather => 💰 => 🏠(Own scope)

//Father => 💰  + 💰 => 🚗(Own scope) + 🏠(lexical scope => grandFather)

//Child  => 💰  + 💰 + 💰 => 💻(Own scope) + 🚗(lexical scope => Father) + 🏠(lexical scope => grandFather)


//closure => own scope + lexical scope

function outer() {
    var a = 20
    function inner() {
        console.log(a)
    }
    return inner
}

// // console.log(outer())
// var close = outer()
// close()
outer()()

//Hoisting

//JIT => Just In time compilation
// 1. compilation phase => console => skip
// 2. execution phase => JS & context

//Example - 1 => var
// 1. compilation phase
console.log(x) // skip
//1000 lines
var x = 50 //JS => Do you know x?  No || what is the value? => context => x  => undefined
console.log(x) //skip

// 2. execution phase
console.log(x) // JS => Do you know x?  yes || what is the value? => context => x  => undefined
var x = 50 //JS => Do you know x?  Yes || what is the value? => context => x  => 50
console.log(x) //JS => Do you know x?  Yes || what is the value? => context => x  => 50




//Example - 2 => let
// 1. compilation phase
// console.log(z) // skip
// let z = 50 //JS => Do you know z?  No || what is the value? => context => z  => don't initialize
// console.log(z) //skip

//  2. execution phase
console.log(z) // JS => Do you know z?  yes || what is the value? => context => z =>  Uncaught ReferenceError: Cannot access 'z' before initialization
let z = 50
console.log(z) 
