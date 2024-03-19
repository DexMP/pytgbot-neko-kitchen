Telegram.WebApp.ready();

var now = new Date().getDate();
let tg = Telegram.WebApp;
let username = document.getElementById('name');

// var(--tg-theme-button-color) button
// var(--tg-theme-bg-color); back

//days
let day1 = document.getElementById('day-1');
let day2 = document.getElementById('day-2');
let day3 = document.getElementById('day-3');
let day4 = document.getElementById('day-4');
let day5 = document.getElementById('day-5');
let day6 = document.getElementById('day-6');
let day7 = document.getElementById('day-7');


//times
let time1 = document.getElementById('time-1');
let time2 = document.getElementById('time-2');
let time3 = document.getElementById('time-3');
let time4 = document.getElementById('time-4');
let time5 = document.getElementById('time-5');
let time6 = document.getElementById('time-6');
let time7 = document.getElementById('time-7');
let time8 = document.getElementById('time-8');


let date = 0;
let time = 0;

day1.onclick = function() {
    clearStyleDays();
    clearStyleTimes();
    day1.style.background = 'var(--tg-theme-button-color)';
    date = stabler(day1.textContent);
    tg.MainButton.setText('Забронировать на ' + date);
    weekend(false);
}

day2.onclick = function() {
    clearStyleDays();
    clearStyleTimes();
    day2.style.background = 'var(--tg-theme-button-color)';
    date = stabler(day2.textContent);
    tg.MainButton.setText('Забронировать на ' + date);
    weekend(false);
}

day3.onclick = function() {
    clearStyleDays();
    clearStyleTimes();
    day3.style.background = 'var(--tg-theme-button-color)';
    date = stabler(day3.textContent);
    tg.MainButton.setText('Забронировать на ' + date);
    weekend(false);
}

day4.onclick = function() {
    clearStyleDays();
    clearStyleTimes();
    day4.style.background = 'var(--tg-theme-button-color)';
    date = stabler(day4.textContent);
    tg.MainButton.setText('Забронировать на ' + date);
    weekend(false);
    
}

day5.onclick = function() {
    clearStyleDays();
    clearStyleTimes();
    day5.style.background = 'var(--tg-theme-button-color)';
    date = stabler(day5.textContent);
    tg.MainButton.setText('Забронировать на ' + date);
    weekend(false);
}

day6.onclick = function() {
    clearStyleDays();
    clearStyleTimes();
    day6.style.background = 'var(--tg-theme-button-color)';
    date = stabler(day6.textContent);
    tg.MainButton.setText('Забронировать на ' + date);
    weekend(true);
}

day7.onclick = function() {
    clearStyleDays();
    clearStyleTimes();
    day7.style.background = 'var(--tg-theme-button-color)';
    date = stabler(day7.textContent);
    tg.MainButton.setText('Забронировать на ' + date);
    weekend(true);
}

function weekend(yes) {
    if(yes) {
        time7.style.display = "none";
        time8.style.display = "none";
    } else {
        time7.style.display = "block";
        time8.style.display = "block";
    }
}

function stabler(weekday) {
    if(weekday == "Среда") {
        let correct = "среду";
        return correct;
    } if (weekday == "Пятница") {
        let correct = "пятницу";
        return correct;
    } if (weekday == "Суббота") {
        let correct = "субботу";
        return correct;
    } else {
        let correct = (weekday + " ").toLowerCase();
        return correct;
    }
}

function clearStyleDays() {
    day1.style.background = 'var(--tg-theme-bg-color)';
    day2.style.background = 'var(--tg-theme-bg-color)';
    day3.style.background = 'var(--tg-theme-bg-color)';
    day4.style.background = 'var(--tg-theme-bg-color)';
    day5.style.background = 'var(--tg-theme-bg-color)';
    day6.style.background = 'var(--tg-theme-bg-color)';
    day7.style.background = 'var(--tg-theme-bg-color)';
}

time1.onclick = function() {
    clearStyleTimes();
    time1.style.background = 'var(--tg-theme-button-color)';
    time = "10:00";
}

time2.onclick = function() {
    clearStyleTimes();
    time2.style.background = 'var(--tg-theme-button-color)';
    time = "12:00";
}

time3.onclick = function() {
    clearStyleTimes();
    time3.style.background = 'var(--tg-theme-button-color)';
    time = "14:00";
}

time4.onclick = function() {
    clearStyleTimes();
    time4.style.background = 'var(--tg-theme-button-color)';
    time = "16:00";
}

time5.onclick = function() {
    clearStyleTimes();
    time5.style.background = 'var(--tg-theme-button-color)';
    time = "18:00";
}

time6.onclick = function() {
    clearStyleTimes();
    time6.style.background = 'var(--tg-theme-button-color)';
    time = "20:00";
}

time7.onclick = function() {
    clearStyleTimes();
    time7.style.background = 'var(--tg-theme-button-color)';
    time = "22:00";
}

time8.onclick = function() {
    clearStyleTimes();
    time8.style.background = 'var(--tg-theme-button-color)';
    time = "00:00";
}

function clearStyleTimes() {
    time1.style.background = 'var(--tg-theme-bg-color)';
    time2.style.background = 'var(--tg-theme-bg-color)';
    time3.style.background = 'var(--tg-theme-bg-color)';
    time4.style.background = 'var(--tg-theme-bg-color)';
    time5.style.background = 'var(--tg-theme-bg-color)';
    time6.style.background = 'var(--tg-theme-bg-color)';
    time7.style.background = 'var(--tg-theme-bg-color)';
    time8.style.background = 'var(--tg-theme-bg-color)';
}


// tg button
tg.MainButton.setText('Забронировать').show().onClick(function () {
    const data = JSON.stringify({brodate: date, brotime: time});
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});