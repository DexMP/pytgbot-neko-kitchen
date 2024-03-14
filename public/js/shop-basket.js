Telegram.WebApp.ready();

let tg = Telegram.WebApp;

// tg button
tg.MainButton.setText('Корзина').show().onClick(function () {
    if(summ == 0) {
        open("https://neko-kitchen.ru/shop-basket.html")
    } else {
        const data = JSON.stringify({test: summ});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    }
});