import { Optional } from "sequelize";

export interface UserAttributes {
    id : string;
    name : string;
    lastName : string;
    dni : string;
    email : string;
    password : string;
}
export interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{}
export type UserSignup = Omit<UserAttributes, 'id'>;


export interface MainResponse {
    ok : boolean;
    message : string;
}