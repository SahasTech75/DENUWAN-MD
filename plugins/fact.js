const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "fact",
    desc: "🧠 Get a random fun fact",
    react: "🤓",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const funFact = `
🧠 *ʀᴀɴᴅᴏᴍ ꜰᴜɴ ꜰᴀᴄᴛ* 🧠

${fact}

Isn't that interesting? 😄
`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє ƒєт¢нιηg α ƒυη ƒα¢т. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});
