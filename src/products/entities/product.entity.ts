

import { type } from "os";
import { Entity, 
    PrimaryGeneratedColumn, 
     Column,
    ManyToOne,
    BaseEntity,
    OneToMany } from "typeorm";


@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({default:''})
  title: string;

  @Column({default:''})
  desc: string;
  
  @Column({default:''})
  price: string;
  
  @Column({default:''})
  image: string;
  
  @Column({type : 'timestamp', default:()=>'CURRENT_TIMESTAMP'})
  createdAd: Date;
  

   
  
}
