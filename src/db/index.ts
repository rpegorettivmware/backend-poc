import db from "./connection";
import './models/user'

export default async function dbConect () {
    await db.sync();
};