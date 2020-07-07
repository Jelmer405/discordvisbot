const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!vis') {

       message.reply('Vis Wax combinatie: https://secure.runescape.com/m=forum/sl=0/forums?75,76,331,66006366');

       }
 else if (message.content.startsWith('!gainz')) {
        let args = message.content.split(' ')
        if (!args[1]) return message.reply('pls write a user! Like `!gainz user`')
        message.reply(`https://www.runeclan.com/${args[1]}/`);
  
 }
 
 else if (message.content === '!alog') {
     message.reply('Ook de alog mag je nog zelf opzoeken: https://apps.runescape.com/runemetrics/app/welcome');

 } 
 
 else if (message.content === '!merchant') { 
  message.reply('De merchant heeft vandaag: https://runescape.wiki/w/Travelling_Merchant%27s_Shop'); 
 }
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
