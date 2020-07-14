const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzMyNDU2NjE0NDAxMTQ2OTYy.Xw03cw.E92Kq4ZACkOkJgqrfPNg2SzLF-Y';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);