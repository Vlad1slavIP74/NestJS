import { Controller, Post, Body,Query,HttpCode,
     Get, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';

import {ListUserDto} from './dto/list-user.dto'

import { CreateUserDto } from './dto/create-user.dto';
import { UserService }   from './user.service'

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    @HttpCode(201)
    @UseInterceptors(ClassSerializerInterceptor)    
    async create(@Body('data') createUserDto: CreateUserDto): Promise<CreateUserDto> {
        const user = await this.userService.create(createUserDto) 
        // console.log(new CreateUserDto(user))
        
        return  new CreateUserDto(user);
    }
    @Get()
    async list(@Query() query: ListUserDto) : Promise<CreateUserDto[]> {
        return this.userService.list(query)
    }
}
