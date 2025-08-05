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
export type UserLogin = Pick<UserAttributes, "email" | "password">;
export type UserGet = Omit<UserAttributes, "id" | "password">;
export type UserUpdate = Omit<UserAttributes, "id" | "email" | "password">;

export interface MainResponse {
    ok : boolean;
    message : string;
}