const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "馃挰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const quote = response.data;
        const message = `
馃挰 "${quote.content}"
- ${quote.author}
饾悘饾悗饾悥饾悇饾悜饾悇饾悆 饾悂饾悩 饾悞饾悁饾悋饾悁饾悞-饾悓饾悆 饾悙饾悢饾悗饾悡饾悇饾悞
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("垄蟽蠀鈩撯垈 畏蟽褌 茠褦褌垄薪 伪 q蠀蟽褌褦. 蟻鈩撗斘毖曆� 褌褟褍 伪g伪喂畏 鈩撐毖傃斞�.");
    }
});
