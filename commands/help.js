//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get a list of all bot commands!'),
	async execute(interaction) {
		const helpEmbed = new MessageEmbed()
			.setColor('#f5be80')
			.setTitle('Bot commands')
			.setDescription('A list of all currently supported commands by KittisaurusBot.')
			.setThumbnail('https://i.imgur.com/5UdSjxt.png')
			.addFields(
				{ name: '/help', value: 'Shows this help embed.' },
				{ name: '/{cat}', value: 'Shows a picture of a specified Kittisaurus cat with a quote.' },
				{ name: '/cookforkitties', value: 'Cooks a meal for the kitties to enjoy.' },
				{ name: '/feedkitties {meal}', value: 'Feeds the kitties a certain meal (from the ones available for cooking).' },
				{ name: '/playwithkitties', value: 'Shows a picture of a playing Kittisaurus cat with a quote.' },
				{ name: '/sleepykitties', value: 'Shows a picture of a sleepy Kittisaurus cat with a quote.' },
				{ name: '/snackstealcheck', value: 'Allows you to check out if the Kitty Pirates are succeeding at stealing snacks!' },
				{ name: '\u200B', value: '\u200B' }, //Empty field
				{ name: 'Contribution', value: 'Contributions to the bot (including new pictures, pictures with quotes, features or more) are always open and appreciated at the bot\'s [GitHub](https://github.com/Vankata453/KittisaurusBot) page!', inline: true },
				{ name: 'Feedback', value: 'If you encounter any issues with the bot, have any suggestions or questions, you can post an issue on [GitHub](https://github.com/Vankata453/KittisaurusBot) or DM me at Vankata453#4832!', inline: true },
			)
			.setImage('https://cdn.homecrux.com/wp-content/uploads/2021/07/Women-builds-Plastic-Jars-as-Cat-Capsule-Hotel-for-her-beloveds_1.jpg')
			.setTimestamp()
			.setFooter('Thank you for using KittisaurusBot!', 'https://i.imgur.com/eDRT1zd.jpg');
		await interaction.reply({ embeds: [helpEmbed] });
	},
};