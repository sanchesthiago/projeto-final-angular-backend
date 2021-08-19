import { createConnection } from "typeorm";
import { ENTITIES } from "../entities/index.entity";


export const connection = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: "roselicia_db",
    username: "root",
    password: "root",
    logging: true,
    entities: ENTITIES
});