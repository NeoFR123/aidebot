const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = "/"

module.exports.help = {
  name: "clear"
}

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
	if (message.member.hasPermission("MANAGE_MESSAGES"))
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "aide") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("List des commandes:")
		.addField("/OpTium", "Tu veux des réseaux sociaux ?")
		.addField("/classement", "Tu veux le classement ?")
		message.channel.send({embed})
	}

});

Client.login(process.env.TOKEN);

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@Responsable Formulaire")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('Invalid permissions.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('Proper usage: a.poll <question>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll Created By ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};
