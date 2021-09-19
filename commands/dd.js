//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dd')
		.setDescription('Check out what DD\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 20)) {
			case 1:
			  await interaction.reply('https://i.pinimg.com/736x/7e/1a/45/7e1a45837e29c04a0434148050fbc56a.jpg');
			  channel.send('DD want hug! :pleading_face:');
			  break;
			case 2:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/9/9d/Dd_catto.png/revision/latest/scale-to-width-down/250?cb=20210410180855');
			  channel.send('DD watch show!');
			  break;
			case 3:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/5/53/Cooldd.png/revision/latest/scale-to-width-down/250?cb=20210412135606');
			  channel.send('DD cool cat now!');
			  break;
			case 4:
			  await interaction.reply('https://media1.tenor.com/images/716844a0f63e3c960bfdfa2a89570cc0/tenor.gif?itemid=17799449');
			  channel.send('DD enjoy the show!');
			  break;
			case 5:
			  await interaction.reply('https://64.media.tumblr.com/a442a897a56e27821cd5b7788476ddbf/tumblr_pxu7ztZnwb1tawgedo2_540.gif');
			  channel.send('DD chill!');
			  break;
			case 6:
			  await interaction.reply('https://66.media.tumblr.com/16cbb41128e3eb1919573f69d64957a9/tumblr_pyd2l2rCI51tawgedo1_400.gif');
			  channel.send('Baby DD eat tail!');
			  break;
			case 7:
			  await interaction.reply('https://64.media.tumblr.com/b8390207661e819d769d70c3454023c0/b7cbf4853db58b87-8f/s400x600/8add7624433507126430fc26b910c56064505226.gif');
			  channel.send('DD be your fluffy friend!');
			  break;
			case 8:
			  await interaction.reply('https://media1.tenor.com/images/b5326a2543155d1921abe8a9911fe3c0/tenor.gif?itemid=19533550');
			  channel.send('DD not expect challenge again!');
			  break;
			case 9:
			  await interaction.reply('https://66.media.tumblr.com/5c91962c725b404bb24a30c7d5d06a5b/tumblr_prvwy9ct1L1tawgedo1_r1_540.gif');
			  channel.send('DD need attention!');
			  break;
			case 10:
			  await interaction.reply('https://i.ytimg.com/vi/awIDeT1xIDU/maxresdefault.jpg');
			  channel.send('DD angry and slim!');
			  break;
			case 11:
			  await interaction.reply('https://64.media.tumblr.com/d6eb9fdb49fe18f270177a010d902970/b794725abe1d1bd5-ea/s400x600/0e2ee91b46f64c089ec90c4bff7f66a7917d8f8a.gif');
			  channel.send('DD smell new kitty!');
			  break;
			case 12:
			  await interaction.reply('https://66.media.tumblr.com/6ace8139902fc95263c0b47e1c3aa54b/tumblr_pwjrl2fhsb1tawgedo2_400.gif');
			  channel.send('DD stuck in bag! DD need help!!!');
			  break;
			case 13:
			  await interaction.reply('https://64.media.tumblr.com/1a79477316206b330194910732dd5fbc/tumblr_pz304lGpKp1tawgedo1_400.gif');
			  channel.send('DD not fit! :(');
			  break;
			case 14:
			  await interaction.reply('https://i.pinimg.com/originals/52/a1/f8/52a1f8a7a4fb5da72c85b5a19574b207.gif');
			  channel.send('DD watch up!');
			  break;
			case 15:
			  await interaction.reply('https://i.pinimg.com/originals/87/a5/1a/87a51a7204e08a16948912c717e53cde.gif');
			  channel.send('DD sleep! DD wake up!');
			  break;
			case 16:
			  await interaction.reply('https://64.media.tumblr.com/87f3971eb16694666a9fd15369a63a77/tumblr_pyd3rbBAUT1tawgedo1_540.gif');
			  channel.send('DD do tired meow!');
			  break;
			case 17:
			  await interaction.reply('https://pbs.twimg.com/media/EeKx1LYX0AMYxC3.jpg');
			  channel.send('DD with CoCo now!');
			  break;
			case 18:
			  await interaction.reply('https://img.wattpad.com/f0ec18c74a59ca378de60a8bb96b55765ba837c5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f455a495a7a685f7032712d5166413d3d2d3736383936333039392e313562386137356532376534333361613939383630313637303434332e6a7067?s=fit&w=720&h=720');
			  channel.send('DD be a fluffy boi!');
			  break;
			case 19:
			  await interaction.reply('https://i.pinimg.com/originals/dc/7d/26/dc7d26f2f58da472f754712bfe4f9125.jpg');
			  channel.send('DD like watching outdoor life!');
			  break;
			case 20:
			  await interaction.reply('https://i.pinimg.com/736x/f8/f9/43/f8f9435d2282ed66873a2205429fe942.jpg');
			  channel.send('DD try to sleep! :sleeping:');
			  break;
		}
	},
};