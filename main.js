const Discord = require('discord.js');
const ResultReader = require('./resultReader.js')

const client = new Discord.Client();

client.once('ready', () => {
    console.log("Beep Boop. Droid Online.");
    ResultReader.readImg();
    return;
})

client.login('NzU2MjExMzE5NTA1NTUxMzgw.X2OirA.nWG2Vtq6751LsFPAb8mJdjv0F0o')