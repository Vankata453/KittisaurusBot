//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('momo')
		.setDescription('Check out what MoMo\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 6)) {
			case 1:
			  await interaction.reply('https://i.redd.it/sqqwpocyn4541.jpg');
			  channel.send('Waiting for my bumpats...');
			  break;
			case 2:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/b/b3/Momo%27s_STAMINNNNNNNAAAA.png/revision/latest/scale-to-width-down/250?cb=20210420154537');
			  channel.send('What do you mean?');
			  break;
			case 3:
			  await interaction.reply('https://imgur.com/VF6B3pk');
			  channel.send('Watch and learn, kid!');
			  break;
			case 4:
			  await interaction.reply('https://i1.wp.com/petcareplus.net/wp-content/uploads/2019/12/1577810731_maxresdefault.jpg');
			  channel.send('Don\'t be so scared, LuLu! I\'m here to ask if you wanna try out my new invention.');
			  break;
			case 5:
			  await interaction.reply('https://64.media.tumblr.com/256ec03e9fe4ce021bdadd2f2e3638d5/d6e23038d8c0ee65-7a/s540x810/cf6c70c21166087f825047a7ff26128a02017c57.gif');
			  channel.send('Dreaming about bumpats... :sleeping:');
			  break;
			case 6:
			  await interaction.reply('https://tenor.com/view/kittisaurus-creamheroes-cat-gif-18622788');
			  channel.send('I like saving up my stamina and looking cool in the process!');
			  break;
		}
	},
};