Telegram.WebApp.ready();

let tg = Telegram.WebApp;

let username = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let date_time = document.getElementById('date_time');
let btnok = document.getElementById('btnok');

function notnone(username, phone, email, date_time) {
    if ((username == null || username == ""), (phone == null || phone == ""), (email == null || email == ""), (date_time == null || date_time == "")){
        return false;
    } else {
        return true;
    }
}

btnok.onclick = function() {
    if (notnone) {
        const data = JSON.stringify({username: username}, {phone: phone}, {email: email}, {date_time: date_time});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    } else {
        alert("Все поля должны быть заполнены!")
    }
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