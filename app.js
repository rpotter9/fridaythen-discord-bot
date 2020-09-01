require('dotenv').config();
const Discord = require("discord.js");

const token = process.env.BOT_TOKEN
const prefix = "!"

const client = new Discord.Client()



client.on("message", function(message) {

  if (message.author.bot) return
  if (!message.content.startsWith(prefix)) return

  const commandBody = message.content.slice(prefix.length)
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "friday") {
    message.reply(`It's Friday theeeeeeeeeeen, then saturday sunday what! https://www.youtube.com/watch?v=1AnG04qnLqI`)
  }

});

client.login(token);