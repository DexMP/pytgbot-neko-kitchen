Telegram.WebApp.ready();
    Telegram.WebApp.MainButton.setText('GO').show().onClick(function () {
        const data = JSON.stringify({test: "test1"});
        Telegram.WebApp.sendData(data);
        Telegram.WebApp.close();
    });