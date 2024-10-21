const person = { //key and values (create an object)
    first: "lee",
    last: "Aloro",
    age: 30,
    phone: "344-333-3333",
    DOB: new Date("9-53-1324")
};

person.hobby = "pool"; //adding to the object list

console.log(person.DOB)
console.log(person.age)
console.log(person.hobby)

const fruit = [ //no key (create arrays)
    "apple",
    "banana",
    "cherry"
]
console.log(fruit[1])

fruit.push("pineapple") //.push add to the end of the list
fruit.push("aaa","sss")

console.log(fruit[3])

empty_array = []
empty_object = {}