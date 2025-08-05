import { Sequelize } from 'sequelize-typescript';
import {DATABASE, PASSWORD} from '../config/config';
import {User} from './model/user.model';

const sequelize  = new Sequelize({
  database: DATABASE,
  dialect: "mysql",
  username: "root",
  password: PASSWORD,
  models: [User],
  logging: false,
});

async function connectDB () : Promise<Sequelize> {
  return await sequelize.sync({alter : true})
}
export default connectDB;
