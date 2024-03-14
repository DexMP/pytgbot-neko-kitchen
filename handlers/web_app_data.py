import json
from telegram import Update
from telegram.ext import ContextTypes

async def web_app_data(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    data = json.loads(update.effective_message.web_app_data.data)
    await update.message.reply_html(
        text=(
            f"{data['test']}"
        )
    )