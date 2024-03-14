from telegram.ext import ContextTypes
from telegram import ReplyKeyboardMarkup, Update
from keyboards.main_keyboard import main_keyboard as m_kb

markup = ReplyKeyboardMarkup(m_kb)

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text("Выберите пункт из списка:" , reply_markup=markup)