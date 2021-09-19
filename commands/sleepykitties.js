//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sleepykitties')
		.setDescription('Watch some cute sleepy kitties!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 6)) {
			case 1:
			  await interaction.reply('https://i.redd.it/ijqil3v4jun51.jpg');
			  channel.send('Sleeping and waiting for snacks...');
			  break;
			case 2:
			  await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGt744lah-CQLzRP2Hpx_g23zL0B4LCtynXQ&usqp=CAU');
			  channel.send('It\'s sooo comfy here! :sleeping:');
			  break;
			case 3:
			  await interaction.reply('https://i.ytimg.com/vi/OjrMGBaux80/maxresdefault.jpg');
			  channel.send('Stop this, ToTo!');
			  break;
			case 4:
			  await interaction.reply('https://tenor.com/view/kittisaurus-creamheroes-cat-gif-18622786');
			  channel.send('A real queen needs her long daily sleeping session!');
			  break;
			case 5:
			  await interaction.reply('https://tenor.com/view/kittisaurus-creamheroes-cat-gif-18622794');
			  channel.send('Shaking won\'t do anything. I\'ll still continue my beauty sleep!');
			  break;
			case 6:
			  await interaction.reply('https://tenor.com/view/lulu-cabinet-creamheroes-kittisaurus-feline-gif-17850226');
			  channel.send('Leave me alone, it\'s really chill here!');
			  break;
		}
	},
};