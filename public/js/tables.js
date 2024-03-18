Telegram.WebApp.ready();

let tg = Telegram.WebApp;

var username = document.getElementById('name');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var dateinput = document.getElementById('dateinput');
var timeinput = document.getElementById('timeinput');


// tg button
tg.MainButton.setText('Забронировать').show().onClick(function () {
    if (username != ""){
        console.log(username);
        const data = JSON.stringify({username: username});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    } else {
        const data = JSON.stringify({username: "хз как типа зовут"});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    }
});