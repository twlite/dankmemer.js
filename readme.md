# DankMemer.js
An API wrapper for Dank Memer API.

[![NPM](https://nodei.co/npm/dankmemer.js.png)](https://nodei.co/npm/dankmemer.js/)

# Installing
`npm i --save dankmemer.js`

# Updates
- Fixed some bugs

# Usage
```js
const DankMemer = require("dankmemer.js");
const memer = new DankMemer("Your API Token Goes Here");
```

# Example
```js
const DankMemer = require("dankmemer.js");
const memer = new Dank("Dank Memer Api Key");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Memer is online!`);
});

client.on("message", async(message) => {
    if (!message.guild || message.author.bot) return;
    if (message.content === "spank") {
        let userone = message.author.displayAvatarURL;
        let usertwo = client.user.displayAvatarURL;
        let image = await memer.spank(userone, usertwo);

        const attachment = new Discord.Attachment(image, "spank.png")
        return message.channel.send(attachment);
    }
})

client.login("Discord Bot Token");
```

# Methods
- async-await
```js
async function spank(avatar1, avatar2) {
    let img = await memer.spank(avatar1, avatar2);
    message.channel.send({ file: img });
}
spank();
```

- .then
```js
memer.spank(avatar1, avatar2).then(img => {
    message.channel.send({ file: img });
})
```

# Functions
- abandon
- aborted
- affect
- airpods
- america
- armor
- balloon
- bed
- bongocat
- boo
- brain
- brazzers
- byemom
- cancer
- changemymind
- cheating
- citation
- communism
- confusedcat
- corporate
- crab
- cry
- dab
- dank
- deepfry
- delete
- disability
- doglemon
- door
- egg
- excuseme
- expanddong
- facts
- failure
- fakenews
- fedora
- floor
- fuck
- garfield
- gay
- goggles
- hitler
- humansgood
- inator
- invert
- jail
- justpretending
- kimborder
- knowyourlocation
- kowalski
- laid
- lick
- madethis
- magik
- master
- meme
- note
- nothing
- ohno
- piccolo
- plan
- presentation
- quote
- radialblur
- rip
- salty
- satan
- savehumanity
- screams
- shit
- sickban
- slap
- slapsroof
- sneakyfox
- spank
- stroke
- surprised
- sword
- thesearch
- trash
- tiger
- trigger
- tweet
- ugly
- unpopular
- violence
- violentsparks
- vr
- walking
- wanted
- wrap
- whodidthis
- whothisis
- yomomma
- youtube

# API Docs
**[Click Here](https://dankmemer.services/documentation)**

# My GitHub
**[Click Here](https://github.com/INEX07)**
