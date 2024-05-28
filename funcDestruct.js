const studentName = "Renuka"
const batch = "FSD59WD2"
const mark = 90

const student1 = {
    studentName,
    batch,
    score: mark,
}

console.log(student1)

//funct destrcut

//Renuka has got 90 and she belongs to FSD59WD2 batch

function printDetails(student1) {
    return student1.studentName + " has got " + student1.score + " and she belongs to " + student1.batch + " batch "
}

console.log(printDetails(student1))

//destrcuturing

function printDetails1(student1) {
    const { studentName, score, batch } = student1
    return studentName + " has got " + score + " and she belongs to " + batch + " batch "
}

console.log(printDetails1(student1))

//destrcut in argument itself

function printDetails2({ studentName, score, batch }) {

    return studentName + " has got " + score + " and she belongs to " + batch + " batch "
}

console.log(printDetails2(student1))

//Template literals => `` => backtick +  interpolation ${} => substitute value


function printDetails3({ studentName, score, batch }) {
    return `${studentName} has got ${score} and she belongs to ${batch} batch`
}

console.log(printDetails3(student1))

//arrow function  + Template literals  + destructuring  => es6

const printDetails3 = ({ studentName, score, batch }) => `${studentName} has got ${score} and she belongs to ${batch} batch`

console.log(printDetails3(student1))
