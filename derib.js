// "use strict"
// function compuiteComission(Salaried, salesAmount) {

//     let commission = 0;
//     if (Salaried == true) {

//         if (salesAmount >= 500) {
//             commission = salesAmount * 0.02;
//         }
//         else if (salesAmount > 300) {
//             commission = salesAmount * 0.01;
//         }
//     }

//     else
//         if (salesAmount >= 500) {
//             commission = (salesAmount * 0.03);
//         }
//         else if (salesAmount > 300) {
//             commission = (salesAmount * 0.02);
//         }
//     return commission;
// }
// console.log(compuiteComission(true, 500));
// console.log(compuiteComission(false, 500));
// //=====================

// function savingAccount(initialAmount, annualInterestRate, numberOfYears) {
//     const monthlyRate = annualInterestRate / (12 * 100);
//     const CompoundAmount = initialAmount * (Math.pow((1 + monthlyRate), numberOfYears * 12));

//     return CompoundAmount;
// }
// console.log(savingAccount(100, 10, 1));
// //====================================
// function calcuDownPayment(costOFHouse) {

//     if (costOFHouse >= 200000) {
//         return 5000 + (costOFHouse - 200000) * 0.1;
//     }
//     else if (costOFHouse >= 100000) {
//         return 7500 + (costOFHouse - 100000) * 0.15;
//     }
//     else if (costOFHouse >= 50000) {
//         return 2500 + (costOFHouse - 50000) * 0.1;

//     }
//     else {
//         return costOFHouse * 0.05;
//     }


// }
// console.log(calcuDownPayment(40000));
// console.log("expect 2500: ", calcuDownPayment(50000));
// console.log("expect 2000: ", calcuDownPayment(40000));
// console.log("expect 2500: ", calcuDownPayment(50000));
// console.log("expect 7500: ", calcuDownPayment(100000));
// console.log("expect 22500: ", calcuDownPayment(200000)) *
//     //======================================

//     function SumDiget(n) {
//         let sum = 0;
//         while (n != 0) {//234;
//             sum = sum + n % 10;//234%10=4//23%10=3 0+4+3+2
//             n = n / 10;//234/10=23//23/10=2     
//         }
//         return parseInt(sum);
//     }

// // console.log(SumDiget(234));
// //========================================
// function findproduct(n) {
//     let product = 1;
//     let temp = n;
//     while (temp != 0) {
//         product = product * (temp % 10);
//         temp = Math.floor(temp / 10)
//     }
//     return product;
// }
// console.log(findproduct(325));
// console.log(findproduct(303));
// console.log(findproduct(382));
// //=================================================
// function convertFahrenheit(tempinFarnite) {
//     const tempinselcious = parseFloat(5 / 9 * (tempinFarnite - 32));
//     return tempinselcious;
// }
// console.log("expect 0: ", convertFahrenheit(32));
// console.log("expect -17.7778: ", convertFahrenheit(0));
// console.log("expect 100: ", convertFahrenheit(212));
// console.log("expect 37.7778: ", convertFahrenheit(100));
// //=====================================================
// function calcDistance(x1, y1, x2, y2) {

//     const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
//     return distance;
// }

// console.log("expect 5 : ", calcDistance(0, 0, 5, 5));

function SumDiget(n) {
    let sum = 0;
    while (n != 0) {//234;
        sum = sum + n % 10;//234%10=4//23%10=3 0+4+3+2
        n = n / 10;//234/10=23//23/10=2     
    }
    return parseInt(sum);
}

console.log(SumDiget(234));


