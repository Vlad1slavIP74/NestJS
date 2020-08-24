import { IAddress } from "../interfaces/address.interface";
import { Exclude } from 'class-transformer';

export class CreateUserDto {

    constructor(partial: Partial<CreateUserDto>) {
        Object.assign(this, partial);
      }
    
    readonly id : string;
    @Exclude()
    readonly password: string;
    readonly email: string;
    readonly avatar: string;
    readonly avatarId: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly gender: string;
    readonly address: IAddress;
    readonly profession: string;
    readonly searchField: string;
    readonly phone: string;
   
}