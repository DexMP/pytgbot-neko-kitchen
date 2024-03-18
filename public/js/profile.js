Telegram.WebApp.ready();

let tg = Telegram.WebApp;

tg

document["avatar"].src = "";


// tg button
tg.MainButton.setText('Корзина').show().onClick(function () {
    Telegram.WebApp.close();
});