const person = { 
    first: "lee",
    last: "Aloro",
    age: 30,
    phone: "344-333-3333",
    DOB: new Date("9-53-1324")
};

const person2 = { 
    first: "Tama",
    last: "Thur",
    age: 40,
    phone: "344-333-9333",
    DOB: new Date("9-5-1999")
};


function printLabel(p){
    return `
    Name: ${p.first} ${p.last}
    Phone: ${p.phone}
    `;
}

console.log(printLabel(person));
console.log(printLabel(person2));

console.log(printLabel({first:"lyly", last:"key"}));