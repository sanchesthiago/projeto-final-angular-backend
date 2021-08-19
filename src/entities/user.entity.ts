import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'name', type: 'varchar', length: 50, nullable: false })
    name?: string;

    @Column({ name: 'email', type: 'varchar', length:50, nullable:false})
    email?: string;

    @Column({name: 'password', type: 'varchar', length: 20, nullable: false })
    password?: string;

    @Column({name: 'inclusion_date', type:'date', nullable: true })
    inclusionDate?: Date | string;

    @Column ({name: 'valid_registration', type: 'boolean', nullable: true})
    validRegistration?: boolean;

    @Column({ name:'img', type:'text', nullable: true})
    img?: string;
}