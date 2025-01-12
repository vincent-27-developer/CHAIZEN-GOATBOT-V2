module.exports = {
	config: {
			name: "vincent",
			version: "1.0",
			author: "armenion",
			countDown: 5,
			role: 0,
			shortDescription: "No Prefix",
			longDescription: "No Prefix",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "vincent") return message.reply("𝗧𝗮𝘁𝗮𝗻𝗱𝗮𝗮𝗻 𝗺𝗼 𝗮𝘆𝗮𝘄 𝗻𝗮 𝗮𝘆𝗮𝘄 𝗸𝗼 𝘀𝗮 𝗺𝗴𝗮 𝘁𝗮𝗼𝗻𝗴 𝗵𝗶𝗻𝗱𝗶 𝗮𝗸𝗼 𝗴𝘂𝘀𝘁𝗼 𝗮𝘁 𝗺𝗮𝘀𝗹𝗮𝗹𝗼𝗻𝗴 𝗮𝘆𝗮𝘄 𝗻𝗮 𝗮𝘆𝗮𝘄 𝗸𝗼 𝘀𝗮 𝗺𝗴𝗮 𝘁𝗮𝗼𝗻𝗴 𝗻𝗮𝗴 𝗸𝘂𝗸𝘂𝗻𝘄𝗮𝗿𝗶𝗻𝗴 𝗴𝘂𝘀𝘁𝗼 𝗮𝗸𝗼");
}
};
