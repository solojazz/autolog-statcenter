const Discord = require("discord.js");
const client = new Discord.Client();
var newUsers = new Discord.Collection();

//!commands - defines ! as prefix for command
client.on("message", msg => {
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;

//!tits
  if (msg.content.startsWith(prefix + "tits")) {
    msg.channel.sendMessage("[insert tit pic here]")
  }
});

//14 words for roasty
client.on("message", msg => {
    if (msg.content.includes("14 words", "14 Words")) {
        msg.channel.sendMessage("We must secure the existence of our people and a future for white children.");
    }
});

//announce user who's entered
client.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has entered the room.` );
    member.guild.defaultChannel.sendMessage(`"${member.user.username}" has entered the room.`);
});

//annoutnce user who's left
client.on("guildMemberRemove", (member) => {
  console.log(`New User "${member.user.username}" has left the room. `);
  member.guild.defaultChannel.sendMessage(`"${member.user.username}" has left the room.`)
})

//"I am alive" message for cli
client.on('ready', () => {
	console.log('I am running!!');
});



client.login("MjcyNjYzODAwNzkxMTcxMDcz.C2YXag.E3QfYe6WqrNLc9FyNG99pml7Hhw")