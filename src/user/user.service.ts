import { Injectable, Controller } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'

import {IUser} from './interfaces/user.interface'
import { CreateUserDto } from './dto/create-user.dto';
import {ListUserDto} from './dto/list-user.dto'
import CreateHelper from './domainService/CreateHelper'


@Controller('/users')
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>){}

    async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
        const createHelper:CreateHelper = new CreateHelper(this.userModel, createUserDto);
        const user = await createHelper.create();
        return user
    }
    async find(id: string): Promise<CreateUserDto> {
        return this.userModel.findById(id).exec();
    }

    async list(params:ListUserDto ) : Promise<CreateUserDto[]> {
        console.log(params)
        return this.userModel.find().exec();
    }
}