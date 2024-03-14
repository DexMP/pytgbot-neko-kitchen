import json
from telegram import ReplyKeyboardRemove, Update, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes, MessageHandler, filters

async def web_app_data(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    data = json.loads(update.effective_message.web_app_data.data)
    await update.message.reply_html(
        text=(
            f"Получили {data['hex']}"
            f"{tuple(data['rgb'].values())}"
        ),
        reply_markup=ReplyKeyboardRemove(),
    )