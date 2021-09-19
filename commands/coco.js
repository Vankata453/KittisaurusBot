//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coco')
		.setDescription('Check out what CoCo\'s doing!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 10)) {
			case 1:
			  await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/6/6b/E9D2ED11-369A-469D-81D8-C02777DD4EC1.jpeg/revision/latest/scale-to-width-down/250?cb=20190909022510');
			  channel.send('Am i the bread cat now?');
			  break;
			case 2:
			  await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflP5kHCU7YoZKpyHplufPPJmnTFW3TsBfog&usqp=CAU');
			  channel.send('I really looked like LaLa when I was a baby.');
			  break;
			case 3:
			  await interaction.reply('https://i.pinimg.com/originals/1a/81/b9/1a81b906ff5c0f3fd8c85e3eb95c87a6.png');
			  channel.send('Oh... bad grades again, DD?! :(');
			  break;
			case 4:
			  await interaction.reply('https://i.redd.it/fy9vz30sy9h11.jpg');
			  channel.send('This is disgusting and doesn\'t have the amount of nutrition i need on a daily basis!');
			  break;
			case 5:
			  await interaction.reply('https://64.media.tumblr.com/1933260a3c82199431032b9ae61bdeda/d3ffc5987846537e-5c/s1280x1920/1239fe903fdad2eef831c8a66a12ea3b64b4945f.jpg');
			  channel.send('I\'m ready for my science conference!');
			  break;
			case 6:
			  await interaction.reply('https://64.media.tumblr.com/7752591ad3a2b7536f4ce7190308e6bf/tumblr_py9bp82bg11tawgedo1_400.gif');
			  channel.send('Ooh! That is interesting!');
			  break;
			case 7:
			  await interaction.reply('https://i.pinimg.com/originals/bc/ab/d8/bcabd85a1e3d9266ebee97e85bc2123c.jpg');
			  channel.send('I almost crashed myself on that sign! Why is it in the middle of nowhere?!');
			  break;
			case 8:
			  await interaction.reply('https://i.pinimg.com/originals/09/5d/d6/095dd6d2092351d1cbc3a3014dac8c49.gif');
			  channel.send(':wink:');
			  break;
			case 9:
			  await interaction.reply('https://64.media.tumblr.com/c628cae907af7380a62d7dcb522ce213/tumblr_pv96rdRbnk1tawgedo2_540.gif');
			  channel.send('Just how I taught you, human!');
			  break;
			case 10:
			  await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7loCGKSux8thnzjDqByvuthRO51J5_uaCw&usqp=CAU');
			  channel.send('That is so scary! :fearful:');
			  break;
		}
	},
};