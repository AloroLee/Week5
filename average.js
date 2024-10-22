
let sumTotal = 0;

// function addThemUp(numberList){
//     let sumTotal = 0;
//     for (let i = 0; i < numbers.length; i++){
//         let n = numberList[i];
//         sumTotal += n;
//         // sumTotal = sumTotal + n
//     }
//     return sumTotal;
// }

// let numbers = [6, 3, 5, 0, 2];
// let total = addThemUp(numbers)
// console.log(total);

// let quantity = numbers.length;
// let average = total / quantity
// console.log("AVERAGE:", average)

// short version

let numbers = [6, 3, 5, 0, 2];

function getAverage(numberList){
    let sumTotal = 0;
    for (let i = 0; i < numberList.length; i++){
        let n = numberList[i];
        sumTotal += n;
        // sumTotal = sumTotal + n
    }
    return sumTotal / numberList.length;
}
console.log("AVG:",getAverage(numbers))


