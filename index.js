const Discord = require("discord.js");
const bot = new Discord.Client();
var token = process.env.TOKEN;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

async function setGame() {
	bot.user.setGame("k>ajuda", "https://www.twitch.tv/deivizin_");
	await sleep(10000);
	console.log("Trocado com sucesso")
	bot.user.setGame("Quer meu link de convite? digite k>invite", "https://www.twitch.tv/deivizin_");
	await setTimeout(setGame, 7000)
}
	
bot.on('ready', () => {
	await setGame()
	console.log("Javascript Injetado!")
})

bot.on('message', message => {
	if (message.content.startsWith("&javascript")){
		await message.channel.send("<@"+message.author.id+"> -- Quero ter minha parte javascript :angry:");
	}
})

bot.login(token);
