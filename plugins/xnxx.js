const { cmd, commands } = require('../command');
const scraper = require("../lib/scraper");
const xnxx = require("xnxx-dl");
const axios = require('axios');
const fetch = require('node-fetch');
const { fetchJson, getBuffer } = require('../lib/functions');
const path = require('path');
const fs = require('fs');
const{readEnv}=require('../lib/database');

const premiumGroups = [];

cmd({
    pattern: "xnxx",
    desc: "Downloads a video from XNXX",
    use: ".xnxx <search_term>",
    react: "📥",
    category: "premium",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {

    if (!premiumGroups.includes(from)) {
        return reply("This command is available in premium groups only.");
    }
    const searchTerm = q.trim();
    if (!searchTerm) return reply(`Please provide a search term`);

    reply(`Searching For Your Video...`);
    try {
        const videoInfo = await xnxx.download(searchTerm);        
        if (!videoInfo || !videoInfo.link_dl) {
            return await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        }
        reply(`Downloading video...`);
        const videoUrl = videoInfo.link_dl;
        await conn.sendMessage(
            from,
            { video : { url: videoUrl }, caption: '*Queen Spriky MD*', mimetype: 'video/mp4' }, { quoted: mek }
        );

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply(`Error: ${e.message}`);
    }
});
