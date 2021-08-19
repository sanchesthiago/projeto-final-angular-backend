
import { getConnection } from "typeorm";
import { User } from "../entities/user.entity";

export class UserRepository{

    static getAll() {
        const userRepository = getConnection().getRepository(User);
        return userRepository.find();
    }

    static getUserId(id: number){
        const userRepository = getConnection().getRepository(User); 
        return userRepository.findOne(id);
    }

    static findEmailAndPasswordUser(email: string, password: string){
        const userRepository = getConnection().getRepository(User);
        return userRepository.findOne({ where: { email, password } });
    }

    static create(user:User){
        const userRepository = getConnection().getRepository(User);
        return userRepository.insert(user);

    }

    static RemoveUser(id:number){
        const userRepository = getConnection().getRepository(User);
        return userRepository.delete({ id: id });
    }

    static update(id:number, user:User){
        const userRepository = getConnection().getRepository(User);
        return userRepository.update({ id: id }, user);
    }

}