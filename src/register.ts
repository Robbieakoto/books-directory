import { getRepository } from "typeorm"
import { User } from './entity/User';

export const  Register = async() => {
    const registerRepo = getRepository(User);
    const user = registerRepo.create({
        firstName : "Robbie",
        lastName : "Akoto",
        email : "akotoro22@gmail.com",
        password : "Chr1stals"
    });
    await registerRepo.save(user).catch(error => console.log(error));
    console.log("new user saved", user);
}