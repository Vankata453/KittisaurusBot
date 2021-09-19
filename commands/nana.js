//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nana')
		.setDescription('Check out what NaNa\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 7)) {
			case 1:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/a/a7/Screenshot_2021-04-12_6.58.44_PM.png/revision/latest/scale-to-width-down/250?cb=20210414015851');
			  channel.send('Me and TT! :heart:');
			  break;
			case 2:
			  await interaction.reply('https://static.tumbex.com/64.media.tumblr.com/tumblr_ql3vi4aWQj1yo2r19_smart1.jpg');
			  channel.send('Doing as you say, Mommy!');
			  break;
			case 3:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/6/61/Nana_with_Lala_in_a_bag.jpg/revision/latest/scale-to-width-down/250?cb=20210502055247');
			  channel.send('Bored with LaLa...');
			  break;
			case 4:
			  await interaction.reply('https://i.pinimg.com/236x/7b/04/de/7b04de0de0de3b0061537115d7c9ff02.jpg');
			  channel.send(':exploding_head:');
			  break;
			case 5:
			  await interaction.reply('https://i.pinimg.com/originals/b4/b4/e5/b4b4e55a9846580c6c172b67c3ac9e93.jpg');
			  channel.send('Now I know why MoMo enjoys this so much! It\'s comfy!');
			  break;
			case 6:
			  await interaction.reply('https://64.media.tumblr.com/adb083211ca2210fe7767f9145e4172a/c0d90a5735544f5b-0a/s540x810/69d50e0de76243aec735c00dbc1ff65f1ee85dea.gif');
			  channel.send('Eat, kids! Just like that!');
			  break;
			case 7:
			  await interaction.reply('https://i.redd.it/lpafagcggrf61.jpg');
			  channel.send('How well did I do, LuLu?');
			  break;
		}
	},
};