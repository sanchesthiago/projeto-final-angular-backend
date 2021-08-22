import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'product'})
export class Product{
    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;
    
    @Column({ name: 'title', type: 'varchar', length: 50, nullable: false })
    title?: string;
    
    @Column({name:'weight', type:'varchar', length: 15, nullable:false })
    weight?: string;

    @Column({name:'img', type:'text' })
    img?: string;

    @Column({name:'price', type:'bigint', nullable: false})
    price?: number;

    @Column({ name: 'supply', type: 'numeric', nullable:false})
    supply?: number;
}