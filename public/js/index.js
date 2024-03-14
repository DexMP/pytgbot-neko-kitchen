const colorPicker = new iro.ColorPicker('#picker', {
    borderColor: "#ffffff",
    borderWidth: 1,
    width: Math.round(document.documentElement.clientWidth / 2),
});
colorPicker.on('color:change', function (color) {
    document.body.style.background = color.hexString;
});

Telegram.WebApp.ready();
Telegram.WebApp.MainButton.setText('Choose Color').show().onClick(function () {
    const data = JSON.stringify({hex: colorPicker.color.hexString, rgb: colorPicker.color.rgb});
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});