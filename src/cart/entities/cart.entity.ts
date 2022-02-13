import {  BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    Entity,
    OneToOne,
    JoinColumn, } from "typeorm";
    import { Profile } from '../../profile/entities/profile.entity';

@Entity('carts')
export class Cart {
 
}
