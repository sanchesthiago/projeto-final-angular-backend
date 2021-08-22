import { Product } from "../entities/product.entity";
import { productRepository } from "../repository/product.repository";
import { messageObject } from "../utils/message.utils";

export class productService{

    getProduct(){
        return productRepository.getAllProduct();
    }

    getProductId(id:number){
        return productRepository.getProductById(id);
    }

    async createProduct(product:Product){
        const products = await this.getProduct();
        if(!products){
            return messageObject("Produto não encontrado");
        }
        productRepository.createProduct(product);
        return messageObject("Produto incluido com sucesso");
    }

    async removeProduct(id:number){
        const product = await this.getProductId(id)
        if(!product){
            return messageObject("Produto não Encontrado")
        }
        productRepository.removeProduct(id);
        return messageObject("Produto Excluido com Sucesso") 
        
    }

    async updateProduct(id: number, product:Product){
        const products = await this.getProductId(id);
        if(!products){
            return messageObject("Produto não Encontrado")
        }
        productRepository.updateProduct(id,product);
        return messageObject("Produto Autualizado com Sucesso") 
    }

}