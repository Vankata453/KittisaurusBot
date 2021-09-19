//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('feedkitties')
		.setDescription('It\'s snack time! Feed the kitties!')
		.addStringOption(option => option.setName('meal').setDescription('The name of the meal you want to give.')
		.setRequired(true)
		.addChoice('Kitty Breakfast', 'Kitty Breakfast')
		.addChoice('Almost Spot\'s Stew', 'Almost Spot\'s Stew')
		.addChoice('Raw Chicken Liver And Salmon', 'Raw Chicken Liver And Salmon')
		.addChoice('Grain-Free Meatloaf', 'Grain-Free Meatloaf')
		.addChoice('Tuna And Catnip Treats', 'Tuna And Catnip Treats')),
	async execute(interaction) {
		const channel = interaction.channel;
		const meal = interaction.options.getString('meal');
		const randomInt = functions.mathRandomInt(1, 7);
		
		await interaction.reply(`Serving ${meal} to the kitties!`);
			
		switch (randomInt) {
			//Image responses
			case 1:
			  await interaction.followUp('https://imgur.com/2ZTKwPm');
			  break;
			case 2:
			  await interaction.followUp('https://imgur.com/FCpkecS');
			  break;
			case 3:
			  await interaction.followUp('https://imgur.com/gsZctnS');
			  break;
			case 4:
			  await interaction.followUp('https://imgur.com/BQYx32v');
			  break;
			case 5:
			  await interaction.followUp('https://imgur.com/9Mmi1Ox');
			  break;
			case 6:
			  await interaction.followUp('https://imgur.com/5KvwdQp');
			  break;
			case 7:
			  //Bad cases
			  switch (functions.mathRandomInt(1, 4)) {
				  case 1:
					await interaction.followUp('LuLu stole the meal before you could give some to any of the other kitties. Try feeding the kitties again!');
					channel.send('https://imgur.com/owsY9MG');
					channel.send('https://imgur.com/jZXSewC');
					break;
				  case 2:
					await interaction.followUp('LuLu and DoDo stole the meal before you could give some to any of the other kitties. Try feeding the kitties again!');
					break;
				  case 3:
					await interaction.followUp('Claire tried taking a photo of the kitties with the meal in front of them, but the meal fell onto the floor after LuLu pushed it towards himself. Try feeding the kitties again!');
					break;
				  case 4:
					await interaction.followUp('No kitties were hungry, except for LuLu and DoDo. Try feeding the kitties again later!');
					break;
			  }
			  break;
		}
		
		//Additional messages if the meal was eaten by the kitties
		if (randomInt !== 7) {
			switch (functions.mathRandomInt(1, 8)) {
				case 1:
				  channel.send(`The ${meal} was a great hit!`);
				  break;
				case 2:
				  channel.send('The kitties loved the meal, washed themselves after they finished and got to sleep!');
				  break;
				case 3:
				  channel.send('LuLu and DoDo want more, so they go to steal from the other kitties around them.');
				  break;
				case 4:
				  channel.send('It was that good that some of the kitties will always hang around when you make it again!');
				  break;
				case 5:
				  channel.send('All 10 kitties loved the meal!');
				  break;
				case 6:
				  channel.send(`The kitty pirates will always be sure to know if the ${meal} is around!`);
				  break;
				case 7:
				  channel.send('Everyone was sure this is gonna be good by smelling it from earlier!');
				  break;
				case 8:
				  channel.send('All 10 kitties loved the meal!');
				  break;
			}
			
			//Rare messages
			switch (functions.mathRandomInt(1, 100)) {
				case 55:
				  channel.send('"DD like bread and chicken. DD not eat this."');
				  break;
				case 85:
				  channel.send('It didn\'t have enough nutrition for CoCo! (or he was just being a picky eater as always :thinking:)');
				  break;
				case 95:
				  channel.send(`The kitties didn't really like the ${meal} this time. Try cooking and feeding them something else or cook the ${meal} again (the ${meal} may be better the other time)!`);
				  break;
			}
		}
	},
};