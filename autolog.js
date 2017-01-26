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
var currentdate = new Date();
var datetime =  currentdate.getDate() + "/"+  (parseInt(currentdate.getMonth())    + 1)
   + "/" + currentdate.getFullYear();



//### !commands ###

//defines ! as prefix for command
client.on("message", msg => {
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;

//!help
 if (msg.content.startsWith(prefix + "help")) {
   msg.channel.sendMessage(`As of now, you can !currentyear, !cointoss, or !opinion`);
   console.log(currentdate + " - Someone got help.");

 }

//!currentyear
  if (msg.content.startsWith(prefix + "currentyear")) {
    msg.channel.sendMessage(`The current year is ${currentYear}`);
    console.log(currentdate + " - Displayed the Current Year");
  }

//!opinion
  if (msg.content.startsWith(prefix + "opinion")){
    let userToOpinion = msg.mentions.users.first();
    msg.channel.sendMessage(`Computing Objectively Correct Opinion...`);
    let opinions = [
      userToOpinion + " is probably wrong.",
      userToOpinion + " probably just needs a kiss.",
      userToOpinion + " is just being edgy tbh.",
      "I'm shocked that you think that,  " + userToOpinion + ".",
      userToOpinion + " speaks total truth.",
      userToOpinion + " is correct, despite popular belief.",
      "Thats right, " + userToOpinion +". Absolutely right."];
    let i = Math.floor(Math.random() * 7);
    let selectedopinion = opinions[i];
    setTimeout(function() {
      msg.channel.sendMessage(`${selectedopinion}`);
}, delay);
    console.log(currentdate + " - Corrected an opinion");
  }
//!cointoss
  if (msg.content.startsWith(prefix + "cointoss")){
    let userWhoTossed = msg.mentions.users.first();
    msg.channel.sendMessage(`Rotating Airborn Coin...`);
    let outcomes = [
      "Heads.", "Tails."];
    let i = Math.floor(Math.random() * 2);
    let selectedoutcomes = outcomes[i];
    setTimeout(function() {
      msg.channel.sendMessage(`${selectedoutcomes}`);
}, delay);
    console.log(currentdate + " - Tossed a coin.");
  }

});
//### End of !commands ###

//### Easter Eggs ###
//Secret phrase triggers bot racism.
client.on("message", msg => {
    if (msg.content.includes("14 words")) {
        msg.channel.sendMessage(`https://cdn.discordapp.com/attachments/272344699434696705/273455453730635776/Dt8IGlA.png`);
        console.log(currentdate + " - Smashed Racism");
    }
});

client.on("message", msg => {
    if (msg.content.includes("Zoe Quinn") || (msg.content.includes("zoe quinn")) ) {
        msg.channel.sendMessage(`https://www.patreon.com/zoe`);
        console.log(currentdate + " - Helped out Zoe");
    }
});

//announce user who's entered
client.on("guildMemberAdd", (member) => {
    console.log(currentdate + ` New User "${member.user.username}" has entered the room.` );
    member.guild.defaultChannel.sendMessage(`${member.user.username} has entered the room.`);
});

//announce user who's become active
client.on("guildMemberAvailable", (member) => {
    console.log(currentdate + ` New User "${member.user.username}" has entered the room.` );
    member.guild.defaultChannel.sendMessage(`${member.user.username} has entered the room.`);
});

//announce user who's left
client.on("guildMemberRemove", (member) => {
  console.log(currentdate + ` New User "${member.user.username}" has left the room. `);
  member.guild.defaultChannel.sendMessage(`${member.user.username} has left the room.`)
})

//"I am alive" message for cli console
client.on('ready', () => {
	console.log('It is ' + currentdate + ' and I have awoken!');
});


client.login("MjcyNjYzODAwNzkxMTcxMDcz.C2YXag.E3QfYe6WqrNLc9FyNG99pml7Hhw")
