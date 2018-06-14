const Discord = require("discord.js");
const bot = new Discord.Client();
var token = process.env.TOKEN;

bot.on("ready", () {
   
	bot.user.setActivity("Game"); 
       
})

bot.on('message', message => {
	if (message.content.startsWith("&javascript")){
		return message.channel.send("<@"+message.author.id+"> -- Quero ter minha parte javascript :angry:");
	}
})

bot.login(token);
