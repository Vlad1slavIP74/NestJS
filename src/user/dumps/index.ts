import { CreateUserDto } from '../dto/create-user.dto';

export function userCreate(user: CreateUserDto): CreateUserDto {
    return {
         "id" : user.id,
        "email" : user.email,
        "password" : user.password,
        "avatar" : user.avatar,
        "avatarId": user.avatarId,
        "lastName" : user.lastName,
        "firstName" : user.firstName,
        "gender" : user.gender,
        "address" : user.address,
        "profession" : user.profession,
        "searchField" : user.searchField,
        "phone" : user.phone
    }
}