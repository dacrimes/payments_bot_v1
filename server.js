const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


// Matches "/echo [whatever]"
bot.onText(/\/list/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  //const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendInvoice(chatId,"Товар 1", "Ненужная вещь", 'true',
                  "410694247:TEST:5ae2130f-cd4e-4a5b-b2d3-9b8926b07eef", "false", "RUB", [{'label':'Оплата', 'amount':150 * 100}], 
                  {photo_url: 'https://cdn.glitch.com/54e12f03-7de5-4433-8a15-ee782db99a9a%2F36680544-edcb-4725-9a24-3f81146d0173.image.png?v=1620240857560'}
                  
                 );
});

// Listen for any kind of message. There are different kinds of
// messages.
//bot.on('message', (msg) => {
//  const chatId = msg.chat.id;
//
  // send a message to the chat acknowledging receipt of their message
//  bot.sendMessage(chatId, 'Received your message');
//});

console.log ("StAAAAAAAAAAAAART")