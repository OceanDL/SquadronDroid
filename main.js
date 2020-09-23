const Discord = require('discord.js');
//const ResultReader = require('./resultReader.js')
const ResultReader = require('./googleResultReader.js');
const fs = require('fs');
const vision = require('@google-cloud/vision');

const client = new Discord.Client();

client.once('ready', () => {
    console.log("Beep Boop. Droid Online.");
    path = 'scoreboard.png';
    const hocr = ResultReader.readImg(path);
    return;
})

client.login('');