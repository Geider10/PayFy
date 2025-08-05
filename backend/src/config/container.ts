import {container} from 'tsyringe';
import {Util} from '../util/util';
import {UserRepository} from '../repository/user.repository';
import {UserService} from '../service/user.service';
import {UserController} from '../controller/user.controller';

container.registerSingleton(Util);
container.registerInstance("IUserRepository",new UserRepository());
container.registerSingleton(UserService);   
container.registerSingleton(UserController)

export default container;