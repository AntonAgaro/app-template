import {config} from "../config/db.config";
import {Sequelize} from "sequelize-typescript";

export default class DataBase {
    public sequelize: Sequelize | undefined

    constructor() {
        this.connectToDatabase()
    }

    private async connectToDatabase() {
        this.sequelize = new Sequelize({
            database: config.DB,
            username: config.USER,
            password: config.PASSWORD,
            host: config.HOST,
            dialect: "postgres",
            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            },
        });

        await this.sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch((err) => {
                console.error("Unable to connect to the Database:", err);
            });
    }
}