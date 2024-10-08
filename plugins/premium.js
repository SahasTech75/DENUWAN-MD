const { cmd, commands } = require('../command');

const premiumGroups = []; 


// Command to add group to the premium list
cmd({
    pattern: "premium",
    desc: "Add this group to the premium list",
    use: ".premium",
    react: "⭐",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {
    const isAdmin = m.participant === mek.from;

    if (!isAdmin) {
        return reply("Only owner can add premium groups.\nContact Owner +94758900210");
    }

    if (!premiumGroups.includes(from)) {
        premiumGroups.push(from);
        reply("This group has been added to the premium list.");
    } else {
        reply("This group is already in the premium list.");
    }
});

// Command to remove a group from the premium list
cmd({
    pattern: "removepremium",
    desc: "Remove this group from the premium list",
    use: ".removepremium",
    react: "❌",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {
    const isAdmin = m.participant === mek.from; 

    if (!isAdmin) {
        return reply("Only admins can remove premium groups.");
    }

    const index = premiumGroups.indexOf(from);
    if (index > -1) {
        premiumGroups.splice(index, 1);
        reply("This group has been removed from the premium list.");
    } else {
        reply("This group is not in the premium list.");
    }
});

// Command to check if a group is premium
cmd({
    pattern: "ispremium",
    desc: "Check if this group is a premium group",
    use: ".ispremium",
    react: "🔍",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {
    if (premiumGroups.includes(from)) {
        reply("This group is a premium group.");
    } else {
        reply("This group is not a premium group.");
    }
});

module.exports = {
    premiumGroups
};
