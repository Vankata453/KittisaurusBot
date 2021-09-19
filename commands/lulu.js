//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lulu')
		.setDescription('Check out what LuLu\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 15)) {
			case 1:
			  await interaction.reply('https://i.pinimg.com/736x/b3/b0/3a/b3b03a3bbeabaf29b21c8509ba5d620d.jpg');
			  channel.send('Baby me yawning! :yawning_face:');
			  break;
			case 2:
			  await interaction.reply('https://i.pinimg.com/originals/42/9e/ac/429eacc05944f60cc0fdc799e530b3a9.jpg');
			  channel.send('Snacks, please!!! :pleading_face:');
			  break;
			case 3:
			  await interaction.reply('https://i.pinimg.com/736x/c5/fe/a1/c5fea1116879443735adb120a1ce0b02.jpg');
			  channel.send('???');
			  break;
			case 4:
			  await interaction.reply('https://preview.redd.it/5o75ofausdp41.png?auto=webp&s=464f164d73f0cb59c238b7163252341a0150dfc2');
			  channel.send('Is this snacks?');
			  break;
			case 5:
			  await interaction.reply('https://64.media.tumblr.com/1c6e200a4ceb9ec8969d096a944fc386/307ac732f38adb90-0b/s400x600/a2eabf2a6ff0008e5aa2049553291e1321730d1a.gif');
			  channel.send('So comfy! :relieved:');
			  break;
			case 6:
			  await interaction.reply('https://i.pinimg.com/originals/28/ac/30/28ac30e3390c583875562c63e1a0a168.gif');
			  channel.send('Nooo, let me go!');
			  break;
			case 7:
			  await interaction.reply('https://imgur.com/e7X6rt4');
			  channel.send('I\'m ready for those snacks! :grinning:');
			  break;
			case 8:
			  await interaction.reply('https://64.media.tumblr.com/3ebf2140e2f7f9f55cd07c6158d83d12/a7b9344d89a85796-72/s400x600/957a6862034642ea60315af76bc176c0bed7a8d0.gif');
			  channel.send('My fluffiness reveals with every brush!');
			  break;
			case 9:
			  await interaction.reply('https://i.imgur.com/7NlW7kh.jpeg');
			  channel.send(':sleeping:');
			  break;
			case 10:
			  await interaction.reply('https://static.tvtropes.org/pmwiki/pub/images/d3324157_1ad1_4b4f_b67a_ec0a5d33a4c2.png');
			  channel.send('Look at my eyes!');
			  break;
			case 11:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/7/7c/Claireluvcatblackcatmask.png/revision/latest?cb=20210426151347');
			  channel.send('Who is disturbing me?');
			  break;
			case 12:
			  await interaction.reply('https://i.redd.it/rkiwamx2mo451.jpg');
			  channel.send('I\'m just going for snacks and become a meme... :confused:');
			  break;
			case 13:
			  await interaction.reply('https://i.pinimg.com/originals/d5/60/5a/d5605a0fcda8ce1b07d39780f1652427.jpg');
			  channel.send('What\'s the matter?');
			  break;
			case 14:
			  await interaction.reply('https://tenor.com/view/lulu-creamheroes-gato-lazy-cat-gif-18261060');
			  channel.send('Just being my cute-self...');
			  break;
			case 15:
			  await interaction.reply('https://i.pinimg.com/originals/a2/8e/62/a28e629540b2aa8822fd3a02ff9e82cd.jpg');
			  channel.send('Who\'s that adorable kitty? :heart_eyes:');
			  break;
		}
	},
};