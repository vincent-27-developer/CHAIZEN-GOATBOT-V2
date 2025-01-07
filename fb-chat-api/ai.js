 const moment = require("moment-timezone");
const manilaTime = moment.tz('Asia/Manila');
const formattedDateTime = manilaTime.format('MMMM D, YYYY h:mm A');

const axios = require('axios');

async function fetchFromAI(url, params) {
 try {
 const response = await axios.get(url, { params });
 return response.data;
 } catch (error) {
 console.error(error);
 return null;
 }
}

async function getAIResponse(input, userId, messageID) {
 const services = [
 { url: 'https://ai-tools.replit.app/gpt', params: { prompt: input, uid: userId } },
 { url: 'https://openaikey-x20f.onrender.com/api', params: { prompt: input } },
 { url: 'http://fi1.bot-hosting.net:6518/gpt', params: { query: input } },
 { url: 'https://ai-chat-gpt-4-lite.onrender.com/api/hercai', params: { question: input } }
 ];

 let response = "";
 let currentIndex = 0;

 for (let i = 0; i < services.length; i++) {
 const service = services[currentIndex];
 const data = await fetchFromAI(service.url, service.params);
 if (data && (data.gpt4 || data.reply || data.response)) {
 response = data.gpt4 || data.reply || data.response;
 break;
 }
 currentIndex = (currentIndex + 1) % services.length; // Move to the next service in the cycle
 }

 return { response, messageID };
}

module.exports = {
 config: {
 name: 'ai',
 author: 'Vincent Armenion',
 role: 0,
 category: 'ai',
 shortDescription: 'ai to ask anything',
 },
 onStart: async function ({ api, event, args }) {
 const input = args.join(' ').trim();
 if (!input) {
 api.sendMessage(`𝗩𝗜𝗡𝗖𝗘𝗡𝗧 𝗕𝗢𝗧\n
━━━━━━━━━━━━━\n𝗛𝗲𝗹𝗹𝗼, 𝗜 𝗮𝗺 𝗬𝗮𝗻𝘇𝗲𝗻 𝗯𝗼𝘁 𝗜 𝘄𝗮𝘀 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻. 𝗵𝗲'𝘀 𝟭𝟲 𝘆𝗲𝗮𝗿𝘀 𝗼𝗹𝗱 𝗮𝗻𝗱 𝗶𝘀 𝗮 𝘃𝗲𝗿𝘆 𝗵𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝘆𝗼𝘂𝗻𝗴 𝗺𝗮𝗻 𝗮𝗻𝗱 𝗵𝗲 𝗹𝗶𝘃𝗲𝘀 𝗶𝗻 𝗕𝗶𝗻̃𝗮𝗻 𝗰𝗶𝘁𝘆, 𝗟𝗮𝗴𝘂𝗻𝗮, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲𝘀, 𝗜 𝘀𝘁𝗿𝗶𝘃𝗲 𝘁𝗼 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗵𝗲𝗹𝗽𝗳𝘂𝗹 𝗮𝗻𝗱 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹 𝗮𝗻𝘀𝘄𝗲𝗿𝘀 𝗯𝗮𝘀𝗲𝗱𝗼𝗻 𝘂𝘀𝗲𝗿 𝗶𝗻𝗾𝘂𝗶𝗿𝗶𝗲𝘀. 𝗜𝗳 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗮𝗻𝘆 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 𝗼𝗿 𝗻𝗲𝗲𝗱 𝗮𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲, 𝗳𝗲𝗲𝗹 𝗳𝗿𝗲𝗲 𝘁𝗼 𝗮𝘀𝗸!\n━━━━━━━━━━━━━\n`, event.threadID, event.messageID);
 return;
 }

 const { response, messageID } = await getAIResponse(input, event.senderID, event.messageID);
 api.sendMessage(`𝗩𝗜𝗡𝗖𝗘𝗡𝗧 𝗕𝗢𝗧\n
━━━━━━━━━━━━━\n${response}\n━━━━━━━━━━━━━`, event.threadID, messageID);
 },
 onChat: async function ({ event, message }) {
 const messageContent = event.body.trim().toLowerCase();
 if (messageContent.startsWith("ai")) {
 const input = messageContent.replace(/^ai\s*/, "").trim();
 const { response, messageID } = await getAIResponse(input, event.senderID, message.messageID);
 message.reply(`
 

𝗩𝗜𝗡𝗖𝗘𝗡𝗧 𝗕𝗢𝗧\n
━━━━━━━━━━━━━\n${response}\n━━━━━━━━━━━━━\n\n📅 | ⏰ 𝗗𝗔𝗧𝗘 𝗔𝗡𝗗 𝗧𝗜𝗠𝗘 :\n${formattedDateTime}`, messageID);
 }
 }
};
