import { isEmpty } from "rxjs";
import { Column, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    fullName : string     

    @Column()
    email : string
}
