import {Request, Response, Router } from "express";


import { UsersService } from "../service/user.service";
import { messageObject } from "../utils/message.utils";

const usersService = new UsersService();
const routes = Router();

routes.get('/', async (req: Request, res: Response) =>{
    const users = await usersService.getUser();
    res.send(users);
});

routes.post('/create', async (req: Request, res: Response)=>{
    const user= req.body;
    if(!user) {
        return res.status(400).send(messageObject("Estudante é obrigatório!"));
    }
    const userReturn = await usersService.createUser(user);
    res.status(201).send(userReturn);
});

routes.delete('/remove',async (req: Request, res: Response) =>{
    const userId = req.body.id;
    if(!userId){
        return res.status(400).send(messageObject("Id do estudante é obrigatório!" ));
    }
    const users = await usersService.removeUser(userId);
    res.send(users);
    return 
});

routes.put('/update', async( req:Request, res:Response)=>{
    const user = req.body;
    if(!user) {
        return res.status(400).send(messageObject("Usuário não encontrado!"));
    }
    const userReturn = await usersService.updateUser(user.id, user);
    res.send(userReturn);
});

routes.get('/details/:id', async( req: Request, res:Response)=>{
    const id = req.params.id;
    const user = await usersService.getUserById(Number(id));
    if(!user) {
        return res.status(409).send("Estudante não encontrado!");
    }
    
    res.send(user);
});

routes.post('/autenticate', async (req: Request, res:Response)=>{
    const autenticate = req.body;
    const user = await usersService.authenticate(autenticate.email, autenticate.password)
    if(!user) {
        return res.status(404).send(messageObject("Usuário não encontrado!"));
    }
    res.send(user);
});

// routes.get('/',(req:Request, res:Response)=>{
//     res.send({message: "User OK"})
// });
export default routes;