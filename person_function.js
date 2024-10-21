
function Person(firstName, lastName, humanAge){
    return {
        first: firstName,
        last: lastName,
        age: humanAge
    };
}

let personObject = Person ("lee", "aloro", 30)

console.log(`
    FIRST: ${personObject.first}
    LAST: ${personObject.last}
    AGE: ${personObject.age}
`)