Telegram.WebApp.ready();

let tg = Telegram.WebApp;

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
    tg.MainButton.setText(summ + "₽");
}

btnPlus1.onclick = function(){
    number1++;
    col1.textContent = number1;
    summ = summ + price1;
    tg.MainButton.setText(summ + "₽");
}

btnMinus1.onclick = function(){
    if(number1 > 0) {
        number1--;
        col1.textContent = number1;
        summ = summ - price1;
        if(summ == 0){
            tg.MainButton.setText("Корзина");
        } else {
            tg.MainButton.setText(summ + "₽");
        }
    } if(number1 == 0) {
        cls1();
    }
}

function cls1() {
    ab1.style.display = "none";
    btn1.style.display = "block";
}

// grid 2

let btn2 = document.getElementById('btn2');
let ab2 = document.getElementById('ab2');
let btnMinus2 = document.getElementById('minus-2');
let col2 = document.getElementById('col2');
let btnPlus2 = document.getElementById('plus-2');
let number2 = 0;
let price2 = 450;

btn2.onclick = function(){
    summ = summ + price2;
    btn2.style.display = "none";
    ab2.style.display = "block";
    number2++;
    col2.textContent = number2;
    tg.MainButton.setText(summ + "₽");
}

btnPlus2.onclick = function(){
    number2++;
    col2.textContent = number2;
    summ = summ + price2;
    tg.MainButton.setText(summ + "₽");
}

btnMinus2.onclick = function(){
    if(number2 > 0) {
        number2--;
        col2.textContent = number2;
        summ = summ - price2;
        if(summ == 0){
            tg.MainButton.setText("Корзина");
        } else {
            tg.MainButton.setText(summ + "₽");
        }
    } if(number2 == 0) {
        cls2();
    }
}

function cls2() {
    ab2.style.display = "none";
    btn2.style.display = "block";
}

// grid 3
let btn3 = document.getElementById('btn3');
let ab3 = document.getElementById('ab3');
let btnMinus3 = document.getElementById('minus-3');
let col3 = document.getElementById('col3');
let btnPlus3 = document.getElementById('plus-3');
let number3 = 0;
let price3 = 300;

btn3.onclick = function(){
    summ = summ + price3;
    btn3.style.display = "none";
    ab3.style.display = "block";
    number3++;
    col3.textContent = number3;
    tg.MainButton.setText(summ + "₽");
}

btnPlus3.onclick = function(){
    number3++;
    col3.textContent = number3;
    summ = summ + price3;
    tg.MainButton.setText(summ + "₽");
}

btnMinus3.onclick = function(){
    if(number3 > 0) {
        number3--;
        col3.textContent = number3;
        summ = summ - price3;
        if(summ == 0){
            tg.MainButton.setText("Корзина");
        } else {
            tg.MainButton.setText(summ + "₽");
        }
    } if(number3 == 0) {
        cls3();
    }
}

function cls3() {
    ab3.style.display = "none";
    btn3.style.display = "block";
}


// grid 4
let btn4 = document.getElementById('btn4');
let ab4 = document.getElementById('ab4');
let btnMinus4 = document.getElementById('minus-4');
let col4 = document.getElementById('col4');
let btnPlus4 = document.getElementById('plus-4');
let number4 = 0;
let price4 = 420;

btn4.onclick = function(){
    summ = summ + price4;
    btn4.style.display = "none";
    ab4.style.display = "block";
    number4++;
    col4.textContent = number4;
    tg.MainButton.setText(summ + "₽");
}

btnPlus4.onclick = function(){
    number4++;
    col4.textContent = number4;
    summ = summ + price4;
    tg.MainButton.setText(summ + "₽");
}

btnMinus4.onclick = function(){
    if(number4 > 0) {
        number4--;
        col4.textContent = number4;
        summ = summ - price4;
        if(summ == 0){
            tg.MainButton.setText("Корзина");
        } else {
            tg.MainButton.setText(summ + "₽");
        }
    } if(number4 == 0) {
        cls4();
    }
}

function cls4() {
    ab4.style.display = "none";
    btn4.style.display = "block";
}

// grid 5
let btn5 = document.getElementById('btn5');
let ab5 = document.getElementById('ab5');
let btnMinus5 = document.getElementById('minus-5');
let col5 = document.getElementById('col5');
let btnPlus5 = document.getElementById('plus-5');
let number5 = 0;
let price5 = 500;

