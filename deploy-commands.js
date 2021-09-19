// Run dotenv
require('dotenv').config();

//Import libraries
const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = []
	// new SlashCommandBuilder().setName('help').setDescription('Get a list of all bot commands!'),
	// new SlashCommandBuilder().setName('dd').setDescription('Check out what DD\'s doing!'),
	// new SlashCommandBuilder().setName('tt').setDescription('Check out what TT\'s doing!'),
	// new SlashCommandBuilder().setName('coco').setDescription('Check out what CoCo\'s doing!'),
	// new SlashCommandBuilder().setName('momo').setDescription('Check out what MoMo\'s doing!'),
	// new SlashCommandBuilder().setName('lala').setDescription('Check out what LaLa\'s doing!'),
	// new SlashCommandBuilder().setName('chuchu').setDescription('Check out what ChuChu\'s doing!'),
	// new SlashCommandBuilder().setName('lulu').setDescription('Check out what LuLu\'s doing!'),
	// new SlashCommandBuilder().setName('nana').setDescription('Check out what NaNa\'s doing!'),
	// new SlashCommandBuilder().setName('toto').setDescription('Check out what ToTo\'s doing!'),
	// new SlashCommandBuilder().setName('dodo').setDescription('Check out what DoDo\'s doing!'),
	// new SlashCommandBuilder().setName('cookforkitties').setDescription('Cook for the kitties to give them food!'),
	// new SlashCommandBuilder().setName('feedkitties').setDescription('It\'s snack time! Feed the kitties!')
		// .addStringOption(option => option.setName('meal').setDescription('The name of the meal you want to give.')
		// .setRequired(true)
		// .addChoice('Kitty Breakfast', 'Kitty Breakfast')
		// .addChoice('Almost Spot\'s Stew', 'Almost Spot\'s Stew')
		// .addChoice('Raw Chicken Liver And Salmon', 'Raw Chicken Liver And Salmon')
		// .addChoice('Grain-Free Meatloaf', 'Grain-Free Meatloaf')
		// .addChoice('Tuna And Catnip Treats', 'Tuna And Catnip Treats')),
	// new SlashCommandBuilder().setName('playwithkitties').setDescription('Play with the kitties!'),
	// new SlashCommandBuilder().setName('sleepykitties').setDescription('Watch some cute sleepy kitties!'),
	// new SlashCommandBuilder().setName('snackstealcheck').setDescription('Check if the Kitty Pirates are succeeding at stealing snacks!'),

	//.map(command => command.toJSON());
	
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
	try {
		await rest.put(
			Routes.applicationCommands(process.env.CLIENT_ID),
			{ body: commands },
		);


		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();