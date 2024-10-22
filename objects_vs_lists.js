// OBJECT {} VS ARRAYS []

// fight!

// access by index vs access by key (string or number)

// array is accessed by index AKA position
// objects values are access by key 

// All arrays are objects
// Most objects are not arrays 

// All dogs are mammals,
// not all mammals are dogd..

Object = {
    property1: "value1",
    property2: "value2",
    property3: "value3",
}

// Objects are NOUNS 
car = {
    price: 9999,
    make: "FORD",
    model: "MUSTANG",
    engine: {
        engineType: "Inline 4",
        pistons: [{rodThrown: false},{rodThrown: false},{rodThrown: false},{rodThrown: false},]

    }
}

htmlElemnt = {
    tegName: "div",
    class: ["hidden", "large", "col-3"],
    id: "thingy",
    value: "123"
}

list = [] //new array
list2 = new Array(); // new Object

colors = ["red","green","blue"]
console.log(colors[1]); //short hand
console.log(colors.at(0))
now = new Date(); // date object
count = new Number("123"); //number object

thing1 = {}; //object literal
thing2 = new Object();

lots = [];
for (let i = 0; i < 1000; i++){
    lots.push(i);
}
console.log(lots.length)
