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

client.on('message', message => {
	if (!message.content.startsWith(config.prefix)) return;

	const withoutPrefix = message.content.slice(config.prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
 
 if (command === 'stats') {
	const user = message.author;

	return message.channel.send(`https://www.runeclan.com/user/${user.username}`);
}
 function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('< ') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}
 if (command === 'stats') {
	if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('We kunnen hiervan helaas geen gainz vinden.');
		}

		return message.channel.send(`https://www.runeclan.com/user/${user.username}`);
	}

	return message.channel.send(`${message.author.username}, https://www.runeclan.com/user/${user.username}`);
}
});

// THIS  MUST  BE  THIS  WAY


client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
