
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

let studentList1 = [  // array of students
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] }
];

let studentList2 = [
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

function showAverages(studentList){
    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        const average = getAverage(student.scores);
        const textAverage = average.toFixed(1);
        console.log(student.name, textAverage);
    }
}
showAverages(studentList1);
showAverages(studentList2);


