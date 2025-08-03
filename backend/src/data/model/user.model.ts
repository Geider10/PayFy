import {Table, Column, Model, HasMany, IsUUID, PrimaryKey, IsEmail, Min, NotEmpty, Max} from 'sequelize-typescript';

@Table
export class User extends Model{
    @Column
    @IsUUID(4)
    @PrimaryKey
    id! : string ;

    @Column
    @NotEmpty({msg : "Name is required"})
    @Max(50)
    name! : string;

    @Column 
    @NotEmpty({msg : "Last name is required"})
    @Max(50)
    lastName! : string;

    @Column 
    @IsEmail
    email! : string;

    @Column
    password! : string;

}