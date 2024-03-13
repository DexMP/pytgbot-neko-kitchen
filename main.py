import json
import logging

from telegram import KeyboardButton, ReplyKeyboardMarkup, ReplyKeyboardRemove, Update, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes, MessageHandler, filters

from config_reader import config

# Enable logging
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
# set higher logging level for httpx to avoid all GET and POST requests being logged
logging.getLogger("httpx").setLevel(logging.WARNING)

logger = logging.getLogger(__name__)


# Define a `/start` command handler.
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    keyboard = ReplyKeyboardMarkup.from_button(
            KeyboardButton(
                text="🍜  Меню",
                web_app=WebAppInfo(url="https://neko-kitchen.ru/"),
            ),
            KeyboardButton(
                text="🍽 Бронирование стола",
                web_app=WebAppInfo(url="https://neko-kitchen.ru/"),
            ),
            KeyboardButton(
                text="😊 Профиль",
                web_app=WebAppInfo(url="https://neko-kitchen.ru/"),
            ),
            KeyboardButton(
                text="📋 Мои заказы",
                web_app=WebAppInfo(url="https://neko-kitchen.ru/"),
            ),
            KeyboardButton(
                text="🎖 Отзывы",
                web_app=WebAppInfo(url="https://neko-kitchen.ru/"),
            ),
            KeyboardButton(
                text="📍 Наши контакты",
                web_app=WebAppInfo(url="https://neko-kitchen.ru/"),
            ),
            KeyboardButton(
                text="🥺 Рефералка",
                web_app=WebAppInfo(url="https://neko-kitchen.ru/"),
            ),
            resize_keyboard=True
        )
    await update.message.reply_text(reply_markup=keyboard)


# Handle incoming WebAppData
async def web_app_data(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Print the received data and remove the button."""
    # Here we use `json.loads`, since the WebApp sends the data JSON serialized string
    # (see webappbot.html)
    data = json.loads(update.effective_message.web_app_data.data)
    await update.message.reply_html(
        text=(
            f"You selected the color with the HEX value <code>{data['hex']}</code>. The "
            f"corresponding RGB value is <code>{tuple(data['rgb'].values())}</code>."
        ),
        reply_markup=ReplyKeyboardRemove(),
    )


def main() -> None:
    application = Application.builder().token(token=config.bot_token.get_secret_value()).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, web_app_data))

    application.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()