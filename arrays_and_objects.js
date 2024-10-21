
// sting - ordered list of characters 

text = "ABC"
console.log(text[0])
console.log(text[text.length - 1])

// Array - ordered list of values
list = ["apple", "banana", "cherry"]
console.log(list[0])
console.log(list[2])
console.log(list[list.length - 1])

// Object - A bag of values accessed by name/keyword 
dictionary = { "a" : "apple", "b" : "banana", "c": "cherry"}
console.log(dictionary["a"])
console.log(dictionary["c"])
console.log (dictionary.b)

airports = {
    "PDX" : "Portland Airport",
    "ATL" : "Atlanta Airport",
    "TPA" : "Tampa Airport",
    "ORL" : "Orlando Airport"
}
console.log(airports.ATL) //dot notation

zip_codes = {94949 : "happy, City"}
console.log(zip_codes[94949]) // no dot notation