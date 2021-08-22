import { createConnection } from "typeorm";
import { ENTITIES } from "../entities/index.entity";


export const connection = createConnection({
    type: "sqlite",
    database: "C:/sqlite3/db_roselica/roselicia.sqlite",    
    logging: true,
    entities: ENTITIES
});


// type: "mysql",
//     host: "localhost",
//     port: 3306,
//     database: "roselicia_db",
//     username: "root",
//     password: "root",
//     logging: true,
//     entities: ENTITIES