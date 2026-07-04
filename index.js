const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {
  polling: true
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `سلام ${msg.from.first_name}! 👋

به ربات Pocket Signal  خوش آمدی بعدکردی.

این ربات در حال توسعه است و به‌زودی سیگنال‌های تحلیلی را نمایش خواهد داد.`
  );
});

bot.on('message', (msg) => {
  if (msg.text !== '/start') {
    bot.sendMessage(
      msg.chat.id,
      'پیام شما دریافت شد. به‌زودی قابلیت‌های بیشتری اضافه می‌شود.'
    );
  }
});

console.log("Pocket Signal Bot Started...");
