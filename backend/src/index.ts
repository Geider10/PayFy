import connectDB from './data/appDB';
import app from './app';
import {PORT} from './util/config';
import { AccessDeniedError, ConnectionError } from 'sequelize';

async function main(){
    try{
        await connectDB();
        console.log("Success connection with db");
        app.listen(PORT, ()=> {console.log("Server is running in port", PORT) })
    }
    catch(error){
        if (error instanceof AccessDeniedError) {
            console.error("Access denied to the database. Please check your credentials.");
        } else if (error instanceof ConnectionError) {
            console.error("Failed to connect to the database. Please check your connection settings.");
        } else {
            console.error("Unexpected error:", error);
        }
    }
}

main()