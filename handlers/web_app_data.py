import json
from telegram import Update
from telegram.ext import ContextTypes

async def web_app_data(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    data = json.loads(update.effective_message.web_app_data.data)
    user = update.message.from_user
    button = update.effective_message.web_app_data.button_text
    if (button == "🍽 Бронирование стола"):
        try:
            await update.message.reply_html(
                text=(
                    f"Бронь успешно создана на имя: {user.first_name}\n\n"
                    f"Ждём Вас в {data['brodate']} к {data['brotime']}"))
        except RuntimeWarning as e:
            print(e)
    elif (button == "🍜  Меню"):
        try:
            if (data['summ']):
                await update.message.reply_html(
                    text=(
                        f"{user.first_name}, вы создали заказ:\n\n"
                        f"Сумма заказа: {data['summ']}₽"))
            else:
                await update.message.reply_html(text="Заказ не был добавлен!")
        except:
            print('have problem in give summ')
    
    