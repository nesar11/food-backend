import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;  

    @Column({default:''})
    firstName: string;

    @Column({default:''})
    lastName: string;

    @Column({default:''})
    username: string;

    @Column({default:''})
    email: string;

    @Column({default:''})
    password: string;

    @Column({default:'true'})
    isDeleted: boolean;

    @Column({default:'true'})
    isActive: boolean;



    @Column({type : 'timestamp', default:()=>'CURRENT_TIMESTAMP'})
    createdAd: Date;
  
    



}
