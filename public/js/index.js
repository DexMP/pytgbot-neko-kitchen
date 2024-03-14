Telegram.WebApp.ready();
    Telegram.WebApp.MainButton.setText('Выход').show().onClick(function () {
        const data = JSON.stringify({test: "Может позже"});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    });