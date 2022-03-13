// {
// let sum = function sum(a,b) {
//         return a + b;
//     }

//     //console.log(sum(2,5));
//     //console.log(sum);
// // console.log(typeof sum);

// }
// const calculator = {
//     'num1': 0,
//     'num2': 0,
//     'sum': function () {
//         return calculator.num1 + calculator.num2;
//     },
//     'diff': function () {
//         return calculator.num1 - calculator.num2
//     }
// };
// calculator.num1 = 10;
// calculator.num2 = 13;
// console.log(calculator.sum());
// console.log(calculator.diff());
// {

//     const cooking = function () {
//         console.log("food preparing");
//         console.log("food ready");
//         cb();
//     }

//     const wake_me_up = function () {
//         console.log("wake up");
//     }

//     const alert_me = fuction() {
//         alert("stop movie,come for dinner");
// }

// cooking(alert_me);
// }
{
    const btn = document.getElementById('main_btn');

    const fn = function () {
        const text = document.getElementById('main_txt');
        if (text.innerText == "Js function") {
            (text.innerText = "Callback Function");
        } else {
            text.innerText = "Js Function";
        }
    }
    btn.addEventListener('click', fn);
}