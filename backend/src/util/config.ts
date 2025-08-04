import 'dotenv/config';

export const PORT = process.env.PORT || process.env.PORT_DEV;
export const DATABASE = process.env.DATABASE || process.env.DATABASE_DEV;
export const USERNAME = process.env.USERNAME || process.env.USERNAME_DEV;
export const PASSWORD = process.env.PASSWORD || process.env.PASSWORD_DEV;
export const SECRET_KEY = process.env.SECRET_KEY || process.env.SECRET_KEY_DEV;