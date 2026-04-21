const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/sandarumethsara45-collab/SithmiMD/blob/main/images/Sithmi-MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 SITHMI-MD Is Alive Now😍*",
BOT_OWNER: '94743320676',  // Replace with the owner's phone number



};
