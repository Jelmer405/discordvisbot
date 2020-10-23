const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '$vis') {

       message.reply('Vis Wax combinatie: https://secure.runescape.com/m=forum/sl=0/forums?75,76,331,66006366');

       }
 else if (message.content.startsWith('$gainz')) {
        let args = message.content.split(' ')
        if (!args[1]) return message.reply('Geef wel even een gebruikersnaam op, domlul. Op deze manier: `$gainz gebruiker` Let op: spaties als volgt: +')
        message.reply(`https://www.runeclan.com/user/${args[1]}`);
  
         }
 else if (message.content.startsWith('$alog')) {
        let args = message.content.split(' ')
        if (!args[1]) return message.reply('Geef wel even een gebruikersnaam op, domlul. Op deze manier: `$alog gebruiker` Let op: spaties als volgt: %20')
        message.reply(`https://apps.runescape.com/runemetrics/app/overview/player/${args[1]}`);


 } 
 
 else if (message.content === '$merchant') { 
  message.reply('De merchant heeft vandaag: https://runescape.wiki/w/Travelling_Merchant%27s_Shop'); 
 } 
 else if (message.content === '$help') { 
  message.reply('Je kunt de volgende commands gebruiken: `$vis` `$merchant` `$gainz gebruiker` `$alog gebruiker`. Let op dat je bij !gainz het volgende plaatst in plaats van een spatie in de gebruikersnaam: `+` en bij !alog in plaats van een spatie: `%20`'); 
 } 
  else if (message.content === 'Wie is een droplul?') { 
  message.reply('Iedereen natuurlijk :SquidDab:'); 
 } 
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
