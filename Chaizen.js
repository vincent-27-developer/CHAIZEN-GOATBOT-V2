=Cmd install ai.js const moment = require("moment-timezone");
const manilaTime = moment.tz('Asia/Manila');
const formattedDateTime = manilaTime.format('MMMM D, YYYY h:mm A');
 const axios = require('axios');
const { GoatWrapper } = require('fca-liane-utils');

let fontEnabled = true;

function formatFont(text) { 
  const fontMapping = {
            'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩',
      'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲',
      'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
      'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏',
      'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘',
      'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
  };

  let formattedText = "";
  for (const char of text) {
    if (fontEnabled && char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}

module.exports = {
  config: {
    name: "Yanzen",
    version: "4.7",
    hasPermission: 0,
    role: 0,
    aliases: ["Yanzen","ai"],
    credits: "hashier",
    shortDescription: "(𝚈𝚊𝚗𝚣𝚎𝚗 𝚋𝚘𝚝)",
    description: "(𝚈𝚊𝚗𝚣𝚎𝚗 𝚋𝚘𝚝)",
    commandCategory: "𝚗𝚘 𝚙𝚛𝚎𝚏𝚒𝚡",
    hasPrefix: false,
    usePrefix: false,
    usages: "(𝙼𝚘𝚍𝚎𝚕 - 𝚈𝚊𝚗𝚣𝚎𝚗/𝚋𝚘𝚝 70𝚋 𝙸𝚗𝚜𝚝𝚛𝚞𝚌𝚝)",
    usage: "(𝙼𝚘𝚍𝚎𝚕 - 𝚈𝚊𝚗𝚣𝚎𝚗/ 𝚋𝚘𝚝 70𝚋 𝙸𝚗𝚜𝚝𝚛𝚞𝚌𝚝)",
    cooldowns: 3,
    cooldown: 3,
    category: "Noprefix",
    countDown: 5,
  },

  onStart: async function ({ api, event, args }) {
    if (args.length === 0) {
      api.sendMessage({ body:"📌 𝗛𝗲𝗹𝗹𝗼, 𝗜 𝗮𝗺 𝗬𝗮𝗻𝘇𝗲𝗻 𝗯𝗼𝘁 𝗜 𝘄𝗮𝘀 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻. 𝗵𝗲'𝘀 𝟭𝟳 𝘆𝗲𝗮𝗿𝘀 𝗼𝗹𝗱 𝗮𝗻𝗱 𝗶𝘀 𝗮 𝘃𝗲𝗿𝘆 𝗵𝗮𝗻𝗱𝘀𝗼𝗺𝗲 𝘆𝗼𝘂𝗻𝗴 𝗺𝗮𝗻 𝗮𝗻𝗱 𝗵𝗲 𝗹𝗶𝘃𝗲𝘀 𝗶𝗻 𝗕𝗶𝗻̃𝗮𝗻 𝗰𝗶𝘁𝘆, 𝗟𝗮𝗴𝘂𝗻𝗮, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲𝘀, 𝗜 𝘀𝘁𝗿𝗶𝘃𝗲 𝘁𝗼 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗵𝗲𝗹𝗽𝗳𝘂𝗹 𝗮𝗻𝗱 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹 𝗮𝗻𝘀𝘄𝗲𝗿𝘀 𝗯𝗮𝘀𝗲𝗱𝗼𝗻 𝘂𝘀𝗲𝗿 𝗶𝗻𝗾𝘂𝗶𝗿𝗶𝗲𝘀. 𝗜𝗳 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗮𝗻𝘆 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀 𝗼𝗿 𝗻𝗲𝗲𝗱 𝗮𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲, 𝗳𝗲𝗲𝗹 𝗳𝗿𝗲𝗲 𝘁𝗼 𝗮𝘀𝗸!" }, event.threadID);
      return;
    }

    const command = args[0].toLowerCase();
    if (command === "on") {
      fontEnabled = true;
      api.sendMessage({ body: " ಠ_ಠ 𝗬𝗔𝗡𝗭𝗘𝗡 𝗕𝗢𝗧\n\n» ⛔ 𝙵𝚘𝚗𝚝 𝙵𝚘𝚛𝚖𝚊𝚝𝚝𝚒𝚗𝚐 𝚒𝚜 𝚗𝚘𝚠 𝙴𝚗𝚊𝚋𝚕𝚎𝚍 «" }, event.threadID, event.messageID);
    } else if (command === "off") {
      fontEnabled = false;
      api.sendMessage({ body: "ಠ_ಠ 𝗬𝗔𝗡𝗭𝗘𝗡 𝗕𝗢𝗧\n\n» ⛔ 𝙵𝚘𝚗𝚝 𝙵𝚘𝚛𝚖𝚊𝚝𝚝𝚒𝚗𝚐 𝚒𝚜 𝚗𝚘𝚠 𝙳𝚒𝚜𝚊𝚋𝚕𝚎𝚍 «" }, event.threadID, event.messageID);
    } else {
      const content = args.join(" ");

      try {
        api.sendMessage({ body: "🗨 | 𝐘𝐚𝐧𝐳𝐞𝐧 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠 𝐟𝐨𝐫 𝐚𝐧𝐬𝐰𝐞𝐫 𝐩𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭..." }, event.threadID, event.messageID);

        const response = await axios.get(`https://ai-1stclass-nemory-project.vercel.app/api/llama?ask=${encodeURIComponent(content)}`);

        if (response.data && response.data.response) {
          const formattedContent = formatFont(response.data.response);
          api.sendMessage({ body: `✦═━─𝗩𝗜𝗡𝗖𝗘𝗡𝗧 𝗕𝗢𝗧─━═✦ \n\n𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡: “${content}“\n❍━━━━━━━━━━━━━━━❍\n📆 | ⏰ 𝗗𝗔𝗧𝗘 𝗔𝗡𝗗 𝗧𝗜𝗠𝗘 :\n${formattedDateTime}\n\n💬𝗔𝗡𝗦𝗪𝗘𝗥: ${formattedContent}\n❍━━━━━━━━━━━━━━━❍` }, event.threadID, event.messageID);
        } else {
          console.error('🚫 𝙴𝚛𝚛𝚘𝚛: 𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚈𝚊𝚗𝚣𝚎𝚗 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚎 𝚏𝚘𝚛𝚖𝚊𝚝');
          api.sendMessage({ body: '🚫 𝙴𝚛𝚛𝚘𝚛: 𝙸𝚗𝚟𝚊𝚕𝚒𝚍 𝚈𝚊𝚗𝚣𝚎𝚗 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚎 𝚏𝚘𝚛𝚖𝚊𝚝' }, event.threadID, event.messageID);
        }
      } catch (error) {
        console.error('🚫 𝙴𝚛𝚛𝚘𝚛:', error.message);
        api.sendMessage({ body: '🚫 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍' }, event.threadID, event.messageID);
      }
    }
  }
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: false });
