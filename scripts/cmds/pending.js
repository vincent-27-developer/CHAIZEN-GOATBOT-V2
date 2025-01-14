module.exports = { config: { name: "pending", version: "1.0", author: "Vincent Armenion", countDown: 5, role: 0, shortDescription: { en: "Approve pending groups" }, longDescription: { en: "Approve pending groups in spam list or unapproved groups" }, category: "boxchat" }, langs: { en: { invaildNumber: "🔰|𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗡𝘂𝗺𝗯𝗲𝗿\n◈════━━━◈✧◈━━━════◈\n\n➥ %1 is not an invalid number............", cancelSuccess: "🔰|𝗖𝗮𝗻𝗰𝗲𝗹 𝗥𝗲𝗾𝘂𝗲𝘀𝘁\n\n➥ Refused %1 thread!.........", approveSuccess: "✅|𝗔𝗽𝗽𝗿𝗼𝘃𝗲𝗱 𝗚𝗿𝗼𝘂𝗽\n\n➥ Group has been approved %1 successfully....", cantGetPendingList: "Can't get the pending list!", returnListPending: "🌐|𝗣𝗘𝗡𝗗𝗜𝗡𝗚 𝗟𝗜𝗦𝗧\n\n➥ The whole number of threads to approve is: %1 thread \n\n%2", returnListClean: "🔰 𝗬𝗢𝗨𝗥 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 𝗟𝗜𝗦𝗧 𝗜𝗦 𝗘𝗠𝗣𝗧𝗬 ୧⌓̈⃝୨\n◈════━━━◈✧◈━━━════◈\n\n➥ Currently these are no groups in the pending list........" } }, onReply: async function({ api, event, Reply, getLang, commandName, prefix }) { if (String(event.senderID) !== String(Reply.author)) return; const { body, threadID, messageID } = event; var count = 0; if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) { const index = (body.slice(1, body.length)).split(/\s+/); for (const singleIndex of index) { console.log(singleIndex); if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > Reply.pending.length) return api.sendMessage(getLang("invaildNumber", singleIndex), threadID, messageID); api.removeUserFromGroup(api.getCurrentUserID(), Reply.pending[singleIndex - 1].threadID); count+=1; } return api.sendMessage(getLang("cancelSuccess", count), threadID, messageID); } else { const index = body.split(/\s+/); for (const singleIndex of index) { if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > Reply.pending.length) return api.sendMessage(getLang("invaildNumber", singleIndex), threadID, messageID); api.sendMessage(`🤖 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻\n\Chaizen Zee 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 approved by 𝗈𝗐𝗇𝖾𝗋𝗌.`, Reply.pending[singleIndex - 1].threadID); count+=1; } return api.sendMessage(getLang("approveSuccess", count), threadID, messageID); } }, onStart: async function({ api, event, getLang, commandName }) { const { threadID, messageID } = event; var msg = "", index = 1; try { var spam = await api.getThreadList(100, null, ["OTHER"]) || []; var pending = await api.getThreadList(100, null, ["PENDING"]) || []; } catch (e) { return api.sendMessage(getLang("cantGetPendingList"), threadID, messageID) } const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup); for (const single of list) msg += `╭────────────⟡\n│\n│ℹ️ 𝗡𝗮𝗺𝗲\n│${single.name}\n│\n│🆔 𝗜𝗗\n│${single.threadID}\n│\n╰───────────⟡\n\n`; if (list.length != 0) return api.sendMessage(getLang("returnListPending", list.length, msg), threadID, (err, info) => { global.GoatBot.onReply.set(info.messageID, { commandName, messageID: info.messageID, author: event.senderID, pending: list }) }, messageID); else return api.sendMessage(getLang("returnListClean"), threadID, messageID); } }=Cmd install ai.js const { getPrefix, getStreamFromURL, uploadImgbb } = global.utils;
async function ai({ message: m, event: e, args: a, usersData: u }) {
  var p = [`${await getPrefix(e.threadID)}${this.config.name}`,
`${this.config.name}`
/*"ai"
*you can add more prefix here
*/
]; 
 if (p.some(b => a[0].toLowerCase().startsWith(b))) {
try {      
let prompt = "";
if (e.type === "message_reply" && e.messageReply.attachments && e.messageReply.attachments[0]?.type === "photo") {
 const b = await uploadImgbb(e.messageReply.attachments[0].url);
prompt = a.slice(1).join(" ") + ' ' + b.image.url;
} else {
 prompt = a.slice(1).join(" ");
}
 var __ = [{ id: e.senderID, tag: await u.getName(e.senderID) }];
 const r = await require("axios").post(`https://test-ai-ihc6.onrender.com/api`, {
  prompt: prompt,
 apikey: "GayKey-oWHmMb1t8ASljhpgSSUI",
  name: __[0]['tag'],
 id: __[0]['id'],
 });
var _ = r.data.result.replace(/{name}/g, __[0]['tag']).replace(/{pn}/g, p[0]);
 if (r.data.av) {
 if (Array.isArray(r.data.av)) {
 const avs = r.data.av.map(url => getStreamFromURL(url));
 const avss = await Promise.all(avs);
  m.reply({
 body: _,
 mentions: __,
 attachment: avss
 });
 } else {
 m.reply({
 body: _,
 mentions: __,
attachment: await getStreamFromURL(r.data.av)
  });
  }
  } else {
m.reply({
body: _,
mentions: __
  });
  }
  } catch (error) {
 m.reply("Error " + error);
 }
 }
}
module.exports = {
config: {
 name: "ai",
aliases: [],
version: 1.6,
author: "Vincent Armenion",
role: 0,
 shortDescription: "An AI that can do various tasks",
 guide: "{pn} <query>",
 category: "AI"
 },
 onStart: function() {},
 onChat: ai
};
