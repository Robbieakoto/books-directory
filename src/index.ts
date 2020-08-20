import "reflect-metadata";
import { createConnection } from 'typeorm';
import "reflect-metadata";
import { Register } from "./register";
 
createConnection().then(async (connection) => {
    await Register().catch((err) => {console.log(err)});
}).catch(error => console.log(error));
