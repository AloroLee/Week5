
let kids = ["Natalie", "Brittany", "Zachary"];
kids.push('Bianca');

// for OF* for Array/List
for (let value of kids) {
 console.log(value);
}

// kids.unshift to put name on top of the list 

// for IN* grabs all keys from an object
let object = {tam: 111, aloro: 222, lee: 444};

for (let yep in object){
    let score = object[yep];
    // console.log(`${key}: ${score}`);
    console.log(yep);
}