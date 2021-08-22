import { getConnection } from "typeorm";
import { Product } from "../entities/product.entity";

export class productRepository {

    static getAllProduct(){
        const productRepository = getConnection().getRepository(Product);
        return productRepository.find();
    }

    static getProductById(id: number){
        const productRepository = getConnection().getRepository(Product)
        return productRepository.findOne(id);
    }

    static createProduct(product: Product){
        const productRepository = getConnection().getRepository(Product)
        return productRepository.insert(product);
    }

    static removeProduct(id:number) {
        const productRepository = getConnection().getRepository(Product)
        return productRepository.delete({id:id});
    }
    
    static updateProduct(id:number, product: Product) {
        const productRepository = getConnection().getRepository(Product)
        return productRepository.update({ id: id }, product);
    }
}
