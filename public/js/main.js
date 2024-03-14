Telegram.WebApp.ready();

let tg = Telegram.WebApp;

    Telegram.WebApp.MainButton.setText('Выход').show().onClick(function () {
        const data = JSON.stringify({test: "Может позже"});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    });


// 1 grid
let btn1 = document.getElementById('btn1');
let ab1 = document.getElementById('ab1');
let btnMinus1 = document.getElementById('minus-1');
let col1 = document.getElementById('col1');
let btnPlus1 = document.getElementById('plus-1');
let number1 = 0;
let summ = 0;
let price1 = 500;

btn1.onclick = function(){
    summ = summ + price1;
    btn1.style.display = "none";
    ab1.style.display = "block";
    number1++;
    col1.textContent = number1;
    tg.MainButton.setText(summ);
}

btnPlus1.onclick = function(){
    number1++;
    col1.textContent = number1;
    summ = summ + price1;
    tg.MainButton.setText(summ);
}

btnMinus1.onclick = function(){
    if(number1 > 0) {
        number1--;
        col1.textContent = number1;
        summ = summ - price1;
        tg.MainButton.setText(summ);
    } if(number1 == 0) {
        cls1();
    }
}

function cls1() {
    ab1.style.display = "none";
    btn1.style.display = "block";
}