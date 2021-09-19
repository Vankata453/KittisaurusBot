//Import libraries
const { SlashCommandBuilder } = require('@discordjs/builders');

//Import functions
const functions = require('./../functions.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('playwithkitties')
		.setDescription('Play with the kitties!'),
	async execute(interaction) {
		const channel = interaction.channel;
		switch (functions.mathRandomInt(1, 12)) {
			case 1:
			  await interaction.reply('https://tenor.com/view/kittisaurus-shock-jumpscare-tt-car-gif-18438797');
			  channel.send('AAAAAH!');
			  break;
			case 2:
			  await interaction.reply('https://tenor.com/view/creamheroes-lulu-cat-claireluvcat-kittisaurus-gif-18183006');
			  channel.send('I must catch it!');
			  break;
			case 3:
			  await interaction.reply('https://tenor.com/view/kittisaurus-you-win-let-it-go-lulu-tiger-gif-18353037');
			  channel.send('I need to catch the target!!!');
			  break;
			case 4:
			  await interaction.reply('https://tenor.com/view/kittisaurus-focus-jump-catch-lulu-gif-18353028');
			  channel.send('Focus. Lump. Catch!');
			  break;
			case 5:
			  await interaction.reply('https://tenor.com/view/kittisaurus-lulu-slap-flying-rawr-gif-18233147');
			  channel.send('Sooo close!');
			  break;
			case 6:
			  await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888387261668950016/tumblr_d9bc6a359587a78c7209f5edc11fa193_7bf1a0c1_400.gif');
			  channel.send('I love this! Continue, human!');
			  break;
			case 7:
			  await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888387108279033856/tumblr_c7fe9cf7ef370038185461b13c4d1839_1af780be_250.gif');
			  channel.send('Nooo! What is this thing I\'m wrapped in?!');
			  break;
			case 8:
			  await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888386975663534111/tumblr_b55aa54fecc1f301fa954cb700a58419_14a197e2_400.gif');
			  channel.send('Let go!!!');
			  break;
			case 9:
			  await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888386753554182214/tumblr_a28709ea80d4b1bb4b4bc64b3d7d5908_088a9ee0_250.gif');
			  channel.send('Finally free!');
			  break;
			case 10:
			  await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888386627527913482/tumblr_9d32ee1241be20fbfc1ef889f155c426_3e3e877b_500.gif');
			  channel.send('Why am I not catching it?!?!');
			  break;
			case 11:
			  await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888386481863921724/tenor.gif');
			  channel.send('Guess it\'s the rolling strat again!');
			  break;
			case 12:
			  await interaction.reply('https://tenor.com/view/lulu-creamheroes-amelinth-gato-kittisaurus-gif-18261043');
			  channel.send('On my way to catch the target once and for all!');
			  break;
		}
	},
};