//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dodo')
		.setDescription('Check out what DoDo\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 6)) {
			case 1:
			  await interaction.reply('https://64.media.tumblr.com/cc8fbe1cc7a6f4aa7535b4cb24b362c6/b9090ccbe643b650-42/s250x400/bc14a4c6abd4a5a490bf4183a900e68eb1b49066.png');
			  channel.send('Snacks?!');
			  break;
			case 2:
			  await interaction.reply('https://imgur.com/CR8BEPB');
			  channel.send('I\'m brave when it comes to any food leftovers!');
			  break;
			case 3:
			  await interaction.reply('https://64.media.tumblr.com/dd7fb6913e9b6d8b8021d04c349a6e79/8c8097fff3b1d891-fa/s400x600/c30f3a69609e313d471aefd0cc9b9df27ea0fd46.jpg');
			  channel.send('Baby me and LuLu! :heart:');
			  break;
			case 4:
			  await interaction.reply('https://64.media.tumblr.com/a60992575fe0a789901a9ded4536967f/9b5067ac2a8b60cd-85/s250x400/bf9f8b17eaeaccd449b3cea0e9772e71e61d9a99.png');
			  channel.send(':face_with_raised_eyebrow:');
			  break;
			case 5:
			  await interaction.reply('https://64.media.tumblr.com/a1da164eef6dc91dceb2bbcb659c7100/71700310daf547a8-90/s250x400/786bff686751247ae34f6aaf47cdb4f96870a946.gif');
			  channel.send('We both learned how to do this now!');
			  break;
			case 6:
			  await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXpzT2pjY2UDb0UC7uRA0tFcILCRlqhf4TBseUh_BF6l5DRyP8cedzEMDy067cXa2kvU&usqp=CAU');
			  channel.send('Am I looking good with this?');
			  break;
		}
	},
};