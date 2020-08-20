import "reflect-metadata";
import { createConnection } from 'typeorm';
import {User} from "./entity/User";
import "reflect-metadata";
 
createConnection().then(async (connection) => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.email = "akotoro22@gmail.com";
    user.password = 'Chr1stals'

    await connection.manager.save(user);
    console.log({connection});

    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);
}).catch(error => console.log(error));
