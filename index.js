const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['Guilds', 'GuildMessages', 'MessageContent'] });
require('dotenv').config();

client.on('ready', (client) => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('messageCreate', (message) => {
    if (message.content === 'ping'.toLowerCase()) {
        message.reply('Pong!')
    }
})

client.login(process.env.token)