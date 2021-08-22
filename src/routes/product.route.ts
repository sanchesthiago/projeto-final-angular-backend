import { Request, Response, Router } from "express";

import { productService } from "../service/product.service";
import { messageObject } from "../utils/message.utils";

const productsService = new productService();
const routes = Router();

routes.get('/', async (req: Request, res: Response) =>{
    const products = await productsService.getProduct();
    res.send(products);
});

routes.delete('/remove', async (req:Request, res: Response)=>{
    const productId= req.body.id;
    if(!productId){
        return res.status(400).send(messageObject("ID do Produto é Obrigatorio"))
    }
    const products= await productsService.removeProduct(productId);
    res.send(products);
});

routes.post('/create', async (req:Request, res:Response)=>{
    const product= req.body;
    if(!product) {
        return res.status(400).send(messageObject("Produto é obrigatório!"));
    }
    const productReturn = await productsService.createProduct(product);
    res.status(201).send(productReturn);
});

routes.get('/details/:id', async (req:Request, res:Response)=>{
    const id = req.params.id;
    const products = await productsService.getProductId(Number(id));
    if(!products) {
        return res.status(400).send(messageObject("ID do Produto é Obrigatorio"));
    }
    res.status(201).send(products);
});

routes.put('/update', async (req:Request, res:Response)=>{
    const productsId = req.body
    const products = await productsService.updateProduct(productsId.id, productsId);
    if(!products){
        return res.status(400).send(messageObject("ID do Produto é Obrigatorio"))
    }
    res.send (products);
});

export default routes;