module.exports = {
config: {
name: "war",
author: "Vin-cent",
role: 2,
category: "test"
},
onStart: async function ({ message: { reply, send }, event: { mentions }, usersData: { getName } }) {
const fuck = [ "Para sayo Bitch",
"ginagalit mo si Onyek tang ina kang tanga ka ahh feeling ranters e katiting kalang kay Onyek",
"paduduguin ko ulo mo ewan kona lang kung dika mag panic",
"feeling huckirist di naman marunong mag code ang potangina 👿👿",
"asa sa magulang feeling coolkid ang cool mo naman tanginamo pwede kana mamatay",
"syempre mag rereply ka dito tanga ka eh alam mong bot kakausapin mo ulol kanaba?",
"feeling coolkid amputa babatukan lang kita e",
"kaya paba? pag naluluha kana stop na ah leave na awa ako sayo eh bata",
"baka ikaw yung 16 years old na nag cocomment sabi ng minor ah ulol HAHAHAHAHA",
"Walis kana ng bahay nyo tamo lilipad tsinelas sa mukha mo mamaya",
"tanginaka ginigigil mo bot ko sarap mong i sidekick with recall putanginaka.",
"gulat ka no ? HAHAHAHA tanga ka kase d moto alam",
"nagrereply ka palang minumura na kita tanginamo",
"shempre rereply ka ule dito yakk ilalabas mo pagiging coolkid mo frfr istg",
"baka pag in-english kita pati nanay mo mahimatay",
"wala kang masabi? malamang tanga ka gago ka putangina kang nigga ka HAHAHAHAHA",
"pokpok ka putang ina nagmana sa mama",
"ano wala nabang mahanap na foreigner mama mo kasi walang wala na kayo tas dumagdag kapang pabigat ka HAHAHAHA putang ina mo mamatay kana",
"wag kana mag Facebook bulok ka naman putang ina ka nigga",
"sa isip ko palang kinantot na kita bobo",
"mas malalim pa puke mo kesa sa iniisip ko",
"delete Facebook kana tanga tang ina ka",
"fuck you nigga, mabaho puke mo",
"bye iyak na iyak kana jan e HAHAHA iyakin kapa naman tanga ka",
"baka pag kinantot kitang potangina kang bobo kang inutil kang inamo kang gago kang potang ina kang tarantado kang hayup ka, umaray ka?","till next time gago bye na pasok kana sa aquarium mo bawal ka sa lupa mukha kang wtf"];
const id = Object.keys(mentions)[0];
if(!id) {
return reply("mention mo yung Kakantutin mo");
}
const tag = await getName(id);
for (let i = 0; i < fuck.length; i++) {
setTimeout(() => { 
send({ 
body: tag + " " + fuck[i],
mentions: [{ id, tag }]
});
}, i * 2000); 
}
}
};
