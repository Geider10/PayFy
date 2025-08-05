import 'reflect-metadata';
import connectDB from './data/appDB';
import app from './app';
import {PORT} from './config/config';
import { AccessDeniedError, ConnectionError } from 'sequelize';

async function main(){
    try{
        await connectDB();
        console.log("Success connection with db");
        app.listen(PORT, ()=> {console.log("Server is running in port", PORT) })
    }
    catch(error){
        if (error instanceof AccessDeniedError) {
            console.error("Access denied to the database");
        } else if (error instanceof ConnectionError) {
            console.error("Failed to connect to the database");
        } else {
            console.error("Unexpected error:", error);
        }
    }
}

main()