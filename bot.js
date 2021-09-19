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
		// if (commandName == 'help') {
			// const helpEmbed = new MessageEmbed()
				// .setColor('#f5be80')
				// .setTitle('Bot commands')
				// .setDescription('A list of all currently supported commands by KittisaurusBot.')
				// .setThumbnail('https://i.imgur.com/5UdSjxt.png')
				// .addFields(
					// { name: '/help', value: 'Shows this help embed.' },
					// { name: '/{cat}', value: 'Shows a picture of a specified Kittisaurus cat with a quote.' },
					// { name: '/cookforkitties', value: 'Cooks a meal for the kitties to enjoy.' },
					// { name: '/feedkitties {meal}', value: 'Feeds the kitties a certain meal (from the ones available for cooking).' },
					// { name: '/playwithkitties', value: 'Shows a picture of a playing Kittisaurus cat with a quote.' },
					// { name: '/sleepykitties', value: 'Shows a picture of a sleepy Kittisaurus cat with a quote.' },
					// { name: '/snackstealcheck', value: 'Allows you to check out if the Kitty Pirates are succeeding at stealing snacks!' },
					// { name: '\u200B', value: '\u200B' }, //Empty field
					// { name: 'Contribution', value: 'Contributions to the bot (including new pictures, pictures with quotes, features or more) are always open and appreciated at the bot\'s [GitHub](https://github.com/Vankata453/KittisaurusBot) page!', inline: true },
					// { name: 'Feedback', value: 'If you encounter any issues with the bot, have any suggestions or questions, you can post an issue on [GitHub](https://github.com/Vankata453/KittisaurusBot) or DM me at Vankata453#4832!', inline: true },
				// )
				// .setImage('https://cdn.homecrux.com/wp-content/uploads/2021/07/Women-builds-Plastic-Jars-as-Cat-Capsule-Hotel-for-her-beloveds_1.jpg')
				// .setTimestamp()
				// .setFooter('Thank you for using KittisaurusBot!', 'https://i.imgur.com/eDRT1zd.jpg');
			// await interaction.reply({ embeds: [helpEmbed] });
		// } else if (commandName == 'dd') {
			// switch (mathRandomInt(1, 20)) {
				// case 1:
				  // await interaction.reply('https://i.pinimg.com/736x/7e/1a/45/7e1a45837e29c04a0434148050fbc56a.jpg');
				  // channel.send('DD want hug! :pleading_face:');
				  // break;
				// case 2:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/9/9d/Dd_catto.png/revision/latest/scale-to-width-down/250?cb=20210410180855');
				  // channel.send('DD watch show!');
				  // break;
				// case 3:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/5/53/Cooldd.png/revision/latest/scale-to-width-down/250?cb=20210412135606');
				  // channel.send('DD cool cat now!');
				  // break;
				// case 4:
				  // await interaction.reply('https://media1.tenor.com/images/716844a0f63e3c960bfdfa2a89570cc0/tenor.gif?itemid=17799449');
				  // channel.send('DD enjoy the show!');
				  // break;
				// case 5:
				  // await interaction.reply('https://64.media.tumblr.com/a442a897a56e27821cd5b7788476ddbf/tumblr_pxu7ztZnwb1tawgedo2_540.gif');
				  // channel.send('DD chill!');
				  // break;
				// case 6:
				  // await interaction.reply('https://66.media.tumblr.com/16cbb41128e3eb1919573f69d64957a9/tumblr_pyd2l2rCI51tawgedo1_400.gif');
				  // channel.send('Baby DD eat tail!');
				  // break;
				// case 7:
				  // await interaction.reply('https://64.media.tumblr.com/b8390207661e819d769d70c3454023c0/b7cbf4853db58b87-8f/s400x600/8add7624433507126430fc26b910c56064505226.gif');
				  // channel.send('DD be your fluffy friend!');
				  // break;
				// case 8:
				  // await interaction.reply('https://media1.tenor.com/images/b5326a2543155d1921abe8a9911fe3c0/tenor.gif?itemid=19533550');
				  // channel.send('DD not expect challenge again!');
				  // break;
				// case 9:
				  // await interaction.reply('https://66.media.tumblr.com/5c91962c725b404bb24a30c7d5d06a5b/tumblr_prvwy9ct1L1tawgedo1_r1_540.gif');
				  // channel.send('DD need attention!');
				  // break;
				// case 10:
				  // await interaction.reply('https://i.ytimg.com/vi/awIDeT1xIDU/maxresdefault.jpg');
				  // channel.send('DD angry and slim!');
				  // break;
				// case 11:
				  // await interaction.reply('https://64.media.tumblr.com/d6eb9fdb49fe18f270177a010d902970/b794725abe1d1bd5-ea/s400x600/0e2ee91b46f64c089ec90c4bff7f66a7917d8f8a.gif');
				  // channel.send('DD smell new kitty!');
				  // break;
				// case 12:
				  // await interaction.reply('https://66.media.tumblr.com/6ace8139902fc95263c0b47e1c3aa54b/tumblr_pwjrl2fhsb1tawgedo2_400.gif');
				  // channel.send('DD stuck in bag! DD need help!!!');
				  // break;
				// case 13:
				  // await interaction.reply('https://64.media.tumblr.com/1a79477316206b330194910732dd5fbc/tumblr_pz304lGpKp1tawgedo1_400.gif');
				  // channel.send('DD not fit! :(');
				  // break;
				// case 14:
				  // await interaction.reply('https://i.pinimg.com/originals/52/a1/f8/52a1f8a7a4fb5da72c85b5a19574b207.gif');
				  // channel.send('DD watch up!');
				  // break;
				// case 15:
				  // await interaction.reply('https://i.pinimg.com/originals/87/a5/1a/87a51a7204e08a16948912c717e53cde.gif');
				  // channel.send('DD sleep! DD wake up!');
				  // break;
				// case 16:
				  // await interaction.reply('https://64.media.tumblr.com/87f3971eb16694666a9fd15369a63a77/tumblr_pyd3rbBAUT1tawgedo1_540.gif');
				  // channel.send('DD do tired meow!');
				  // break;
				// case 17:
				  // await interaction.reply('https://pbs.twimg.com/media/EeKx1LYX0AMYxC3.jpg');
				  // channel.send('DD with CoCo now!');
				  // break;
				// case 18:
				  // await interaction.reply('https://img.wattpad.com/f0ec18c74a59ca378de60a8bb96b55765ba837c5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f455a495a7a685f7032712d5166413d3d2d3736383936333039392e313562386137356532376534333361613939383630313637303434332e6a7067?s=fit&w=720&h=720');
				  // channel.send('DD be a fluffy boi!');
				  // break;
				// case 19:
				  // await interaction.reply('https://i.pinimg.com/originals/dc/7d/26/dc7d26f2f58da472f754712bfe4f9125.jpg');
				  // channel.send('DD like watching outdoor life!');
				  // break;
				// case 20:
				  // await interaction.reply('https://i.pinimg.com/736x/f8/f9/43/f8f9435d2282ed66873a2205429fe942.jpg');
				  // channel.send('DD try to sleep! :sleeping:');
				  // break;
			// }
		// } else if (commandName == 'tt') {
			// switch (mathRandomInt(1, 11)) {
				// case 1:
				  // await interaction.reply('https://i.pinimg.com/originals/b3/c2/fe/b3c2fee19c02164404d7d19d02b5bd4f.jpg');
				  // channel.send('Pray to my magesty! :crown: :pray:');
				  // break;
				// case 2:
				  // await interaction.reply('https://64.media.tumblr.com/2ecf6bc7e87df8035867e68a279f6ef2/7b475bf1e8afe9f2-57/s400x600/f06d502c1bb6e5ea28e965d70046c16c0bf830ca.gif');
				  // channel.send('Cleaning myself to be pretty! :crown:');
				  // break;
				// case 3:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/c/c9/ANGERY_TT.jpg/revision/latest/scale-to-width-down/250?cb=20210512230151');
				  // channel.send('Look at my eyes and rethink your actions!');
				  // break;
				// case 4:
				  // await interaction.reply('https://i.pinimg.com/originals/69/c2/e3/69c2e3fbeac4451748d9ca723656f281.jpg');
				  // channel.send('Pretty queen since a baby!');
				  // break;
				// case 5:
				  // await interaction.reply('https://i.redd.it/ew1nivye5nz41.jpg');
				  // channel.send('My witch-self!');
				  // break;
				// case 6:
				  // await interaction.reply('https://64.media.tumblr.com/d30dddc60443392b7b1bdb4f08169d34/70a8e5c78a490ba1-74/s400x600/dbae54d0ea0c6252db77f9b9fc38eb6d33c528b7.gif');
				  // channel.send('Rolling on the floor!');
				  // break;
				// case 7:
				  // await interaction.reply('https://i.pinimg.com/originals/5f/94/f5/5f94f54ac30be56dc9f8311f10c1195d.jpg');
				  // channel.send('Ooh! What is that?!');
				  // break;
				// case 8:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/e/ed/Screenshot_20210604-114708_Chrome.jpg/revision/latest/scale-to-width-down/250?cb=20210604094911');
				  // channel.send('My face is looking fluffier with this scarf! Do you like it?');
				  // break;
				// case 9:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/1/15/991f0ead6ce310c84667d220ee62233d.jpg/revision/latest/scale-to-width-down/250?cb=20210426181353');
				  // channel.send('AAAAAAAAAAAAAAAA!!! :angry:');
				  // break;
				// case 10:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/3/3d/Nana_and_TT%2C_sleeping_together.jpg/revision/latest/scale-to-width-down/250?cb=20210506065433');
				  // channel.send('NaNa makes really good company!');
				  // break;
				// case 11:
				  // await interaction.reply('https://preview.redd.it/mwu88eqe3pu51.jpg?width=1080&format=pjpg&auto=webp&s=05e0cd7d0b6a730d4fdef7f2274e280c1455c960');
				  // channel.send('My eyes are the key to the success of my master plan! :smirk_cat:');
				  // break;
			// }
		// } else if (commandName == 'coco') {
			// switch (mathRandomInt(1, 10)) {
				// case 1:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/6/6b/E9D2ED11-369A-469D-81D8-C02777DD4EC1.jpeg/revision/latest/scale-to-width-down/250?cb=20190909022510');
				  // channel.send('Am i the bread cat now?');
				  // break;
				// case 2:
				  // await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflP5kHCU7YoZKpyHplufPPJmnTFW3TsBfog&usqp=CAU');
				  // channel.send('I really looked like LaLa when I was a baby.');
				  // break;
				// case 3:
				  // await interaction.reply('https://i.pinimg.com/originals/1a/81/b9/1a81b906ff5c0f3fd8c85e3eb95c87a6.png');
				  // channel.send('Oh... bad grades again, DD?! :(');
				  // break;
				// case 4:
				  // await interaction.reply('https://i.redd.it/fy9vz30sy9h11.jpg');
				  // channel.send('This is disgusting and doesn\'t have the amount of nutrition i need on a daily basis!');
				  // break;
				// case 5:
				  // await interaction.reply('https://64.media.tumblr.com/1933260a3c82199431032b9ae61bdeda/d3ffc5987846537e-5c/s1280x1920/1239fe903fdad2eef831c8a66a12ea3b64b4945f.jpg');
				  // channel.send('I\'m ready for my science conference!');
				  // break;
				// case 6:
				  // await interaction.reply('https://64.media.tumblr.com/7752591ad3a2b7536f4ce7190308e6bf/tumblr_py9bp82bg11tawgedo1_400.gif');
				  // channel.send('Ooh! That is interesting!');
				  // break;
				// case 7:
				  // await interaction.reply('https://i.pinimg.com/originals/bc/ab/d8/bcabd85a1e3d9266ebee97e85bc2123c.jpg');
				  // channel.send('I almost crashed myself on that sign! Why is it in the middle of nowhere?!');
				  // break;
				// case 8:
				  // await interaction.reply('https://i.pinimg.com/originals/09/5d/d6/095dd6d2092351d1cbc3a3014dac8c49.gif');
				  // channel.send(':wink:');
				  // break;
				// case 9:
				  // await interaction.reply('https://64.media.tumblr.com/c628cae907af7380a62d7dcb522ce213/tumblr_pv96rdRbnk1tawgedo2_540.gif');
				  // channel.send('Just how I taught you, human!');
				  // break;
				// case 10:
				  // await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7loCGKSux8thnzjDqByvuthRO51J5_uaCw&usqp=CAU');
				  // channel.send('That is so scary! :fearful:');
				  // break;
			// }
		// } else if (commandName == 'momo') {
			// switch (mathRandomInt(1, 5)) {
				// case 1:
				  // await interaction.reply('https://i.redd.it/sqqwpocyn4541.jpg');
				  // channel.send('Waiting for my bumpats...');
				  // break;
				// case 2:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/b/b3/Momo%27s_STAMINNNNNNNAAAA.png/revision/latest/scale-to-width-down/250?cb=20210420154537');
				  // channel.send('What do you mean?');
				  // break;
				// case 3:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/7/71/Momorollingover.gif/revision/latest/scale-to-width-down/250?cb=20210405193633');
				  // channel.send('Watch and learn, kid!');
				  // break;
				// case 4:
				  // await interaction.reply('https://i1.wp.com/petcareplus.net/wp-content/uploads/2019/12/1577810731_maxresdefault.jpg');
				  // channel.send('Don\'t be so scared, LuLu! I\'m here to ask if you wanna try out my new invention.');
				  // break;
				// case 5:
				  // await interaction.reply('https://64.media.tumblr.com/256ec03e9fe4ce021bdadd2f2e3638d5/d6e23038d8c0ee65-7a/s540x810/cf6c70c21166087f825047a7ff26128a02017c57.gif');
				  // channel.send('Dreaming about bumpats... :sleeping:');
				  // break;
			// }
		// } else if (commandName == 'lala') {
			// switch (mathRandomInt(1, 6)) {
				// case 1:
				  // await interaction.reply('https://i.redd.it/34njnf8udxb31.jpg');
				  // channel.send('Mya Mya?! (Nyam Nyam?!)');
				  // break;
				// case 2:
				  // await interaction.reply('https://64.media.tumblr.com/04f0592d95f4348c5e4557927285b1b8/tumblr_pspevbtSsm1tawgedo3_r1_540.gif');
				  // channel.send('Mya! :smiling_face_with_3_hearts:');
				  // break;
				// case 3:
				  // await interaction.reply('https://media1.tenor.com/images/7c7ca797f7f0af3951b6d844a71a8aee/tenor.gif?itemid=19584463');
				  // channel.send('Mya Myah! (Treats!)');
				  // break;
				// case 4:
				  // await interaction.reply('https://64.media.tumblr.com/5b61dc564a830b3d2d5510b99402fa38/e36f6210ac6b9924-b0/s540x810/2260d767ec3bd925544b485e812021d1d092303f.gif');
				  // channel.send('Mya Myah Myah, Mya! (You are also very fluffy, DD!)');
				  // break;
				// case 5:
				  // await interaction.reply('https://i.pinimg.com/originals/54/d0/07/54d0075025c2848a0af25d08498a0516.jpg');
				  // channel.send('Myah Myah Mya! :white_heart: (The two clouds in the house!)');
				  // break;
				// case 6:
				  // await interaction.reply('https://64.media.tumblr.com/c90007d4ff46c7f0c8d0ea2a3a0add38/347f60d2b814d896-4d/s540x810/5005fae1cb6682b5995546a323572958105fea92.jpg');
				  // channel.send('Myah Mya Mya! (Doing my exercise!)');
				  // break;
			// }
		// } else if (commandName == 'chuchu') {
			// switch (mathRandomInt(1, 9)) {
				// case 1:
				  // await interaction.reply('https://i.pinimg.com/originals/25/b5/c1/25b5c1f2eb3046a1b54846a44c96f08b.jpg');
				  // channel.send('Chu... (I\'m bored...)');
				  // break;
				// case 2:
				  // await interaction.reply('https://i.pinimg.com/originals/35/35/7a/35357a4ee88ee4c00756d3a7c177aadb.jpg');
				  // channel.send('Chu Chu? (What\'s the matter?)');
				  // break;
				// case 3:
				  // await interaction.reply('https://i.pinimg.com/736x/e6/8f/73/e68f73a049eaa7dc82d177332d173ecc.jpg');
				  // channel.send('Chuu Chu! (Got it!)');
				  // break;
				// case 4:
				  // await interaction.reply('https://64.media.tumblr.com/93c9a497af94efa56ce2a4d68d764cee/989ac97d0b524b3d-0c/s400x600/12b257f000d2b39d7acb24eb0c9510d1282ff095.jpg');
				  // channel.send('Chu Chuu Chu? (How are you?)');
				  // break;
				// case 5:
				  // await interaction.reply('https://64.media.tumblr.com/bed2b21d65d35f7614ecdff36f48ef77/919370320019b17d-13/s500x750/cc2862749c663219c5f984bde97eb7f21922cf27.gif');
				  // channel.send('Chuu Chuu Chu! (Thanks for the grooming service, LuLu!)');
				  // break;
				// case 6:
				  // await interaction.reply('https://64.media.tumblr.com/461e8bdfefb4cd4701c981061674c37a/4a283547d7216dc8-af/s540x810/935b19d383d22b4c064fc5ed3c036cb7916d8184.gif');
				  // channel.send('Chu Chu Chuu Chu! (These keyboards are really comfy for rolling!)');
				  // break;
				// case 7:
				  // await interaction.reply('https://i.pinimg.com/originals/bd/22/db/bd22db35bbca4850df0bbe41db16457b.jpg');
				  // channel.send('Chu Chuu? (What is there, LuLu?)');
				  // break;
				// case 8:
				  // await interaction.reply('https://64.media.tumblr.com/6a7072b4bcebee61d21c86bfd3477d0b/fc3af0939baf9a4c-43/s640x960/2eebb8813c7d0b5f44fdbb7ef6d54fbd6f52577d.jpg');
				  // channel.send('Chuu Chu Chu! (I\'m getting ready to sleep!)');
				  // break;
				// case 9:
				  // await interaction.reply('https://64.media.tumblr.com/1bbcd364b0db00e5ea89ad970c7ba932/79ed67d66e297f28-60/s480x381/986901080673c37a0112681d06ec1d0f36a8cd38.gif');
				  // channel.send('Chuu Chuu! (This is fun!)');
				  // break;
			// }
		// } else if (commandName == 'lulu') {
			// switch (mathRandomInt(1, 15)) {
				// case 1:
				  // await interaction.reply('https://i.pinimg.com/736x/b3/b0/3a/b3b03a3bbeabaf29b21c8509ba5d620d.jpg');
				  // channel.send('Baby me yawning! :yawning_face:');
				  // break;
				// case 2:
				  // await interaction.reply('https://i.pinimg.com/originals/42/9e/ac/429eacc05944f60cc0fdc799e530b3a9.jpg');
				  // channel.send('Snacks, please!!! :pleading_face:');
				  // break;
				// case 3:
				  // await interaction.reply('https://i.pinimg.com/736x/c5/fe/a1/c5fea1116879443735adb120a1ce0b02.jpg');
				  // channel.send('???');
				  // break;
				// case 4:
				  // await interaction.reply('https://preview.redd.it/5o75ofausdp41.png?auto=webp&s=464f164d73f0cb59c238b7163252341a0150dfc2');
				  // channel.send('Is this snacks?');
				  // break;
				// case 5:
				  // await interaction.reply('https://64.media.tumblr.com/1c6e200a4ceb9ec8969d096a944fc386/307ac732f38adb90-0b/s400x600/a2eabf2a6ff0008e5aa2049553291e1321730d1a.gif');
				  // channel.send('So comfy! :relieved:');
				  // break;
				// case 6:
				  // await interaction.reply('https://i.pinimg.com/originals/28/ac/30/28ac30e3390c583875562c63e1a0a168.gif');
				  // channel.send('Nooo, let me go!');
				  // break;
				// case 7:
				  // await interaction.reply('https://64.media.tumblr.com/ff558d2331fff4e5b33618a3920a31de/9431e0f5a242ec63-7c/s500x750/481abf02b9dece7d70b72c81c6cd23779fd6d9d4.gif');
				  // channel.send('I\'m ready for those snacks! :grinning:');
				  // break;
				// case 8:
				  // await interaction.reply('https://64.media.tumblr.com/3ebf2140e2f7f9f55cd07c6158d83d12/a7b9344d89a85796-72/s400x600/957a6862034642ea60315af76bc176c0bed7a8d0.gif');
				  // channel.send('My fluffiness reveals with every brush!');
				  // break;
				// case 9:
				  // await interaction.reply('https://i.imgur.com/7NlW7kh.jpeg');
				  // channel.send(':sleeping:');
				  // break;
				// case 10:
				  // await interaction.reply('https://static.tvtropes.org/pmwiki/pub/images/d3324157_1ad1_4b4f_b67a_ec0a5d33a4c2.png');
				  // channel.send('Look at my eyes!');
				  // break;
				// case 11:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/7/7c/Claireluvcatblackcatmask.png/revision/latest?cb=20210426151347');
				  // channel.send('Who is disturbing me?');
				  // break;
				// case 12:
				  // await interaction.reply('https://i.redd.it/rkiwamx2mo451.jpg');
				  // channel.send('I\'m just going for snacks and become a meme... :confused:');
				  // break;
				// case 13:
				  // await interaction.reply('https://i.pinimg.com/originals/d5/60/5a/d5605a0fcda8ce1b07d39780f1652427.jpg');
				  // channel.send('What\'s the matter?');
				  // break;
				// case 14:
				  // await interaction.reply('https://tenor.com/view/lulu-creamheroes-gato-lazy-cat-gif-18261060');
				  // channel.send('Just being my cute-self...');
				  // break;
				// case 15:
				  // await interaction.reply('https://i.pinimg.com/originals/a2/8e/62/a28e629540b2aa8822fd3a02ff9e82cd.jpg');
				  // channel.send('Who\'s that adorable kitty? :heart_eyes:');
				  // break;
			// }
		// } else if (commandName == 'nana') {
			// switch (mathRandomInt(1, 7)) {
				// case 1:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/a/a7/Screenshot_2021-04-12_6.58.44_PM.png/revision/latest/scale-to-width-down/250?cb=20210414015851');
				  // channel.send('Me and TT! :heart:');
				  // break;
				// case 2:
				  // await interaction.reply('https://static.tumbex.com/64.media.tumblr.com/tumblr_ql3vi4aWQj1yo2r19_smart1.jpg');
				  // channel.send('Doing as you say, Mommy!');
				  // break;
				// case 3:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/6/61/Nana_with_Lala_in_a_bag.jpg/revision/latest/scale-to-width-down/250?cb=20210502055247');
				  // channel.send('Bored with LaLa...');
				  // break;
				// case 4:
				  // await interaction.reply('https://i.pinimg.com/236x/7b/04/de/7b04de0de0de3b0061537115d7c9ff02.jpg');
				  // channel.send(':exploding_head:');
				  // break;
				// case 5:
				  // await interaction.reply('https://i.pinimg.com/originals/b4/b4/e5/b4b4e55a9846580c6c172b67c3ac9e93.jpg');
				  // channel.send('Now I know why MoMo enjoys this so much! It\'s comfy!');
				  // break;
				// case 6:
				  // await interaction.reply('https://64.media.tumblr.com/adb083211ca2210fe7767f9145e4172a/c0d90a5735544f5b-0a/s540x810/69d50e0de76243aec735c00dbc1ff65f1ee85dea.gif');
				  // channel.send('Eat, kids! Just like that!');
				  // break;
				// case 7:
				  // await interaction.reply('https://i.redd.it/lpafagcggrf61.jpg');
				  // channel.send('How well did I do, LuLu?');
				  // break;
			// }
		// } else if (commandName == 'toto') {
			// switch (mathRandomInt(1, 6)) {
				// case 1:
				  // await interaction.reply('https://i.redd.it/5ac06tyrw2j51.jpg');
				  // channel.send('Sleeping with DoDo! :sleeping:');
				  // break;
				// case 2:
				  // await interaction.reply('https://pbs.twimg.com/media/EfsXRcSU0AEO0If.jpg');
				  // channel.send('Me and DoDo as babies! :heart:');
				  // break;
				// case 3:
				  // await interaction.reply('https://64.media.tumblr.com/b61977dea58d52827f493a404bd722ba/9d100b6579f9911a-34/s540x810/8eb14a97ebc931dbf417787bd64e7ddd161a81f4.gif');
				  // channel.send('Wow! Interesting!');
				  // break;
				// case 4:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/c/c1/Brothersinarms.png/revision/latest/scale-to-width-down/250?cb=20210514171053');
				  // channel.send('I know this trick, too!');
				  // break;
				// case 5:
				  // await interaction.reply('https://i.redd.it/dn23vapx2tp61.jpg');
				  // channel.send('Fighting with DoDo while LuLu\'s sleeping is fun!');
				  // break;
				// case 6:
				  // await interaction.reply('https://static.wikia.nocookie.net/creamheroes/images/f/f8/162280208_284655846580386_7537551732297225164_n.jpg/revision/latest/scale-to-width-down/250?cb=20210502113237');
				  // channel.send('I really like DoDo and LuLu company!');
				  // break;
			// }
		// } else if (commandName == 'dodo') {
			// switch (mathRandomInt(1, 6)) {
				// case 1:
				  // await interaction.reply('https://64.media.tumblr.com/cc8fbe1cc7a6f4aa7535b4cb24b362c6/b9090ccbe643b650-42/s250x400/bc14a4c6abd4a5a490bf4183a900e68eb1b49066.png');
				  // channel.send('Snacks?!');
				  // break;
				// case 2:
				  // await interaction.reply('https://64.media.tumblr.com/340826d38ee6a9609d108184d46beb97/f0293ca60f8d60bd-60/s250x400/cb0599b4c6be2c5793cc4843624a9f13621f7fbc.gif');
				  // channel.send('I\'m brave when it comes to any food leftovers!');
				  // break;
				// case 3:
				  // await interaction.reply('https://64.media.tumblr.com/dd7fb6913e9b6d8b8021d04c349a6e79/8c8097fff3b1d891-fa/s400x600/c30f3a69609e313d471aefd0cc9b9df27ea0fd46.jpg');
				  // channel.send('Baby me and LuLu! :heart:');
				  // break;
				// case 4:
				  // await interaction.reply('https://64.media.tumblr.com/a60992575fe0a789901a9ded4536967f/9b5067ac2a8b60cd-85/s250x400/bf9f8b17eaeaccd449b3cea0e9772e71e61d9a99.png');
				  // channel.send(':face_with_raised_eyebrow:');
				  // break;
				// case 5:
				  // await interaction.reply('https://64.media.tumblr.com/a1da164eef6dc91dceb2bbcb659c7100/71700310daf547a8-90/s250x400/786bff686751247ae34f6aaf47cdb4f96870a946.gif');
				  // channel.send('We both learned how to do this now!');
				  // break;
				// case 6:
				  // await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXpzT2pjY2UDb0UC7uRA0tFcILCRlqhf4TBseUh_BF6l5DRyP8cedzEMDy067cXa2kvU&usqp=CAU');
				  // channel.send('Am I looking good with this?');
				  // break;
			// }
		// } else if (commandName == 'cookforkitties') {
			// switch (mathRandomInt(1, 5)) {
				// case 1:
				// await interaction.reply({ content: 'Let\'s make a delicious **Kitty Breakfast**!',
				  // components: [new MessageActionRow().addComponents(new MessageButton()
					// .setLabel('View original recipe')
					// .setStyle('LINK')
					// .setURL('https://www.thesprucepets.com/homemade-cat-food-recipes-551946#kitty-breakfast'))
				  // ]
				// });
				// channel.send('**Ingredients:**');
				// var ingredientOrder = shuffleAllNumsTo(4);
				
				// while (ingredientOrder.length !== 0) {
					// switch (ingredientOrder[0]) {
						// case 1:
						  // channel.send({ content: '• 1 tablespoon nonfat dry milk',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing1_1').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 2:
						  // channel.send({ content: '• 3 medium eggs',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing1_2').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 3:
						  // channel.send({ content: '• 3 tablespoons cottage cheese',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing1_3').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 4:
						  // channel.send({ content: '• 2 tablespoons grated veggies',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing1_4').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
					// }
					// ingredientOrder.shift();
				// }
				  // break;
				// case 2:
				// await interaction.reply({ content: 'Let\'s make the delicious **Almost-Spot\'s Stew**!',
				  // components: [new MessageActionRow().addComponents(new MessageButton()
					// .setLabel('View original recipe')
					// .setStyle('LINK')
					// .setURL('https://www.thesprucepets.com/homemade-cat-food-recipes-551946#almost-spots-stew'))
				  // ]
				// });
				// channel.send('**Ingredients:**');
				// var ingredientOrder = shuffleAllNumsTo(8);
				
				// while (ingredientOrder.length !== 0) {
					// switch (ingredientOrder[0]) {
						// case 1:
						  // channel.send({ content: '• 1 whole chicken',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_1').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 2:
						  // channel.send({ content: '• 2 cups brown rice',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_2').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 3:
						  // channel.send({ content: '• 6 stalks celery',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_3').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 4:
						  // channel.send({ content: '• 8 carrots (scrubbed but not peeled)',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_4').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 5:
						  // channel.send({ content: '• 2 or 3 yellow squash',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_5').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 6:
						  // channel.send({ content: '• 2 or 3 zucchini',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_6').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 7:
						  // channel.send({ content: '• 1 small broccoli crown',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_7').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 8:
						  // channel.send({ content: '• Handful of green beans',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing2_8').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
					// }
					// ingredientOrder.shift();
				// }
				  // break;
				// case 3:
				// await interaction.reply({ content: 'Let\'s make some delicious **Raw Chicken Liver And Salmon**!',
				  // components: [new MessageActionRow().addComponents(new MessageButton()
					// .setLabel('View original recipe')
					// .setStyle('LINK')
					// .setURL('https://shopee.sg/blog/easy-homemade-dog-cat-food-recipes/#attachment_37894'))
				  // ]
				// });
				// channel.send('**Ingredients:**');
				// var ingredientOrder = shuffleAllNumsTo(7);
				
				// while (ingredientOrder.length !== 0) {
					// switch (ingredientOrder[0]) {
						// case 1:
						  // channel.send({ content: '• 50g raw chicken liver',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_1').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 2:
						  // channel.send({ content: '• 50g raw beef kidney',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_2').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 3:
						  // channel.send({ content: '• 2 cups water',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_3').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 4:
						  // channel.send({ content: '• 100g raw chicken heart',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_4').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 5:
						  // channel.send({ content: '• 700g raw chicken wings with bones and skin',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_5').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 6:
						  // channel.send({ content: '• 100g raw salmon with bones',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_6').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 7:
						  // channel.send({ content: '• 1 tsp taurine supplement powder',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing3_7').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
					// }
					// ingredientOrder.shift();
				// }
				  // break;
				// case 4:
				// await interaction.reply({ content: 'Let\'s make a delicious **Grain-Free Meatloaf**!',
				  // components: [new MessageActionRow().addComponents(new MessageButton()
					// .setLabel('View original recipe')
					// .setStyle('LINK')
					// .setURL('https://shopee.sg/blog/easy-homemade-dog-cat-food-recipes/#attachment_37893'))
				  // ]
				// });
				// channel.send('**Ingredients:**');
				// var ingredientOrder = shuffleAllNumsTo(8);
				
				// while (ingredientOrder.length !== 0) {
					// switch (ingredientOrder[0]) {
						// case 1:
						  // channel.send({ content: '• 1kg organic ground beef, 90% lean',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_1').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 2:
						  // channel.send({ content: '• 1kg organic ground turkey thighs (skinless and boneless)',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_2').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 3:
						  // channel.send({ content: '• 115g organic squash meat',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_3').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 4:
						  // channel.send({ content: '• 60g organic mixed berries',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_4').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 5:
						  // channel.send({ content: '• 60g organic broccoli',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_5').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 6:
						  // channel.send({ content: '• 2 cans sardines in water',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_6').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 7:
						  // channel.send({ content: '• 60g organic kale',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_7').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 8:
						  // channel.send({ content: '• 1kg organic mixed chicken organs, ground',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing4_8').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
					// }
					// ingredientOrder.shift();
				// }
				  // break;
				// case 5:
				// await interaction.reply({ content: 'Let\'s make some tasty **Tuna And Catnip Treats**!',
				  // components: [new MessageActionRow().addComponents(new MessageButton()
					// .setLabel('View original recipe (scroll down on the page)')
					// .setStyle('LINK')
					// .setURL('https://shopee.sg/blog/easy-homemade-dog-cat-food-recipes/#attachment_37892'))
				  // ]
				// });
				// channel.send('**Ingredients:**');
				// var ingredientOrder = shuffleAllNumsTo(4);
				
				// while (ingredientOrder.length !== 0) {
					// switch (ingredientOrder[0]) {
						// case 1:
						  // channel.send({ content: '• 1 large egg',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing5_1').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 2:
						  // channel.send({ content: '• A can of tuna in water, flaked',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing5_2').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 3:
						  // channel.send({ content: '• 1 cup of all-purpose flour',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing5_3').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
						// case 4:
						  // channel.send({ content: '• 1 tbsp dried catnip',
							// components: [new MessageActionRow().addComponents(new MessageButton().setCustomId('ing5_4').setLabel('Give!').setStyle('PRIMARY'))]
						  // });
						  // break;
					// }
					// ingredientOrder.shift();
				// }
				  // break;
			// }
		// } else if (commandName == 'feedkitties') {
			// const meal = interaction.options.getString('meal');
			// const randomInt = mathRandomInt(1, 7);
			// await interaction.reply(`Serving ${meal} to the kitties!`);
			
			// switch (randomInt) {
				// //Image responses
				// case 1:
				  // await interaction.followUp('https://imgur.com/2ZTKwPm');
				  // break;
				// case 2:
				  // await interaction.followUp('https://imgur.com/FCpkecS');
				  // break;
				// case 3:
				  // await interaction.followUp('https://imgur.com/gsZctnS');
				  // break;
				// case 4:
				  // await interaction.followUp('https://imgur.com/BQYx32v');
				  // break;
				// case 5:
				  // await interaction.followUp('https://imgur.com/9Mmi1Ox');
				  // break;
				// case 6:
				  // await interaction.followUp('https://imgur.com/5KvwdQp');
				  // break;
				// case 7:
				  // //Bad cases
				  // switch (mathRandomInt(1, 4)) {
					  // case 1:
					    // await interaction.followUp('LuLu stole the meal before you could give some to any of the other kitties. Try feeding the kitties again!');
						// channel.send('https://imgur.com/owsY9MG');
						// channel.send('https://imgur.com/jZXSewC');
					    // break;
					  // case 2:
					    // await interaction.followUp('LuLu and DoDo stole the meal before you could give some to any of the other kitties. Try feeding the kitties again!');
					    // break;
					  // case 3:
					    // await interaction.followUp('Claire tried taking a photo of the kitties with the meal in front of them, but the meal fell onto the floor after LuLu pushed it towards himself. Try feeding the kitties again!');
					    // break;
					  // case 4:
					    // await interaction.followUp('No kitties were hungry, except for LuLu and DoDo. Try feeding the kitties again later!');
					    // break;
				  // }
				  // break;
			// }
			
			// //Additional messages if the meal was eaten by the kitties
			// if (randomInt !== 7) {
				// switch (mathRandomInt(1, 8)) {
					// case 1:
					  // channel.send(`The ${meal} was a great hit!`);
					  // break;
					// case 2:
					  // channel.send('The kitties loved the meal, washed themselves after they finished and got to sleep!');
					  // break;
					// case 3:
					  // channel.send('LuLu and DoDo want more, so they go to steal from the other kitties around them.');
					  // break;
					// case 4:
					  // channel.send('It was that good that some of the kitties will always hang around when you make it again!');
					  // break;
					// case 5:
					  // channel.send('All 10 kitties loved the meal!');
					  // break;
					// case 6:
					  // channel.send(`The kitty pirates will always be sure to know if the ${meal} is around!`);
					  // break;
					// case 7:
					  // channel.send('Everyone was sure this is gonna be good by smelling it from earlier!');
					  // break;
					// case 8:
					  // channel.send('All 10 kitties loved the meal!');
					  // break;
				// }
				
				// //Rare messages
				// switch (mathRandomInt(1, 100)) {
					// case 55:
					  // channel.send('"DD like bread and chicken. DD not eat this."');
					  // break;
					// case 85:
					  // channel.send('It didn\'t have enough nutrition for CoCo! (or he was just being a picky eater as always :thinking:)');
					  // break;
					// case 95:
					  // channel.send(`The kitties didn't really like the ${meal} this time. Try cooking and feeding them something else or cook the ${meal} again (the ${meal} may be better the other time)!`);
					  // break;
				// }
			// }
		// } else if (commandName == 'playwithkitties') {
		// switch (mathRandomInt(1, 12)) {
			// case 1:
			  // await interaction.reply('https://tenor.com/view/kittisaurus-shock-jumpscare-tt-car-gif-18438797');
			  // channel.reply('AAAAAH!');
			  // break;
			// case 2:
			  // await interaction.reply('https://tenor.com/view/creamheroes-lulu-cat-claireluvcat-kittisaurus-gif-18183006');
			  // channel.reply('I must catch it!');
			  // break;
			// case 3:
			  // await interaction.reply('https://tenor.com/view/kittisaurus-you-win-let-it-go-lulu-tiger-gif-18353037');
			  // channel.reply('I need to catch the target!!!');
			  // break;
			// case 4:
			  // await interaction.reply('https://tenor.com/view/kittisaurus-focus-jump-catch-lulu-gif-18353028');
			  // channel.reply('Focus. Lump. Catch!');
			  // break;
			// case 5:
			  // await interaction.reply('https://tenor.com/view/kittisaurus-lulu-slap-flying-rawr-gif-18233147');
			  // channel.reply('Sooo close!');
			  // break;
			// case 6:
			  // await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888387261668950016/tumblr_d9bc6a359587a78c7209f5edc11fa193_7bf1a0c1_400.gif');
			  // channel.reply('I love this! Continue, human!');
			  // break;
			// case 7:
			  // await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888387108279033856/tumblr_c7fe9cf7ef370038185461b13c4d1839_1af780be_250.gif');
			  // channel.reply('Nooo! What is this thing I\'m wrapped in?!');
			  // break;
			// case 8:
			  // await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888386975663534111/tumblr_b55aa54fecc1f301fa954cb700a58419_14a197e2_400.gif');
			  // channel.reply('Let go!!!');
			  // break;
			// case 9:
			  // await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888386753554182214/tumblr_a28709ea80d4b1bb4b4bc64b3d7d5908_088a9ee0_250.gif');
			  // channel.reply('Finally free!');
			  // break;
			// case 10:
			  // await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888386627527913482/tumblr_9d32ee1241be20fbfc1ef889f155c426_3e3e877b_500.gif');
			  // channel.reply('Why am I not catching it?!?!');
			  // break;
			// case 11:
			  // await interaction.reply('https://media.discordapp.net/attachments/750024635541749842/888386481863921724/tenor.gif');
			  // channel.reply('Guess it\'s the rolling strat again!');
			  // break;
			// case 12:
			  // await interaction.reply('https://tenor.com/view/lulu-creamheroes-amelinth-gato-kittisaurus-gif-18261043');
			  // channel.reply('On my way to catch the target once and for all!');
			  // break;
		// }
		// } else if (commandName == 'sleepykitties') {
			// switch (mathRandomInt(1, 6)) {
				// case 1:
				  // await interaction.reply('https://i.redd.it/ijqil3v4jun51.jpg');
				  // channel.send('Sleeping and waiting for snacks...');
				  // break;
				// case 2:
				  // await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGt744lah-CQLzRP2Hpx_g23zL0B4LCtynXQ&usqp=CAU');
				  // channel.send('It\'s sooo comfy here! :sleeping:');
				  // break;
				// case 3:
				  // await interaction.reply('https://i.ytimg.com/vi/OjrMGBaux80/maxresdefault.jpg');
				  // channel.send('Stop this, ToTo!');
				  // break;
				// case 4:
				  // await interaction.reply('https://tenor.com/view/kittisaurus-creamheroes-cat-gif-18622786');
				  // channel.send('A real queen needs her long daily sleeping session!');
				  // break;
				// case 5:
				  // await interaction.reply('https://tenor.com/view/kittisaurus-creamheroes-cat-gif-18622794');
				  // channel.send('Shaking won\'t do anything. I\'ll still continue my beauty sleep!');
				  // break;
				// case 6:
				  // await interaction.reply('https://tenor.com/view/lulu-cabinet-creamheroes-kittisaurus-feline-gif-17850226');
				  // channel.send('Leave me alone, it\'s really chill here!');
				  // break;
			// }
		// } else if (commandName == 'snackstealcheck') {
			// switch (mathRandomInt(1, 10)) {
				// case 1:
				  // await interaction.reply('https://i.ytimg.com/vi/dWAZTqRdEDA/maxresdefault.jpg');
				  // channel.send('Coco: "They never learn..."');
				  // break;
				// case 2:
				  // await interaction.reply('https://pbs.twimg.com/media/EePOXyrWsAATRtO.jpg');
				  // channel.send('Food for me! :yum:');
				  // break;
				// case 3:
				  // await interaction.reply('https://i.ytimg.com/vi/kdLGYHliJX8/mqdefault.jpg');
				  // channel.send('My new strat: Begging! :pleading_face:');
				  // break;
				// case 4:
				  // await interaction.reply('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlU41v7Gw31-GlZivjReGZT67tknywFcdPpg&usqp=CAU');
				  // channel.send('What a fail! :cry:');
				  // break;
				// case 5:
				  // await interaction.reply('https://i.ytimg.com/vi/talVwlGDqM4/maxresdefault.jpg');
				  // channel.send('Let me steal eggs at least, Claire!');
				  // break;
				// case 6:
				  // await interaction.reply('https://i.ytimg.com/vi/kVGSre_8VHw/maxresdefault.jpg');
				  // channel.send('DoDo! I found some snacks!');
				  // await interaction.followUp('https://preview.redd.it/zreiebwfo6g51.jpg?width=2400&format=pjpg&auto=webp&s=9458b950f25b9a2eb2695ec8d2f042c6c0a302f2');
				  // channel.send('I\'m coming, boss!');
				  // break;
				// case 7:
				  // await interaction.reply('https://i.ytimg.com/vi/LW7FYN0NJOg/mqdefault.jpg');
				  // channel.send('Another day, another trap! :frowning:');
				  // break;
				// case 8:
				  // await interaction.reply('https://i.ytimg.com/vi/6QCwbfSC_9c/maxresdefault.jpg');
				  // channel.send('The snacks are only mine!!!');
				  // break;
				// case 9:
				  // await interaction.reply('https://i.ytimg.com/vi/U0SzdZ5AYds/maxresdefault.jpg');
				  // channel.send('Please!!! :pleading_face:');
				  // break;
				// case 10:
				  // await interaction.reply('https://i.ytimg.com/vi/1jWybIO6eqA/maxresdefault.jpg');
				  // channel.send('Got it!');
				  // break;
			// }
		// }
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