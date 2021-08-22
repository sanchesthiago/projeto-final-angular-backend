import { User } from "../entities/user.entity";
import { UserRepository } from "../repository/user.repository";
import { messageObject } from "../utils/message.utils";

export class UsersService{

    user: Array<User>=[];

    getUser(){
        return UserRepository.getAll();
    }

    getUserById(id: number){
        return UserRepository.getUserId(id);
    }

    async createUser(user:User){
        const users = await this.getUser();
        if(!users){
            return messageObject("nao encontrado");
        }
        await UserRepository.create(user); 
        return messageObject("incluido com sucesso");
    }

    async removeUser(id:number){
        const user = await this.getUserById(id);
        if(!user) {
            return messageObject("Usuário não encontrado!");
        }
        await UserRepository.RemoveUser(id);
        return messageObject("Usuário excluído com sucesso!");
    }

    async updateUser (id:number, user:User ){
        const userFind = await this.getUserById(id);
        if(!userFind){
            return messageObject("Usuário não encontrado!")
        }
        await UserRepository.update (id, user);
        return messageObject("Usuário Atualizado com sucesso")
    }

    authenticate (email: string, password: string){
        return UserRepository.findEmailAndPasswordUser(email,password);

    }
}