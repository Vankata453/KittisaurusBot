//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('toto')
		.setDescription('Check out what ToTo\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 6)) {
			case 1:
			  await interaction.reply('https://i.redd.it/5ac06tyrw2j51.jpg');
			  channel.send('Sleeping with DoDo! :sleeping:');
			  break;
			case 2:
			  await interaction.reply('https://pbs.twimg.com/media/EfsXRcSU0AEO0If.jpg');
			  channel.send('Me and DoDo as babies! :heart:');
			  break;
			case 3:
			  await interaction.reply('https://64.media.tumblr.com/b61977dea58d52827f493a404bd722ba/9d100b6579f9911a-34/s540x810/8eb14a97ebc931dbf417787bd64e7ddd161a81f4.gif');
			  channel.send('Wow! Interesting!');
			  break;
			case 4:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/c/c1/Brothersinarms.png');
			  channel.send('I know this trick, too!');
			  break;
			case 5:
			  await interaction.reply('https://i.redd.it/dn23vapx2tp61.jpg');
			  channel.send('Fighting with DoDo while LuLu\'s sleeping is fun!');
			  break;
			case 6:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/f/f8/162280208_284655846580386_7537551732297225164_n.jpg');
			  channel.send('I really like DoDo and LuLu\'s company!');
			  break;
		}
	},
};