const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzU3NzE5MzIyODEzNjYxMjc1.X2kfHA.tJx3MVqKl3xrTBLLbp7MeSN-68o';

const PREFIX = '!';

var version = '1.0.9';


const activities_list = [
  "welcome to thuner county!",
  "Please follow the rules!!!!!",
  "need help in thunder county do !help",
  "Have a great day ~peter",
  "Please follow the rules if don't you may get warned"
];

bot.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
      bot.user.setActivity(activities_list[index]);
  }, 10000);
});

//bot.on('guildMemberAdd', member =>// {
  //  const channel = member.guild.channels.find(channel => channel.name === "welcome");
  //  if (!channel) return;

  //  channel.send(`Welcome to our server, ${member}, please read the rules in the rules channel!`)
//});





bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'help':
            message.reply('Welcome to thunder county this server is about erlc and having fun need help getting started do !starthelp');
            break;
        case 'starthelp':
              message.reply('go to #verify and do b!verify to verify then go to #reaction-roles to get the member role!');
              break;
         case 'invitecode':
                message.reply('https://discord.gg/taeGBDp');
                break;
        }
});

        bot.login(token);