btn5.onclick = function(){
    summ = summ + price5;
    btn5.style.display = "none";
    ab5.style.display = "block";
    number5++;
    col5.textContent = number5;
    tg.MainButton.setText(summ + "₽");
}

btnPlus5.onclick = function(){
    number5++;
    col5.textContent = number5;
    summ = summ + price5;
    tg.MainButton.setText(summ + "₽");
}

btnMinus5.onclick = function(){
    if(number5 > 0) {
        number5--;
        col5.textContent = number5;
        summ = summ - price5;
        if(summ == 0){
            tg.MainButton.setText("Корзина");
        } else {
            tg.MainButton.setText(summ + "₽");
        }
    } if(number5 == 0) {
        cls5();
    }
}

function cls5() {
    ab5.style.display = "none";
    btn5.style.display = "block";
}


// grid 6
let btn6 = document.getElementById('btn6');
let ab6 = document.getElementById('ab6');
let btnMinus6 = document.getElementById('minus-6');
let col6 = document.getElementById('col6');
let btnPlus6 = document.getElementById('plus-6');
let number6 = 0;
let price6 = 450;

btn6.onclick = function(){
    summ = summ + price6;
    btn6.style.display = "none";
    ab6.style.display = "block";
    number6++;
    col6.textContent = number6;
    tg.MainButton.setText(summ + "₽");
}

btnPlus6.onclick = function(){
    number6++;
    col6.textContent = number6;
    summ = summ + price6;
    tg.MainButton.setText(summ + "₽");
}

btnMinus6.onclick = function(){
    if(number6 > 0) {
        number6--;
        col6.textContent = number6;
        summ = summ - price6;
        if(summ == 0){
            tg.MainButton.setText("Корзина");
        } else {
            tg.MainButton.setText(summ + "₽");
        }
    } if(number6 == 0) {
        cls6();
    }
}

function cls6() {
    ab6.style.display = "none";
    btn6.style.display = "block";
}


// grid 7
let btn7 = document.getElementById('btn7');
let ab7 = document.getElementById('ab7');
let btnMinus7 = document.getElementById('minus-7');
let col7 = document.getElementById('col7');
let btnPlus7 = document.getElementById('plus-7');
let number7 = 0;
let price7 = 220;

btn7.onclick = function(){
    summ = summ + price7;
    btn7.style.display = "none";
    ab7.style.display = "block";
    number7++;
    col7.textContent = number7;
    tg.MainButton.setText(summ + "₽");
}

btnPlus7.onclick = function(){
    number7++;
    col7.textContent = number7;
    summ = summ + price7;
    tg.MainButton.setText(summ + "₽");
}

btnMinus7.onclick = function(){
    if(number7 > 0) {
        number7--;
        col7.textContent = number7;
        summ = summ - price7;
        if(summ == 0){
            tg.MainButton.setText("Корзина");
        } else {
            tg.MainButton.setText(summ + "₽");
        }
    } if(number7 == 0) {
        cls7();
    }
}

function cls7() {
    ab7.style.display = "none";
    btn7.style.display = "block";
}

// grid 8
let btn8 = document.getElementById('btn8');
let ab8 = document.getElementById('ab8');
let btnMinus8 = document.getElementById('minus-8');
let col8 = document.getElementById('col8');
let btnPlus8 = document.getElementById('plus-8');
let number8 = 0;
let price8 = 500;

btn8.onclick = function(){
    summ = summ + price8;
    btn8.style.display = "none";
    ab8.style.display = "block";
    number8++;
    col8.textContent = number8;
    tg.MainButton.setText(summ + "₽");
}

btnPlus8.onclick = function(){
    number8++;
    col8.textContent = number8;
    summ = summ + price8;
    tg.MainButton.setText(summ + "₽");
}

btnMinus8.onclick = function(){
    if(number8 > 0) {
        number8--;
        col8.textContent = number8;
        summ = summ - price8;
        if(summ == 0){
            tg.MainButton.setText("Корзина");
        } else {
            tg.MainButton.setText(summ + "₽");
        }
    } if(number8 == 0) {
        cls8();
    }
}

function cls8() {
    ab8.style.display = "none";
    btn8.style.display = "block";
}

// tg button
tg.MainButton.setText('Корзина').show().onClick(function () {
    if(summ == 0) {
        const data = JSON.stringify({test: "Может позже"});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    } else {
        const data = JSON.stringify({test: summ});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    }
});