
function Person(firstName, lastName, humanAge){
    return { //begin object literal
        first: firstName,
        last: lastName,
        age: humanAge
    };//return literal object
}

let personObject = Person ("lee", "aloro", 30)

console.log(`
    FIRST: ${personObject.first}
    LAST: ${personObject.last}
    AGE: ${personObject.age}
`);