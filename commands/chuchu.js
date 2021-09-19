//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chuchu')
		.setDescription('Check out what ChuChu\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 9)) {
			case 1:
			  await interaction.reply('https://i.pinimg.com/originals/25/b5/c1/25b5c1f2eb3046a1b54846a44c96f08b.jpg');
			  channel.send('Chu... (I\'m bored...)');
			  break;
			case 2:
			  await interaction.reply('https://i.pinimg.com/originals/35/35/7a/35357a4ee88ee4c00756d3a7c177aadb.jpg');
			  channel.send('Chu Chu? (What\'s the matter?)');
			  break;
			case 3:
			  await interaction.reply('https://i.pinimg.com/736x/e6/8f/73/e68f73a049eaa7dc82d177332d173ecc.jpg');
			  channel.send('Chuu Chu! (Got it!)');
			  break;
			case 4:
			  await interaction.reply('https://64.media.tumblr.com/93c9a497af94efa56ce2a4d68d764cee/989ac97d0b524b3d-0c/s400x600/12b257f000d2b39d7acb24eb0c9510d1282ff095.jpg');
			  channel.send('Chu Chuu Chu? (How are you?)');
			  break;
			case 5:
			  await interaction.reply('https://64.media.tumblr.com/bed2b21d65d35f7614ecdff36f48ef77/919370320019b17d-13/s500x750/cc2862749c663219c5f984bde97eb7f21922cf27.gif');
			  channel.send('Chuu Chuu Chu! (Thanks for the grooming service, LuLu!)');
			  break;
			case 6:
			  await interaction.reply('https://64.media.tumblr.com/461e8bdfefb4cd4701c981061674c37a/4a283547d7216dc8-af/s540x810/935b19d383d22b4c064fc5ed3c036cb7916d8184.gif');
			  channel.send('Chu Chu Chuu Chu! (These keyboards are really comfy for rolling!)');
			  break;
			case 7:
			  await interaction.reply('https://i.pinimg.com/originals/bd/22/db/bd22db35bbca4850df0bbe41db16457b.jpg');
			  channel.send('Chu Chuu? (What is there, LuLu?)');
			  break;
			case 8:
			  await interaction.reply('https://64.media.tumblr.com/6a7072b4bcebee61d21c86bfd3477d0b/fc3af0939baf9a4c-43/s640x960/2eebb8813c7d0b5f44fdbb7ef6d54fbd6f52577d.jpg');
			  channel.send('Chuu Chu Chu! (I\'m getting ready to sleep!)');
			  break;
			case 9:
			  await interaction.reply('https://64.media.tumblr.com/1bbcd364b0db00e5ea89ad970c7ba932/79ed67d66e297f28-60/s480x381/986901080673c37a0112681d06ec1d0f36a8cd38.gif');
			  channel.send('Chuu Chuu! (This is fun!)');
			  break;
		}
	},
};