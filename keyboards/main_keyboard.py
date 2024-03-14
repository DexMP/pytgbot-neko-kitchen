from telegram import (KeyboardButton,
                      WebAppInfo)

main_keyboard = [
    [
        KeyboardButton(text= "🍜  Меню", web_app=WebAppInfo(url="https://neko-kitchen.ru/"))
    ],
    [
        KeyboardButton(text= "🍽 Бронирование стола", web_app=WebAppInfo(url="https://neko-kitchen.ru/"))
    ],
    [
        KeyboardButton(text= "😊 Профиль", web_app=WebAppInfo(url="https://neko-kitchen.ru/"))
    ],
    [
        KeyboardButton(text= "📍 Наши контакты", web_app=WebAppInfo(url="https://neko-kitchen.ru/"))
    ],
    [
        KeyboardButton(text= "🥺 Рефералка", web_app=WebAppInfo(url="https://neko-kitchen.ru/"))
    ],
]