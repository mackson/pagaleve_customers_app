import { 
  Entity,
  Column,
  ObjectIdColumn,
  ObjectID
} from "typeorm";

import {
  IsNotEmpty,
  Length,
  MaxLength
} from "class-validator";

@Entity('customers')
export class Customer {

  @ObjectIdColumn()
  public readonly  id: ObjectID;

  @Column()
  @IsNotEmpty({ message:'Customer Name is required' })
  @Length(3, 255, {message:'The Name should be at least 3 and no longer than 255 characters'})
  public name: string;

  @Column()
  @IsNotEmpty({message:'Document is required'})
  @MaxLength(18, { message: 'The document should be no longer than 18 characters',})
  public document: string;

  @Column()
  @IsNotEmpty({message:'Customer type is required'})
  public type: string;

  @Column()
  @IsNotEmpty({message:'Wallet value is required'})
  public wallet: number;

  constructor(props: Omit<Customer, 'id'>, id?: string){
    // Assign props for all object attributes
    Object.assign(this, props);
   
  }
}