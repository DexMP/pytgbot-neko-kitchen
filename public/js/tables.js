Telegram.WebApp.ready();

let tg = Telegram.WebApp;

let username = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let date = document.getElementById('date');

function notnone(username, phone, email, date) {
    if ((username == null || username == ""), (phone == null || phone == ""), (email == null || email == "")){
        return false;
    } else {
        return true;
    }
}


// tg button
tg.MainButton.setText('Забронировать').show().onClick(function () {
    if (notnone) {;
        const data = JSON.stringify({username: username}, {phone: phone}, {email: email}, {date: (datetime + " ")});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    } else {
        alert("Все поля должны быть заполнены!")
    }
});