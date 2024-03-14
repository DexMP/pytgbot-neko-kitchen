import logging
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters
from config_reader import config
from handlers.start import start
from handlers.web_app_data import web_app_data

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logging.getLogger("httpx").setLevel(logging.WARNING)
logger = logging.getLogger(__name__)

def main() -> None:
    application = Application.builder().token(token=config.bot_token.get_secret_value()).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, web_app_data))
    application.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()