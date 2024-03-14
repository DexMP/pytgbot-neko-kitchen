import json
from telegram import Update
from telegram.ext import ContextTypes

async def web_app_data(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    data = json.loads(update.effective_message.web_app_data.data)
    user = update.message.from_user
    await update.message.reply_html(
        text=(
            f"{user.first_name}, вы создали заказ:\n\n"
            f"Сумма заказа: {data['test']}₽"
        )
    )