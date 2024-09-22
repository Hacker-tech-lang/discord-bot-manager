require('dotenv').config();
const { Client, Intents } = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Command handling
    if (command === 'command') {
        message.channel.send('Command executed!');
    }

    if (command === 'role') {
        const roleName = args.join(' ');
        if (roleName) {
            message.guild.roles.create({ name: roleName })
                .then(role => message.channel.send(`Role ${role.name} created!`))
                .catch(err => message.channel.send('Error creating role: ' + err));
        }
    }

    if (command === 'manager') {
        message.channel.send('Welcome to the bot manager!');
    }

    if (command === 'website') {
        message.channel.send('Website functionality coming soon!');
    }

    if (command === 'editor') {
        message.channel.send('Website editor functionality coming soon!');
    }
});

client.login(process.env.TOKEN);
