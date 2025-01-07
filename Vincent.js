module.exports = {
 config: {
 name: "Vincent",
 version: "1.0",
 author: "Vincent A", 
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Vincent") {
 return message.reply({
 body: "🔕 𝗗𝗢𝗡𝗧 𝗖𝗔𝗟𝗟 𝗩𝗜𝗡𝗖𝗘𝗡𝗧 𝗔𝗥𝗠𝗘𝗡𝗜𝗢𝗡 𝗜𝗙 𝗛𝗘 𝗔𝗜𝗡𝗧 𝗛𝗘𝗥𝗘 🔕 𝗮𝘆𝗮𝘄 𝗻𝗮 𝗮𝘆𝗮𝘄 𝗸𝗼 𝘀𝗮 𝗺𝗴𝗮 𝘁𝗮𝗼𝗻𝗴 𝗵𝗶𝗻𝗱𝗶 𝗮𝗸𝗼 𝗴𝘂𝘀𝘁𝗼 𝗮𝘁 𝗺𝗮𝘀𝗹𝗮𝗹𝗼𝗻𝗴 𝗮𝘆𝗮𝘄 𝗻𝗮 𝗮𝘆𝗮𝘄 𝗸𝗼 𝘀𝗮 𝗺𝗴𝗮 𝘁𝗮𝗼𝗻𝗴 𝗻𝗮𝗴𝗸𝘂𝗸𝘂𝗻𝘄𝗮𝗿𝗶𝗻𝗴 𝗴𝘂𝘀𝘁𝗼 𝗮𝗸𝗼",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/IrVbB30.jpeg")
 });
 }
 }
}
