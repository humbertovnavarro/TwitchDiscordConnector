const config = require('./config');
const axios = require('axios');
const tmi = require('tmi.js');
const client = new tmi.Client({
  channels: config.channels
});

config.users = config.users.map( user => user.toLowerCase());
config.blacklist = config.blacklist.map( user => user.toLowerCase());
if(!config.custom) {
  config.custom = [];
}

if(!config.blacklist) {
  config.blacklist = [];
}

client.connect();
client.on('message', (channel, tags, message, self) => {
  for(let user of config.blacklist) {
    if (user === tags['display-name'].toLowerCase()) {
      return;
    }
  }
  let isMatch = false;
  for(let regex of config.custom) {
    if (message.match(regex)) {
      isMatch = true;
      break;
    }
  }
  if(!isMatch)
  for(let user of config.users) {
    if (user === tags['display-name'].toLowerCase()) {
      isMatch = true;
      break;
    }
    if (message.toLowerCase().indexOf(user) !== -1) {
      isMatch = true;
      break;
    }
  }
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
