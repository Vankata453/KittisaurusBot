//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tt')
		.setDescription('Check out what TT\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 11)) {
			case 1:
			  await interaction.reply('https://i.pinimg.com/originals/b3/c2/fe/b3c2fee19c02164404d7d19d02b5bd4f.jpg');
			  channel.send('Pray to my magesty! :crown: :pray:');
			  break;
			case 2:
			  await interaction.reply('https://64.media.tumblr.com/2ecf6bc7e87df8035867e68a279f6ef2/7b475bf1e8afe9f2-57/s400x600/f06d502c1bb6e5ea28e965d70046c16c0bf830ca.gif');
			  channel.send('Cleaning myself to be pretty! :crown:');
			  break;
			case 3:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/c/c9/ANGERY_TT.jpg/revision/latest/scale-to-width-down/250?cb=20210512230151');
			  channel.send('Look at my eyes and rethink your actions!');
			  break;
			case 4:
			  await interaction.reply('https://i.pinimg.com/originals/69/c2/e3/69c2e3fbeac4451748d9ca723656f281.jpg');
			  channel.send('Pretty queen since a baby!');
			  break;
			case 5:
			  await interaction.reply('https://i.redd.it/ew1nivye5nz41.jpg');
			  channel.send('My witch-self!');
			  break;
			case 6:
			  await interaction.reply('https://64.media.tumblr.com/d30dddc60443392b7b1bdb4f08169d34/70a8e5c78a490ba1-74/s400x600/dbae54d0ea0c6252db77f9b9fc38eb6d33c528b7.gif');
			  channel.send('Rolling on the floor!');
			  break;
			case 7:
			  await interaction.reply('https://i.pinimg.com/originals/5f/94/f5/5f94f54ac30be56dc9f8311f10c1195d.jpg');
			  channel.send('Ooh! What is that?!');
			  break;
			case 8:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/e/ed/Screenshot_20210604-114708_Chrome.jpg/revision/latest/scale-to-width-down/250?cb=20210604094911');
			  channel.send('My face is looking fluffier with this scarf! Do you like it?');
			  break;
			case 9:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/1/15/991f0ead6ce310c84667d220ee62233d.jpg/revision/latest/scale-to-width-down/250?cb=20210426181353');
			  channel.send('AAAAAAAAAAAAAAAA!!! :angry:');
			  break;
			case 10:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/3/3d/Nana_and_TT%2C_sleeping_together.jpg/revision/latest/scale-to-width-down/250?cb=20210506065433');
			  channel.send('NaNa makes really good company!');
			  break;
			case 11:
			  await interaction.reply('https://preview.redd.it/mwu88eqe3pu51.jpg?width=1080&format=pjpg&auto=webp&s=05e0cd7d0b6a730d4fdef7f2274e280c1455c960');
			  channel.send('My eyes are the key to the success of my master plan! :smirk_cat:');
			  break;
		}
	},
};