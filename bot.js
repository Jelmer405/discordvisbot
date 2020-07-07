const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!vis') {

       message.reply('Vis Wax combinatie: https://secure.runescape.com/m=forum/sl=0/forums?75,76,331,66006366');

       }
    else if (message.content === '!gainz') {

       message.reply('Dit vind ik te moeilijk, maar je kunt het hier opzoeken: https://www.runeclan.com/');
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
