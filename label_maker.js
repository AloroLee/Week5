const printContact = {
    name: "Paul",
    address: "2423 River walk place",
    city: "Atlanta",
    state: "GA",
    Zipcode: "52635"
}

function printLabel(p){
    return `
    Name: ${p.name} 
    Address: ${p.address}
    City: ${p.city} 
    State: ${p.state}
    Zipcode: ${52635}
    `;
}
console.log(printLabel(printContact))
// console.log(printContact);
// console.log(`${printContact.name}, ${printContact.address}, ${printContact.city}, ${printContact.stat}, ${printContact.Zipcode}`);
