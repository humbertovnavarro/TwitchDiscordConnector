const config = require('./config');
const axios = require('axios');
const tmi = require('tmi.js');
const client = new tmi.Client({
  channels: config.channels
});
client.connect();
client.on('message', (channel, tags, message, self) => {
  let isMatch = false;
  config.users.forEach(user => {
    if(user === tags['display-name'].toLowerCase()) {
      isMatch = true;
    }
    if(message.toLowerCase().indexOf(user)) {
      isMatch = true;
    }
  });
  if (!isMatch) {
    return;
  }
  const embed = {
    "content": null,
    "embeds": [
      {
        "description": `\`${tags['display-name']}: ${message}\``,
        "color": 8411391,
        "author": {
          "name": `${channel.substring(1)}'s Channel`,
          "url": `https://www.twitch.tv/${channel.substring(1)}`
        },
        "timestamp": new Date().toISOString()
      }
    ]
  }
  axios.post(config.webhook, embed)
  .catch(err => {
    console.error('Something went wrong');
  })
});
