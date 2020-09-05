# DankMemer.js
An API wrapper for Dank Memer API.

[![NPM](https://nodei.co/npm/dankmemer.png)](https://nodei.co/npm/dankmemer/)

# Installing
`npm i --save dankmemer`

# Updates
- Fixed some bugs

# Usage
```js
const DankMemer = require("dankmemer");
const memer = new DankMemer("Your API Token Goes Here");
```

# Example
```js
const DankMemer = require("dankmemer");
const memer = new DankMemer("Dank Memer Api Key");
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
# Getting API Key
Go to [dankmemer.services/dashboard](https://dankmemer.services/dashboard) and request for API key.

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

# RateLimits [ Source: Dank Memer API ]
Rate Limits
Each endpoint has it's own ratelimit, which you can find in it's documentation. Additionally, the API has a global ratelimit of 300 requests per minute.

The ratelimits for the endpoint are defined with X-RateLimit-:key, while the global ratelimit is defined with X-Global-RateLimit-:key.
When the global ratelimit is hit, the body will contain an additional JSON key "global" which will be set to true.

# Ratelimit Headers:
- X-RateLimit-Limit: Maximum usage allowed per timeframe
- X-Ratelimit-Remaining: Remaining requests that can be made during the timeframe
- X-RateLimit-Reset: Timestamp indicating when the ratelimit will reset in milliseconds.
- Retry-After: Time to wait in milliseconds until another request can be made. Only exposed if ratelimit is reached.
- X-Global-RateLimit-Limit: Maximum global usage allowed per timeframe
- X-Global-Ratelimit-Remaining: Remaining requests that can be made globally during the timeframe
- X-Global-RateLimit-Reset: Timestamp indicating when the global ratelimit will resett in milliseconds.
- Retry-After: Time to wait in milliseconds until another request can be made. Only exposed if ratelimit is reached.

# API Docs
**[Click Here](https://dankmemer.services/documentation)**

# My GitHub
**[Click Here](https://github.com/INEX07)**
