const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = "!"



Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `faire /aide`, type: 0} });
});


Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);

	if (command === "say") {
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "efefefefef") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("!help", "Will give the current command list")
		.addField("!ping", "WIll show the ping time for the bot")
		.addField("!say [text]", "Will make the bot say something")
		.addField("!announcement [text]", "Will make the bot say an announcement and tag everyone")
		.addField("!cat", "Will send a random cat image");
		message.channel.send({embed})
	}

});

Client.login(process.env.TOKEN);
