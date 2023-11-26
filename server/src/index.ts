import type {Application} from "express";
import DataBase from "./models";
import cors from 'cors'

const ORIGIN_URL = process.env.ORIGIN_URL || 'http://localhost:'
const CLIENT_PORT = process.env.CLIENT_PORT || '5173'
export default class Server {
    constructor(app: Application) {
        this.syncDataBase()
        const corsOptions = {
            origin: `${ORIGIN_URL}:${CLIENT_PORT}`
        };
        app.use(cors(corsOptions));
    }

    private syncDataBase() {
        const db = new DataBase()
        db.sequelize?.sync()
    }
}