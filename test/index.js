const Dank = require("../index");
const memer = new Dank("Dank Memer Api Key");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Memer is online!"); // eslint-disable-line no-console
});

client.on("message", async(message) => {
    if (!message.guild || message.author.bot) return;
    if (message.content === "spank") {
        let userone = message.author.displayAvatarURL;
        let usertwo = client.user.displayAvatarURL;
        let image = await memer.spank(userone, usertwo);
        const attachment = new Discord.Attachment(image, "spank.png");
        return message.channel.send(attachment);
    }
});

client.login("Discord Bot Token");
