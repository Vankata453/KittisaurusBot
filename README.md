# KittisaurusBot

A Discord bot that allows users to have fun with pictures and quotes of the 10 Kittisaurus cats + more! 

# How do I use it?

There are two ways by which you can use KittisaurusBot:

1. This is the most simple (and recommended for regular users) way. You can 
[invite KittisaurusBot to your server](https://discord.com/api/oauth2/authorize?client_id=872160903175503912&permissions=0&scope=bot%20applications.commands) 
or join an existing one that features it!
2. You can set up the bot to work on your own Discord Bot application. (**Only recommended if you are making changes to the bot!**)

### Setting up the bot

1. Make sure you have your [Discord Application](https://discord.com/developers/applications) created with an initialized bot.
2. Install Node.js version **16.6 or higher** on your desired host (if you don't have it already).
3. Clone (or download) the repository.
4. Create a `.env` file and paste in the following:
```
DISCORD_TOKEN={your-bot-token}
CLIENT_ID={your-bots-client-id}
```
5. Run `npm install` to install the needed libraries for the bot.
6. Run `node deploy-commands.js` to deploy the bot's commands.
7. Execute `npm start` (or `node bot.js`) to run the bot.

After you make changes to the bot, terminate the running bot process (`Ctrl+C`) and start the bot again (`npm start` or `node bot.js`).

# Commands

A list of all currently supported commands by KittisaurusBot.

`/help`
* Shows an embed featuring all bot commands (+ contribution and feedback information).

`/{cat}`
* Shows a picture of a specified Kittisaurus cat with a quote.

`/cookforkitties`
* Cooks a meal for the kitties to enjoy.

`/feedkitties {meal}`
* Feeds the kitties a certain meal (from the ones available for cooking).

`/playwithkitties`
* Shows a picture of a playing Kittisaurus cat with a quote.

`/sleepykitties`
* Shows a picture of a sleepy Kittisaurus cat with a quote.

`/snackstealcheck`
* Allows you to check out if the Kitty Pirates are succeeding at stealing snacks!

![KittisaurusBot Help Embed](https://i.imgur.com/qqDrWVY.jpg)

# Credits

**Images:**
* This bot uses some images and gifs from Google Images. Links to them are available inside of the 
commands' files (inside of the `commands` folder).
* [Imgur.com](https://imgur.com) is used to host the other part of the images and gifs (for now).
 
**Code:**
* [Scratch for Discord](https://github.com/Androz2091/scratch-for-discord) was used for building the bot before it was worked on with code. 
(Many changes were made after that)
* [discord-greeter-bot](https://github.com/renesansz/discord-greeter-bot) was used for a starter template when the project started to be worked on with code.
* [StackOverflow.com](https://stackoverflow.com) is used to help in some parts of the code.
* [Discord.js Guide](https://discordjs.guide) is used to help building the main aspects of the bot.

# Contribution

Any contributions to the bot (including issues, feature requests, pull requests or others) are very appreciated and welcome!

# Feedback

If you encounter any issues with the bot, have any suggestions or questions, you can [post an issue here on GitHub](https://github.com/Vankata453/KittisaurusBot/issues) (if it doesn't exist already) or DM me on Discord at Vankata453#4832!
