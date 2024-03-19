Telegram.WebApp.ready();

let tg = Telegram.WebApp;

// tg button
tg.MainButton.setText('Закрыть').show().onClick(function () {
    Telegram.WebApp.close();
});