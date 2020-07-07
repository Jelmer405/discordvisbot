const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});


client.on('message', message => {

    if (message.content === '!vis') {

       message.reply('Vis Wax combinatie: https://secure.runescape.com/m=forum/sl=0/forums?75,76,331,66006366');

       }
});


client.on('message', message => {

    if (message.content === '!gainz') {

       message.reply('Zoek het lekker zelf op: https://www.runeclan.com');

       }
    else if (message.content === '!merchant') {
       message.reply('De merchant heeft vandaag: https://runescape.wiki/w/Travelling_Merchant%27s_Shop');
    }
   else if (message.content === '!alog') {
       message.reply('Ook de alog mag je nog zelf opzoeken: https://apps.runescape.com/runemetrics/app/welcome');
    }
    
});



// THIS  MUST  BE  THIS  WAY


client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
