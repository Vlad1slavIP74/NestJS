import { Model }         from 'mongoose';
import { HttpException } from '@nestjs/common';

import { CreateUserDto } from '../dto/create-user.dto';
import { IUser }         from '../interfaces/user.interface';
import {userCreate}      from '../dumps'

export default class CreateHelper {
    constructor(private readonly userModel: Model<IUser>,
        private readonly createUserDto: CreateUserDto) {}

    async create(): Promise<CreateUserDto> {
        await this._isExist();
        const createdUser = new this.userModel(this.createUserDto);
        const saveUser:CreateUserDto = await createdUser.save()

        return new CreateUserDto(userCreate(saveUser));
    }

    async _isExist() : Promise<void> {
        const isExist = await this.userModel.exists({email: this.createUserDto.email})
        if(isExist) {
            throw new HttpException({
                error : 'FORMAT_ERROR',
                data : {email: 'EMAIL_ALREADY_EXIST'}
            }, 422);
        }
    }


}