/* 
autolog-statcenter 
a lush discord bot built on discord.js for chatmm
by andihow roasty and the best of the chatmm massive
*/
const Discord = require("discord.js");
const client = new Discord.Client();
var newUsers = new Discord.Collection();
var delay=500; //.5 second
var currentYear = new Date().getFullYear();


//### !commands ### 

//defines ! as prefix for command
client.on("message", msg => {
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;

//!currentyear
  if (msg.content.startsWith(prefix + "currentyear")) {
    msg.channel.sendMessage(`The current year is ${currentYear}`);
  }

//!opinion
  if (msg.content.startsWith(prefix + "opinion")){
    let userToOpinion = msg.mentions.users.first();
    msg.channel.sendMessage(`Computing Objectively Correct Opinion...`);
    let opinions = [ 
      userToOpinion + " is probably wrong.",
      userToOpinion + " probably just needs a kiss.",
      userToOpinion + " should consult the rules for more information.",
      "When was the last time you had a cum, " + userToOpinion + "?", 
      userToOpinion + " speaks total truth.",
      userToOpinion + " is correct, despite popular belief.",
      "Classic appeal to ridicule, " + userToOpinion +". Try harder next time."];
    let i = Math.floor(Math.random() * 7);
    let selectedopinion = opinions[i];
    setTimeout(function() {
      msg.channel.sendMessage(`${selectedopinion}`);
}, delay);
  }

});
//### End of !commands ###

//### Easter Eggs ###
//Secret phrase triggers bot racism.
client.on("message", msg => {
    if ( (msg.content.includes("14 words")) || (msg.content.includes("14 Words")) || (msg.content.includes("kramer")) || (msg.content.includes("david duke")) ) {
        msg.channel.sendMessage(`We must secure the existence of our people and a future for white children.`);
    }
});

//Secret phrase t r i g g e r s SJW bot
client.on("message", msg => {
    if ( (msg.content.includes("RTS games")) || (msg.content.includes("gamergate"))  || (msg.content.includes("gamer gate")) || (msg.content.includes("Gamer Gate")) || (msg.content.includes("overwatch")) || (msg.content.includes("Overwatch")) ) {
        msg.channel.sendMessage(`There's a toxicity within gaming culture, and also in tech culture, that drives this misogynist hatred, this reactionary backlash against women who have anything to say, especially those who have critiques or who are feminists.`);
    }
});

client.on("message", msg => {
    if ( (msg.content.includes("privilege")) || (msg.content.includes("Privilege")) ) {
        msg.channel.sendMessage(`DONT TALK ABOUT PRIVILEGE YOU'RE A FUCKING WHITE MALE`);
    }
});

client.on("message", msg => {
    if (msg.content.includes("Zoe Quinn") || (msg.content.includes("zoe quinn")) ) {
        msg.channel.sendMessage(`https://www.patreon.com/zoe`);
    }
});

//announce user who's entered
client.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has entered the room.` );
    member.guild.defaultChannel.sendMessage(`${member.user.username} has entered the room.`);
});

//announce user who's become active
client.on("guildMemberAvailable", (member) => {
    console.log(`New User "${member.user.username}" has entered the room.` );
    member.guild.defaultChannel.sendMessage(`${member.user.username} has entered the room.`);
});

//announce user who's left
client.on("guildMemberRemove", (member) => {
  console.log(`New User "${member.user.username}" has left the room. `);
  member.guild.defaultChannel.sendMessage(`${member.user.username} has left the room.`)
})

//"I am alive" message for cli console
client.on('ready', () => {
	console.log('I am running!!');
});



client.login("MjcyNjYzODAwNzkxMTcxMDcz.C2YXag.E3QfYe6WqrNLc9FyNG99pml7Hhw")