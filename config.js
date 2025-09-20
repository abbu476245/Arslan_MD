const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElIOXhnUkRiUmhwaWNnRWYrYjVoSzVnUG5hWGx3eUlMVVVkUFg2d1gxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3lYR29ycTVCelhmWWpuN1BFckNiYlByZXk4QzU0OFo3VlgxVlBTSUVuQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTGNSVWRoZUcrUVdnb05RVnhFN1UyRGJXQzRGNjFsUG4vNElhcUxSZ0VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSQ0pIVG41eVB1UEJXZy94S05OMHUrZDlaamR4bW9zMFJ0c004UGF6b1hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9JdUtXUXdqRUlsU085d0F6Q0ZKWlZNTFMwMXpKQTVHcGJCdCtXZHZ6RUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdWRFl2dlNYc2xNVWgzcFhPRG9iZ1N0c01vN3VpNkIrbEFqNHVPZHZ5VlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5QVm4wWUVaKzlDSzFEbjJJaWFhdjFEVjFzZTJDRmNMYzYxZGFmd0wwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTS81UzRUb3RQdU9kME9ITTVSUVRsZXNBUDA5STV3WkYvNUNabWpMSmttYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilhxejg4ZDUzNkxFellxaDh1MVVvUDYxb0Voa1psaWRJcUlscHJzbFRDZ041MUt5clhkdFV5MTRaMWVIMlc0bUd4TUZ1MGFMM1RUbnZMajFneFl0NERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiI0WXhWOGo2YzF1aE9YR0w2WmlvdHJyTno0Yy85eW9SSUlSQVcrbzZpMVlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQ0NzUxNzI5MDU1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTM5MDNDOTFCRTZBMzNDNDk2QUE4MjQyOUI4MTU5RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4Mzg0NDkyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0NDc1MTcyOTA1NTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVCNjI0QUZGQUVDMUE2M0MxQUVFNDkxODkyRkQxMEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODM4NDQ5M30seyJrZXkiOnsicmVtb3RlSmlkIjoiNDQ3NTE3MjkwNTU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RTM3ODRFQUJCNTkwMjQwRjdDMUJFMEIyOUJFOTk5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgzODQ0OTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkJLTDNHNVI3IiwibWUiOnsiaWQiOiI0NDc1MTcyOTA1NTk6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJHYXJlbmEgRnJlZWZpcmUiLCJsaWQiOiIyMTc2MDk0MzM4MDA3MjE6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01QMjhhZ0dFT1dpdThZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNUYUZpdUhOQnNmVUlJNnBsVlhJcnNIMVpFNHd2cFJZbVZQOGlzQVAvQVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJwdHRReVlxdjZ4N3FkbjdaU2l0Vi9GS1U3YkhMTURyWFJ6SklIZk9KeGFIdjRtMFIwRW1BZEZLM0VFK1pYZlNIWHY0UVA3ZHQyUVNiQWNkL1VOaUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNR3lBZEd2QlRGaklzRGI0b3FzdDlPdy9abkxSZGZrZDZ0R0RobTVPNXFvSi93WmFGSVFneFdFZWl1V0dBZjJ5ckNYOFk5M1NTUTFjeFlxQVpLWG1DQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ0NzUxNzI5MDU1OTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhFMmhZcmh6UWJIMUNDT3FaVlZ5SzdCOVdST01MNlVXSmxUL0lyQUQvd0UifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODM4NDQ5MSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUd1MiJ9",
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
