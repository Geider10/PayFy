import {Table, Column, Model, IsUUID, PrimaryKey, IsEmail, DataType, AllowNull, Length, Is, Default, Unique} from 'sequelize-typescript';
import {UserAttributes, UserCreationAttributes} from '../../types';
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

@Table({
        tableName : "user",
        timestamps : false,
    })
export class User extends Model<UserAttributes, UserCreationAttributes> {
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    declare id : string ;

    @AllowNull(false)
    @Length({min : 3, max : 50, msg : "Name must has length between 3 and 50 characters"})
    @Column(DataType.STRING(50)) 
    name! : string;

    @AllowNull(false)
    @Length({min : 3, max : 50, msg : "LastName must has length between 3 and 50 characters"})
    @Column(DataType.STRING(50))
    lastName! : string;

    @AllowNull(false)
    @Length({min : 7, max : 12, msg : "DNI must has length between 7 and 12 characters"})
    @Column(DataType.STRING(12))
    dni! : string;

    @AllowNull(false)
    @IsEmail
    @Unique
    @Column(DataType.STRING(100))
    email! : string;

    @AllowNull(false)
    @Is("passwordFormat",(value) => {
        if(!passwordRegex.test(value)) throw new Error("Password must compply format validate")
    })
    @Column(DataType.STRING(100))
    password! : string;
}