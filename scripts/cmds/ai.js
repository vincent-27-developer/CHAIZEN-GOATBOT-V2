const axios = require('axios');
const fs = require('fs');

module.exports = {
		config: {
				name: "ai",
				version: "1.0.0",
				role: 0,
				author: "armenion",
				shortDescription: "EDUCATIONAL",
				countDown: 0,
				category: "other",
				guide: {
						en: '[question]'
				}
		},

		onStart: async function ({ api, event, args }) {
				const content = encodeURIComponent(args.join(" "));
				const apiUrl = `https://aiapiviafastapiwithimagebyjonellmagallanes.replit.app/ai?content=${content}`;

				if (!content) return api.sendMessage("𝙋𝙡𝙚𝙖𝙨𝙚 𝙋𝙧𝙤𝙫𝙞𝙙𝙚 𝙮𝙤𝙪𝙧 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣.\n\n𝗘𝗫𝗔𝗠𝗣𝗟𝗘: 𝘼𝙞 𝙬𝙝𝙤 𝙞𝙨 𝙑𝙞𝙣𝙘𝙚𝙣𝙩 𝘼𝙧𝙢𝙚𝙣𝙞𝙤𝙣?", event.threadID, event.messageID);

				try {
						api.sendMessage("🔍| 𝘾𝙝𝙖𝙞𝙯𝙚𝙣 𝙕𝙚𝙚 𝙎𝙚𝙖𝙧𝙘𝙝𝙞𝙣𝙜 𝙖𝙣𝙨𝙬𝙚𝙧 𝙛𝙤𝙧 𝙮𝙤𝙪𝙧 𝙖𝙣𝙨𝙬𝙚𝙧 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣...", event.threadID, event.messageID);

						const response = await axios.get(apiUrl);
						const { request_count, airesponse, image_url } = response.data;

						if (airesponse) {
								api.sendMessage(`${airesponse}\n\n📝 Request Count: ${request_count}`, event.threadID, event.messageID);

								if (image_url) {
										const imagePath = './image.jpg';
										const imageResponse = await axios.get(image_url, { responseType: 'arraybuffer' });
										fs.writeFileSync(imagePath, Buffer.from(imageResponse.data));

										api.sendMessage({ attachment: fs.createReadStream(imagePath) }, event.threadID, () => {
												fs.unlinkSync(imagePath); 
										});
								}
						} else {
								api.sendMessage("An error occurred while processing your request.", event.threadID);
						}
				} catch (error) {
						console.error(error);
						api.sendMessage("🔨 | An error occurred while processing your request from API...", event.threadID);
				}
		}
};
