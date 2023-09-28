const db = require('./connection')
require('./models/user')

async function dbConect() {
    await db.sync();
}

module.exports = dbConect;