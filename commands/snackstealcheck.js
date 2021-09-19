//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('snackstealcheck')
		.setDescription('Check if the Kitty Pirates are succeeding at stealing snacks!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 10)) {
			case 1:
			  await interaction.reply('https://i.ytimg.com/vi/dWAZTqRdEDA/maxresdefault.jpg');
			  channel.send('Coco: "They never learn..."');
			  break;
			case 2:
			  await interaction.reply('https://pbs.twimg.com/media/EePOXyrWsAATRtO.jpg');
			  channel.send('Food for me! :yum:');
			  break;
			case 3:
			  await interaction.reply('https://i.ytimg.com/vi/kdLGYHliJX8/mqdefault.jpg');
			  channel.send('My new strat: Begging! :pleading_face:');
			  break;
			case 4:
			  await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlU41v7Gw31-GlZivjReGZT67tknywFcdPpg&usqp=CAU');
			  channel.send('What a fail! :cry:');
			  break;
			case 5:
			  await interaction.reply('https://i.ytimg.com/vi/talVwlGDqM4/maxresdefault.jpg');
			  channel.send('Let me steal eggs at least, Claire!');
			  break;
			case 6:
			  await interaction.reply('https://i.ytimg.com/vi/kVGSre_8VHw/maxresdefault.jpg');
			  channel.send('DoDo! I found some snacks!');
			  await interaction.followUp('https://preview.redd.it/zreiebwfo6g51.jpg?width=2400&format=pjpg&auto=webp&s=9458b950f25b9a2eb2695ec8d2f042c6c0a302f2');
			  channel.send('I\'m coming, boss!');
			  break;
			case 7:
			  await interaction.reply('https://i.ytimg.com/vi/LW7FYN0NJOg/mqdefault.jpg');
			  channel.send('Another day, another trap! :frowning:');
			  break;
			case 8:
			  await interaction.reply('https://i.ytimg.com/vi/6QCwbfSC_9c/maxresdefault.jpg');
			  channel.send('The snacks are only mine!!!');
			  break;
			case 9:
			  await interaction.reply('https://i.ytimg.com/vi/U0SzdZ5AYds/maxresdefault.jpg');
			  channel.send('Please!!! :pleading_face:');
			  break;
			case 10:
			  await interaction.reply('https://i.ytimg.com/vi/1jWybIO6eqA/maxresdefault.jpg');
			  channel.send('Got it!');
			  break;
		}
	},
};