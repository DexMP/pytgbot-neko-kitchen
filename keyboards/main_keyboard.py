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
        KeyboardButton(text= "😊 Профиль", web_app=WebAppInfo(url="https://neko-kitchen.ru/profile.html"))
    ],
    [
        KeyboardButton(text= "🥇 Отзывы", web_app=WebAppInfo(url="https://neko-kitchen.ru/feedbacks.html"))
    ],
    [
        KeyboardButton(text= "📍 Наши контакты", web_app=WebAppInfo(url="https://neko-kitchen.ru/contacts.html"))
    ]
]