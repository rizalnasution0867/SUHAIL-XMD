const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') :+62 085763401567 "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_23_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg1LFxuICAgICAgICA2LFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICAyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzLFxuICAgICAgICA3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjROR1k3RE5ObFMzZjhLOTA2SHdld0VBS2JUR3FDTzhQRldMOWdEWHRyZzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4NTc2MzQwMTU2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0NDREVFREM0Njc2QUE3NTgwOTRBQzYwNkQ1MjE1RDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNDEyMjMwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4NTc2MzQwMTU2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjM1MEQ2M0Y2RDkyRjM0MzVCNzVBNjk5QTEzNEE5MDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNDEyMjMzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZTV09kQ2xPUkVleUc5ODU0MGRlMUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmI3ODJmY2UtMDAyOS00MTc1LTliZTUtNGFiZTkyNzk5MzA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDEyNCxcbiAgICAgIDEyOSxcbiAgICAgIDI4LFxuICAgICAgNixcbiAgICAgIDIwOSxcbiAgICAgIDE3NCxcbiAgICAgIDEyNSxcbiAgICAgIDIyLFxuICAgICAgMjEzLFxuICAgICAgMjM4LFxuICAgICAgOCxcbiAgICAgIDIxMSxcbiAgICAgIDc3LFxuICAgICAgNTcsXG4gICAgICAyMzcsXG4gICAgICAyNyxcbiAgICAgIDEwNCxcbiAgICAgIDI0MCxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAxMjgsXG4gICAgICAxODIsXG4gICAgICA3MCxcbiAgICAgIDMzLFxuICAgICAgNDcsXG4gICAgICAxNzgsXG4gICAgICA0NSxcbiAgICAgIDIyNyxcbiAgICAgIDIyOSxcbiAgICAgIDQ2LFxuICAgICAgMjI1LFxuICAgICAgNDMsXG4gICAgICA1MyxcbiAgICAgIDE5LFxuICAgICAgNzAsXG4gICAgICAyMzEsXG4gICAgICAyNDYsXG4gICAgICA0OSxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxURDlFQ1o2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2Mjg1NzYzNDAxNTY3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NDM1MTYzMjY3MjA4OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUml6YWxcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYjhub0VIRVB5S3g3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJCUTB0elFMb2lKT01mRVcvb1FEVnhqSThTVVdqQjNCd1lIcE11SGQwVE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRWs4L2dKSTNUQ2NMWVdBWCtkRzRCak5zUVRFZjk4YU5TdHl0L3VaaHc2TG1YQVU3bXk3U2xCSlpYYzFiVGV6OVhBSnhES1dMbzJZSkpCcGt1ZTgrQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUDM3SHRPcWc0YUErVHRQOTlOaks5U0FYTGxGVWtwNDllWGF2MkJ2U1E2M0FuWjloRzF3R1BTRTFZNWZxcEtPUnZ0cmZkODJFaDdqVEVLTldXN3Zoanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjI4NTc2MzQwMTU2NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzQxMjIyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9ScFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1JwLmpzb24iOiAie1wia2V5RGF0YVwiOlwibW54eTBMK3BLVEt5Q0pjL1gvaTI4RVhha05OWnJLSkI0cVJhYW9zeEU2VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODgxNjUyNzQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM0MTIyMjc5NTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
