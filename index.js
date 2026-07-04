const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("BOT_TOKEN not found!");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `سلام ${msg.from.first_name} 👋

به ربات Pocket Signal خوش آمدی.

دستورهای موجود:
/start
/signal`
  );
});

bot.onText(/\/signal/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `📊 سیگنال آزمایشی

🟢 CALL
💱 EUR/USD
⏱ مدت: 1 دقیقه

⚠️ این فقط یک پیام آزمایشی است و سیگنال واقعی یا تضمینی نیست.`
  );
});

console.log("Pocket Signal Bot Started...");
