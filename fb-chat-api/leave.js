 const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "leave",
		aliases: ["out"],
		version: "1.0",
		author: "Vincent", 
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage(' (⋋▂⋌)𝗽𝗮𝘀𝗲𝗻𝘀𝘆𝗮 𝗻𝗮 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲 𝗺𝗮𝘀𝗮𝗸𝗶𝘁 𝗺𝗮𝗻 𝗶𝘀𝗶𝗽𝗶𝗻  𝗽𝗲𝗿𝗼 𝗶𝘁𝗼 𝗽𝗼 𝗮𝘆 𝗱𝗲𝘀𝗶𝘀𝘆𝗼𝗻 𝗻𝗶 𝗩𝗶𝗻𝗰𝗲𝗻𝘁 𝗔𝗿𝗺𝗲𝗻𝗶𝗼𝗻 𝗻𝗮 𝗽𝗮𝗮𝗹𝗶𝘀𝗶𝗻 𝗮𝗸𝗼 𝘀𝗮 𝗺𝗴𝗮 𝗴𝗰 𝘄𝗮𝗹𝗮 𝗽𝗼 𝗮𝗸𝗼𝗻𝗴 𝗺𝗮𝗴𝗮𝗴𝗮𝘄𝗮 𝗱𝗮𝗵𝗶𝗹 𝘀𝗶𝗻𝘂𝘀𝘂𝗻𝗼𝗱 𝗸𝗼 𝗹𝗮𝗻𝗴 𝗮𝗻𝗴 𝘂𝘁𝗼𝘀 𝗻𝗴 𝗼𝘄𝗻𝗲𝗿 𝗸𝗼 𝘀𝗲𝗲 𝘆𝗼𝘂 𝘀𝗼𝗼𝗻 𝗴𝗼𝗼𝗱𝗯𝘆𝗲 😭', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
