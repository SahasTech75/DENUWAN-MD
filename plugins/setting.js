const { cmd } = require('../command')

cmd({
    pattern: "settings",
    alias: ["setting"],
    desc: "settings the bot",
    react: "⚙️",
    category: "owner"

const config = await readEnv(..lib/mongodb);

        let work;
        switch (config.MODE) {
            case 'public':
                work = '𝙿𝚄𝙱𝙻𝙸𝙲🌎';
                break;
            case 'private':
                work = '𝙿𝚁𝙸𝚅𝙰𝚃𝙴👤';
                break;
            case 'groups':
                work = '𝙶𝚁𝙾𝚄𝙿 𝙾𝙽𝙻𝚈👥';
                break;
            case 'inbox':
                work = '𝙸𝙽𝙱𝙾𝚇 𝙾𝙽𝙻𝚈🫂';
                break;
            default:
                work = '𝚄𝙽𝙺𝙾𝚆𝙽🛑';
        }

        let autoStatus = config.AUTO_READ_STATUS === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autocmd = config.AUTO_READ_CMD === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵
        let autoVoice = config.AUTO_VOICE === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autotyping = config.AUTO_TYPING === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
    
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃       ⚙️ *SAHAS MD BOT SETTINGS* ⚙️
┃━━━━━━━━━━━━━━━━━━━━━━━┃
┣━💼 *Work Mode* : *${work}*
┣━🔊 *Auto Voice* : *${autoVoice}*
┣━📝 *Auto Status* : *${autoStatus}*
┣━📋 *Auto Bio* : on/off
┣━⌨️ *Auto Typing* : *${autotyping}*
┣━🛠️ *Auto Read Command* : *${autocmd}*
┃━━━━━━━━━━━━━━━━━━━━━━━┃
┃      🔗  *CUSTOMIZE YOUR SETTINGS* ⤵️
┗━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃       🔧 *OPTIONS MENU* 🔧
┃━━━━━━━━━━━━━━━━━━━━━━━┃

┣━ *_WORK MODE_* ⤵️
┃   ┣ 1.1 🔹 *Public Work*
┃   ┣ 1.2 🔹 *Private Work*
┃   ┣ 1.3 🔹 *Group Only*
┃   ┗ 1.4 🔹 *Inbox Only*

┣━ *_AUTO VOICE_* ⤵️
┃   ┣ 2.1 🔊 *Auto Voice On*
┃   ┗ 2.2 🔕 *Auto Voice Off*

┣━ *_AUTO STATUS SEEN_* ⤵️
┃   ┣ 3.1 👁️‍🗨️ *Auto Read Status On*
┃   ┗ 3.2 👁️❌ *Auto Read Status Off*

┣━ *_AUTO BIO_* ⤵️
┃   ┣ 4.1 ✍️ *Auto Bio On*
┃   ┗ 4.2 ✍️❌ *Auto Bio Off*

┣━ *_24/7 NEWS SERVICE_* ⤵️
┃   ┣ 5.1 📰 *Activate News Service*
┃   ┗ 5.2 🛑 *Deactivate News Service*

┣━ *_AUTO TYPING_* ⤵️
┃   ┣ 6.1 📝 *Activate Auto Typing*
┃   ┗ 6.2 📝❌ *Deactivate Auto Typing*

┣━ *_AUTO COMMAND READ_* ⤵️
┃   ┣ 7.1 🖊️ *Activate Auto Command Read*
┃   ┗ 7.2 🖊️❌ *Deactivate Auto Command Read*
┗━━━━━━━━━━━━━━━━━━━━━━━┛

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/de82e3.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        reply(".restart");
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        reply(".restart");
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                        reply(".restart");
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                        reply(".restart");
                      break;
                    case '2.1':     
                        reply(".update AUTO_VOICE:true");
                        reply(".restart");
                        break;
                    case '2.2':     
                        reply(".update AUTO_VOICE:false");
                        reply(".restart");
                    break;
                    case '3.1':    
                        reply(".update AUTO_READ_STATUS:true");
                        reply(".restart");
                    break;
                    case '3.2':    
                        reply(".update AUTO_READ_STATUS:false");
                        reply(".restart");
                    break;
                    case '4.1': 
                    reply(".setautobio");
                    break;
                    case '4.2': 
                    reply(".setautobio");
                    break;
                    case '5.1': 
                    reply(".startnews");
                    break;
                    case '5.2': 
                    reply(".stopnews");
                    break;
                    case '6.1':      
                        reply(".update AUTO_TYPING:true");
                        reply(".restart");
                        break;
                    case '6.2':   
                        reply(".update AUTO_TYPING:false");
                        reply(".restart");
                    break;
                    case '7.1': 
                        reply(".update AUTO_READ_CMD:true");
                        reply(".restart");
                    break;
                    case '7.2':   
                        reply(".update AUTO_READ_CMD:false");
                        reply(".restart");
                    
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
