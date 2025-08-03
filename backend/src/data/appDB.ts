import { Sequelize } from 'sequelize-typescript';
import {DATABASE, PASSWORD} from '../util/config';

const sequelize  = new Sequelize({
  database: DATABASE,
  dialect: "mysql",
  username: "root",
  password: PASSWORD
});

async function connectDB () : Promise<Sequelize> {
  return await sequelize.sync({alter : true})
}
export default connectDB;
