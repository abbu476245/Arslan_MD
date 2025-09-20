const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FJUU51WFBYY2V0M1R3UDZrTkdINDNLSlpQV2lFenBjQ2VoVGZCQjBGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3FyZXFBQkMxSVNQbHNQNmJSK0dHY2xTTmFIdWErRHVoRnRUK3dINEJEYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQUE3aTJHaWtMNzh5aFpNNkllUlJpQURuWGZpeitydy8rUTQ3RFFZMkZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyYU9lMDdJOWlPb3ErSE5qMGJTd2V2M2lhM2w0MXJ4cGw5L0I4NEx1aUVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNGUDRBdk9sUWtvT3I3cGg0aEdyNVJFOXI4MFErcUowaWxOS2syMzVHMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhiUW1ZQnJBSDBSenJQS3BMVFVnV2hqY1pFSnlKaXBJdzVVTVpGMlNlblE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NyR2w0WDh4QitYVURWVWJHbnlMbUZQWWhvYU56SjV2SzBlMHF4TEczST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnZNa0pIanQyNnZZQmpPUW1xc0QzSzE3QnkvdE1VejZzQktEMVlyODlqWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwzZVBaQ3FsTXhmb2x0OENrVzNBa084QjFXeC94d2R3TW5vRHhCdll4dnBhVjRqMEJKZ05xaGh3Q1pNMGwrRUpYNTdlZURvSy9SSFQ4dklpRWJ2SkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IjhrZmJ3OHg4VWVqc0U3SG5TMXRyMmQyQnZqMHkxQXNvblN5U0ZrbXoyZ1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDQ3NTE3MjkwNTU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NjFFMzMxOEM2RTMyOEE4NURBREEwNjNGMDA5MjUwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgzNTYzNDh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQ0NzUxNzI5MDU1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTBDRjA3RjI2OUE0RjI4RkZBQjgzRTdBQjBCM0JGRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MzU2MzQ4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJCUlI5Q1JCMiIsIm1lIjp7ImlkIjoiNDQ3NTE3MjkwNTU5OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiR2FyZW5hIEZyZWVmaXJlIiwibGlkIjoiMjE3NjA5NDMzODAwNzIxOjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNTDI4YWdHRVBiR3VjWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjVGFGaXVITkJzZlVJSTZwbFZYSXJzSDFaRTR3dnBSWW1WUDhpc0FQL0FRPSIsImFjY291bnRTaWduYXR1cmUiOiJVN3AyNHQ3bDV5Lzh1Y1hscFgya1JURFliVDRXbVo5TnJJZ2dlcjQyRDhNWGRxU2poUFJtT01uY2YvWUpLMFdMdDRsb0F3Mmt6L2pPaitFRmtPZmFEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV2JJRWhBbzlxMFErUUJxdnBlSG1kbExOWmpTUG1aWlE4N2YvVnAyZ2laUUJmTDlLTzU0OS9uNHNqUmplQXZ3MHhNTDFvSkFrVkduUDhvNjhwNUg5Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0NDc1MTcyOTA1NTk6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYRTJoWXJoelFiSDFDQ09xWlZWeUs3QjlXUk9NTDZVV0psVC9JckFEL3dFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgzNTYzNDcsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKd2EifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
