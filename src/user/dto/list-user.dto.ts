import { IAddress } from "../interfaces/address.interface";

export class ListUserDto {
    readonly email: string;
    readonly avatarId: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly gender: string;
    readonly address: IAddress;
    readonly profession: string;
    readonly searchField: string;
    readonly phone: string;
    readonly password: string;
}