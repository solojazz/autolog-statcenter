/* 
autolog-statcenter 
a lush discord bot built on discord.js for chatmm
by andihow roasty and the best of the chatmm massive
*/
const Discord = require("discord.js");
const client = new Discord.Client();
var newUsers = new Discord.Collection();
var delay=500; //.5 second

//########!commands######## 

//defines ! as prefix for command
client.on("message", msg => {
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;

//!tits
  if (msg.content.startsWith(prefix + "rarerdjpic")) {
    msg.channel.sendMessage("[insert ginger pic here]")
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
      userToOpinion + " is correct, dispite popular belief.",
      "Classic appeal to ridicule, " + userToOpinion +". Try harder next time."];
    let i = Math.floor(Math.random() * 7);
    let selectedopinion = opinions[i];
    setTimeout(function() {
      msg.channel.sendMessage(`${selectedopinion}`);
}, delay);
  }

});

//##End of !commands ####

//Easter Eggs
//Secret phrase triggers bot racism.
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

//announce user who's left
client.on("guildMemberRemove", (member) => {
  console.log(`New User "${member.user.username}" has left the room. `);
  member.guild.defaultChannel.sendMessage(`"${member.user.username}" has left the room.`)
})

//"I am alive" message for cli console
client.on('ready', () => {
	console.log('I am running!!');
});



client.login("MjcyNjYzODAwNzkxMTcxMDcz.C2YXag.E3QfYe6WqrNLc9FyNG99pml7Hhw")