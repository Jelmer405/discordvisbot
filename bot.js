const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 // client.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
// the rest of your code
// using the new `command` variable, this makes it easier to manage!
// you can switch your other commands to this format as well
else if (command === 'stats') {
	if (!args.length) {
		return message.channel.send(`Je moet wel een naam invoeren, ${message.author}!`);
	}

	message.channel.send(`Command name: ${command}https://www.runeclan.com/user/${args}`);
}


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
});


// THIS  MUST  BE  THIS  WAY


client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
