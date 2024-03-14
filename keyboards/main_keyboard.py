from telegram import KeyboardButton, ReplyKeyboardMarkup, WebAppInfo

main_kb = ReplyKeyboardMarkup(
    KeyboardButton(text = "🍜  Меню", web_app=WebAppInfo(url="https://neko-kitchen.ru/")),
    KeyboardButton(text = "🍽 Бронирование стола", web_app=WebAppInfo(url="https://neko-kitchen.ru/")),
    KeyboardButton(text = "😊 Профиль", web_app=WebAppInfo(url="https://neko-kitchen.ru/")),
    KeyboardButton(text = "📋 Мои заказы", web_app=WebAppInfo(url="https://neko-kitchen.ru/")),
    KeyboardButton(text = "🎖 Отзывы", web_app=WebAppInfo(url="https://neko-kitchen.ru/")),
    KeyboardButton(text = "📍 Наши контакты", web_app=WebAppInfo(url="https://neko-kitchen.ru/")),
    KeyboardButton(text = "🥺 Рефералка", web_app=WebAppInfo(url="https://neko-kitchen.ru/")),
)

main_keyboard = [
    ["🍜  Меню"],
    ["🍽 Бронирование стола"],
    ["😊 Профиль"],
    ["📋 Мои заказы"],
    ["🎖 Отзывы"],
    ["📍 Наши контакты"],
    ["🥺 Рефералка"],
]