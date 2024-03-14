from telegram.ext import ContextTypes
from telegram import ReplyKeyboardMarkup, Update, WebAppInfo
from keyboards.main_keyboard import main_keyboard as m_kb

markup = ReplyKeyboardMarkup(m_kb, one_time_keyboard=True, resize_keyboard=True)

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text("Hi" , reply_markup=markup)