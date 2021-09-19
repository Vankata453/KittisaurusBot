//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cookforkitties')
		.setDescription('Cook for the kitties to give them food!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 5)) {
			case 1:
			await interaction.reply({ content: 'Let\'s make a delicious **Kitty Breakfast**!',
			  components: [new MessageActionRow().addComponents(new MessageButton()
				.setLabel('View original recipe')
				.setStyle('LINK')
				.setURL('https://www.thesprucepets.com/homemade-cat-food-recipes-551946#kitty-breakfast'))
			  ]
			});
			channel.send('**Ingredients:**');
			var ingredientOrder = functions.shuffleAllNumsTo(4);
			
			while (ingredientOrder.length !== 0) {
				switch (ingredientOrder[0]) {
					case 1:
					  channel.send({ content: '• 1 tablespoon nonfat dry milk',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing1_1').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 2:
					  channel.send({ content: '• 3 medium eggs',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing1_2').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 3:
					  channel.send({ content: '• 3 tablespoons cottage cheese',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing1_3').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 4:
					  channel.send({ content: '• 2 tablespoons grated veggies',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing1_4').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
				}
				ingredientOrder.shift();
			}
			  break;
			case 2:
			await interaction.reply({ content: 'Let\'s make the delicious **Almost-Spot\'s Stew**!',
			  components: [new MessageActionRow().addComponents(new MessageButton()
				.setLabel('View original recipe')
				.setStyle('LINK')
				.setURL('https://www.thesprucepets.com/homemade-cat-food-recipes-551946#almost-spots-stew'))
			  ]
			});
			channel.send('**Ingredients:**');
			var ingredientOrder = functions.shuffleAllNumsTo(8);
			
			while (ingredientOrder.length !== 0) {
				switch (ingredientOrder[0]) {
					case 1:
					  channel.send({ content: '• 1 whole chicken',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_1').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 2:
					  channel.send({ content: '• 2 cups brown rice',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_2').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 3:
					  channel.send({ content: '• 6 stalks celery',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_3').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 4:
					  channel.send({ content: '• 8 carrots (scrubbed but not peeled)',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_4').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 5:
					  channel.send({ content: '• 2 or 3 yellow squash',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_5').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 6:
					  channel.send({ content: '• 2 or 3 zucchini',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_6').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 7:
					  channel.send({ content: '• 1 small broccoli crown',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_7').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 8:
					  channel.send({ content: '• Handful of green beans',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_8').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
				}
				ingredientOrder.shift();
			}
			  break;
			case 3:
			await interaction.reply({ content: 'Let\'s make some delicious **Raw Chicken Liver And Salmon**!',
			  components: [new MessageActionRow().addComponents(new MessageButton()
				.setLabel('View original recipe')
				.setStyle('LINK')
				.setURL('https://shopee.sg/blog/easy-homemade-dog-cat-food-recipes/#attachment_37894'))
			  ]
			});
			channel.send('**Ingredients:**');
			var ingredientOrder = functions.shuffleAllNumsTo(7);
			
			while (ingredientOrder.length !== 0) {
				switch (ingredientOrder[0]) {
					case 1:
					  channel.send({ content: '• 50g raw chicken liver',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_1').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 2:
					  channel.send({ content: '• 50g raw beef kidney',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_2').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 3:
					  channel.send({ content: '• 2 cups water',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_3').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 4:
					  channel.send({ content: '• 100g raw chicken heart',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_4').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 5:
					  channel.send({ content: '• 700g raw chicken wings with bones and skin',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_5').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 6:
					  channel.send({ content: '• 100g raw salmon with bones',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_6').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 7:
					  channel.send({ content: '• 1 tsp taurine supplement powder',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_7').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
				}
				ingredientOrder.shift();
			}
			  break;
			case 4:
			await interaction.reply({ content: 'Let\'s make a delicious **Grain-Free Meatloaf**!',
			  components: [new MessageActionRow().addComponents(new MessageButton()
				.setLabel('View original recipe')
				.setStyle('LINK')
				.setURL('https://shopee.sg/blog/easy-homemade-dog-cat-food-recipes/#attachment_37893'))
			  ]
			});
			channel.send('**Ingredients:**');
			var ingredientOrder = functions.shuffleAllNumsTo(8);
			
			while (ingredientOrder.length !== 0) {
				switch (ingredientOrder[0]) {
					case 1:
					  channel.send({ content: '• 1kg organic ground beef, 90% lean',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_1').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 2:
					  channel.send({ content: '• 1kg organic ground turkey thighs (skinless and boneless)',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_2').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 3:
					  channel.send({ content: '• 115g organic squash meat',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_3').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 4:
					  channel.send({ content: '• 60g organic mixed berries',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_4').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 5:
					  channel.send({ content: '• 60g organic broccoli',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_5').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 6:
					  channel.send({ content: '• 2 cans sardines in water',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_6').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 7:
					  channel.send({ content: '• 60g organic kale',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_7').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 8:
					  channel.send({ content: '• 1kg organic mixed chicken organs, ground',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_8').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
				}
				ingredientOrder.shift();
			}
			  break;
			case 5:
			await interaction.reply({ content: 'Let\'s make some tasty **Tuna And Catnip Treats**!',
			  components: [new MessageActionRow().addComponents(new MessageButton()
				.setLabel('View original recipe (scroll down on the page)')
				.setStyle('LINK')
				.setURL('https://shopee.sg/blog/easy-homemade-dog-cat-food-recipes/#attachment_37892'))
			  ]
			});
			channel.send('**Ingredients:**');
			var ingredientOrder = functions.shuffleAllNumsTo(4);
			
			while (ingredientOrder.length !== 0) {
				switch (ingredientOrder[0]) {
					case 1:
					  channel.send({ content: '• 1 large egg',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing5_1').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 2:
					  channel.send({ content: '• A can of tuna in water, flaked',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing5_2').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 3:
					  channel.send({ content: '• 1 cup of all-purpose flour',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing5_3').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
					case 4:
					  channel.send({ content: '• 1 tbsp dried catnip',
						components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing5_4').setLabel('Give!').setStyle('PRIMARY'))]
					  });
					  break;
				}
				ingredientOrder.shift();
			}
			  break;
		}
	},
};