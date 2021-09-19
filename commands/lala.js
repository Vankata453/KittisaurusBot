//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lala')
		.setDescription('Check out what LaLa\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 6)) {
			case 1:
			  await interaction.reply('https://i.redd.it/34njnf8udxb31.jpg');
			  channel.send('Mya Mya?! (Nyam Nyam?!)');
			  break;
			case 2:
			  await interaction.reply('https://64.media.tumblr.com/04f0592d95f4348c5e4557927285b1b8/tumblr_pspevbtSsm1tawgedo3_r1_540.gif');
			  channel.send('Mya! :smiling_face_with_3_hearts:');
			  break;
			case 3:
			  await interaction.reply('https://media1.tenor.com/images/7c7ca797f7f0af3951b6d844a71a8aee/tenor.gif?itemid=19584463');
			  channel.send('Mya Myah! (Treats!)');
			  break;
			case 4:
			  await interaction.reply('https://64.media.tumblr.com/5b61dc564a830b3d2d5510b99402fa38/e36f6210ac6b9924-b0/s540x810/2260d767ec3bd925544b485e812021d1d092303f.gif');
			  channel.send('Mya Myah Myah, Mya! (You are also very fluffy, DD!)');
			  break;
			case 5:
			  await interaction.reply('https://i.pinimg.com/originals/54/d0/07/54d0075025c2848a0af25d08498a0516.jpg');
			  channel.send('Myah Myah Mya! :white_heart: (The two clouds in the house!)');
			  break;
			case 6:
			  await interaction.reply('https://64.media.tumblr.com/c90007d4ff46c7f0c8d0ea2a3a0add38/347f60d2b814d896-4d/s540x810/5005fae1cb6682b5995546a323572958105fea92.jpg');
			  channel.send('Myah Mya Mya! (Doing my exercise!)');
			  break;
		}
	},
};