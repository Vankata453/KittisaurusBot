//Run dotenv
require('dotenv').config();

//Import libraries
const fs = require('fs');
const { Client, Collection, Intents, MessageActionRow, MessageButton } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

//Log in to Discord
client.login(process.env.DISCORD_TOKEN);

//Import functions
const functions = require('./functions.js')

//Other global variables
var registeredButtons = [];

// Event listener when a user connected to the server.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Command files setup
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

//Joining a server
client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
})

//Leaving a server
client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
})

//Interaction created
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand() && !interaction.isButton()) return;
	const { customId, component } = interaction;
	const channel = interaction.channel;

	//Command interactions
	if (interaction.isCommand()) {
		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was a problem with the execution of the command! Detective LuLu is on the case!', ephemeral: true });
		}
	}

	//Button interactions
	if (interaction.isButton()) {
		//If the button is from "/cookforkitties"
		if (customId.startsWith('ing') || customId.startsWith('ins')) {
			if (customId.startsWith('ing')) {
				component.setLabel('Given!');
			} else if (customId.startsWith('ins')) {
				component.setLabel('Done!');
			}
			component.setStyle('SUCCESS');
			component.setDisabled();
			interaction.update({
				components: [
					new MessageActionRow().addComponents(component)
				]
			});
			if (!registeredButtons.includes(component.customId)) {
				registeredButtons.push(component.customId);
			}

			if (functions.arrayRegex(4, registeredButtons, /ing1_[1-4]$/)) {
				registeredButtons = [];
				channel.send('**Instructions:**');
				for (var currInstruction = 0; currInstruction <= 4; currInstruction++) {
					switch (currInstruction) {
						case 1:
						  channel.send({ content: '**1.** Mix together the milk powder with a small amount of water.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins1_1').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 2:
						  channel.send({ content: '**2.** Add the eggs and beat well.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins1_2').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 3:
						  channel.send({ content: '**3.** Pour the mixture into a small non-stick frying pan and cook on medium-low heat until done.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins1_3').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 4:
						  channel.send({ content: '**4.** Flip over like a pancake and spread the cottage cheese and veggies over half of the cooked surface. Fold like an omelet. Cool and cut to bite-sized pieces to serve.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins1_4').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
					}
				}
			}
			
			if (functions.arrayRegex(8, registeredButtons, /ing2_[1-8]$/)) {
				registeredButtons = [];
				channel.send('**Instructions:**');
				for (var currInstruction = 0; currInstruction <= 7; currInstruction++) {
					switch (currInstruction) {
						case 1:
						  channel.send({ content: '**1.** Wash chicken, then cover with water in a large stew pot.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins2_1').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 2:
						  channel.send({ content: '**2.** Cut vegetables into pieces and add to pot.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins2_2').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 3:
						  channel.send({ content: '**3.** Add rice.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins2_3').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 4:
						  channel.send({ content: '**4.** Cook until chicken almost falls off the bone and vegetables are tender.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins2_4').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 5:
						  channel.send({ content: '**5.** Completely debone the chicken.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins2_5').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 6:
						  channel.send({ content: '**6.** Pour the stew into a blender and blend or chop until mixture is coarse (about bite-sized).',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins2_6').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 7:
						  channel.send({ content: '**7.** Freeze in meal-sized plastic bags.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins2_7').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
					}
				}
			}
			
			if (functions.arrayRegex(7, registeredButtons, /ing3_[1-7]$/)) {
				registeredButtons = [];
				channel.send('**Instructions:**');
				for (var currInstruction = 0; currInstruction <= 4; currInstruction++) {
					switch (currInstruction) {
						case 1:
						  channel.send({ content: '**1.** Puree all the organ meat into the water using a food processor.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins3_1').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 2:
						  channel.send({ content: '**2.** Pour the mixture into a meat grinder and add in the remaining ingredients.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins3_2').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 3:
						  channel.send({ content: '**3.** Grind all the ingredients together.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins3_3').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 4:
						  channel.send({ content: '**4.** Done! Freeze the excess in small portions for easy serving later on.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins3_4').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
					}
				}
			}
			
			if (functions.arrayRegex(8, registeredButtons, /ing4_[1-8]$/)) {
				registeredButtons = [];
				channel.send('**Instructions:**');
				for (var currInstruction = 0; currInstruction <= 5; currInstruction++) {
					switch (currInstruction) {
						case 1:
						  channel.send({ content: '**1.** Preheat oven to 180°.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_1').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 2:
						  channel.send({ content: '**2.** Using a cheese grater, shred the squash.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_2').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 3:
						  channel.send({ content: '**3.** Puree organic broccoli, organic kale, berries, sardine and shredded squash with a food processor.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_3').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 4:
						  channel.send({ content: '**4.** Place the ground meat into a large mixing bowl and add the pureed vegetable and fruit mixture. Mix everything together until it’s well incorporated.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_4').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 5:
						  channel.send({ content: '**5.** Pour the mixture into a ceramic baking dish and bake in the oven for 60 minutes!',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_5').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
					}
				}
			}
			
			if (functions.arrayRegex(4, registeredButtons, /ing5_[1-4]$/)) {
				registeredButtons = [];
				channel.send('**Instructions:**');
				for (var currInstruction = 0; currInstruction <= 5; currInstruction++) {
					switch (currInstruction) {
						case 1:
						  channel.send({ content: '**1.** Preheat oven to 180°.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_1').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 2:
						  channel.send({ content: '**2.** Drain the tuna and add it into the food processor along with the rest of the ingredients. Process until you get a smooth and thick dough.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_2').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 3:
						  channel.send({ content: '**3.** Roll the dough into 80 balls, roughly about ¼ teaspoon size each.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_3').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 4:
						  channel.send({ content: '**4.**  Place the dough balls on a baking sheet lined with parchment paper and slightly flatten each ball before placing into the oven.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_4').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
						case 5:
						  channel.send({ content: '**5.** Bake in the preheated oven for about 15 minutes until the treats are golden and crisp. Let them cool completely before storing in an air-tight container for freezing.',
							components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ins4_5').setLabel('Do!').setStyle('PRIMARY'))]
						  });
						  break;
					}
				}
			}
			
			if (functions.arrayRegex(4, registeredButtons, /ins1_[1-4]$/)
			|| functions.arrayRegex(7, registeredButtons, /ins2_[1-7]$/)
			|| functions.arrayRegex(4, registeredButtons, /ins3_[1-4]$/)
			|| functions.arrayRegex(5, registeredButtons, /ins4_[1-5]$/)
			|| functions.arrayRegex(5, registeredButtons, /ins5_[1-5]$/)) {
				channel.send('**Meal done!** Feed the kitties with /feedkitties *mealName*.');
				registeredButtons = [];
			}
		}
	}
});