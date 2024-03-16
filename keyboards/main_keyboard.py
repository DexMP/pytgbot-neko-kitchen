from telegram import (KeyboardButton,
                      WebAppInfo)

main_keyboard = [
    [
        KeyboardButton(text= "🍜  Меню", web_app=WebAppInfo(url="https://neko-kitchen.ru/"))
    ],
    [
        KeyboardButton(text= "🍽 Бронирование стола", web_app=WebAppInfo(url="https://neko-kitchen.ru/tables.html"))
    ],
    [
        KeyboardButton(text= "😊 Профиль", web_app=WebAppInfo(url="https://neko-kitchen.ru/"))
    ],
    [
        KeyboardButton(text= "🥇 Отзывы", web_app=WebAppInfo(url="https://yandex.ru/profile/1343125130"))
    ],
    [
        KeyboardButton(text= "📍 Наши контакты", web_app=WebAppInfo(url="https://neko-kitchen.ru/"))
    ],
    [
        KeyboardButton(text= "🥺 Рефералка", web_app=WebAppInfo(url="https://neko-kitchen.ru/"))
    ],
]