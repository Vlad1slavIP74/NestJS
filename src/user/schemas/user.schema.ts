import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

import { genderEnum } from '../enums/gender.enum';
import { roleEnum } from '../enums/role.enum';
import { IUser } from '../interfaces/user.interface'
const saltRounds = 10;


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    avatar: { type: String, default: null },
    avatarId: { type: String, default: null },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true, enum: Object.values(genderEnum) },
    address: {
        country: { type: String, default: null },
        city: { type: String, default: null },
        addressLine1: { type: String, default: null },
        addressLine2: { type: String, default: null },
    },
    profession: { type: String, default: null },
    phone: { type: String, default: null },
    role: { type: [String], required: true, enum: Object.values(roleEnum) },
    password: { type: String, required: true, select: false },
});

UserSchema.index({ email: 1 }, { unique: true });

UserSchema.pre<IUser>('save', async function(next) {

    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;

    next();
})

UserSchema.methods.comparePassword = (plain: string) => {
    return bcrypt.compare(plain, this.password);
} 

export {UserSchema}