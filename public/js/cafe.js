let tg = window.Telegram.WebApp;

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("#1")
        item = "1";
        tg.MainButton.show();
    }
})

tg.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
})

const colorPicker = new iro.ColorPicker('#picker', {
    borderColor: "#ffffff",
    borderWidth: 1,
    width: Math.round(document.documentElement.clientWidth / 2),
});
colorPicker.on('color:change', function (color) {
    document.body.style.background = color.hexString;
});

Telegram.WebApp.ready();
Telegram.WebApp.MainButton.setText('Test').show().onClick(function () {
    const data = JSON.stringify({hex: colorPicker.color.hexString, rgb: colorPicker.color.rgb});
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});