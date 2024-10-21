
// ARRAY of object 
const data = [
    {name: "Dad", kind: "honeybager"},
    {name: "Mum", kind: "honeybager"},
    {name: "Jake", kind: "lion"},
    {name: "Papa", kind: "lion"}

];

function petToString(pet){
    return `
        PET NAME: ${pet.name}
        KIND: GOOD ${pet.kind}
    `;
}
function printPet(pet){
    console.log(petToString(pet));
}

// console.log(petToString(data[0]));
// console.log(petToString(data[data.length -1])); //last one

// for (i = 0; i < data.length; i++){
//     console.log(petToString(data[i]));

// }

data.forEach(printPet);


