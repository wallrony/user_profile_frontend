import AuthorizedUser from "../core/models/AuhorizedUser";
import AuthCredentials from "../core/models/AuthCredentials";
import RegisterInfo from "../core/models/RegisterInfo";
import User from "../core/models/User";
import AuthRepositoryAbstraction from "./repositories/abstraction/AuthRepositoryAbstraction";
import UsersRepositoryAbstraction from "./repositories/abstraction/UsersRepositoryAbstraction";
import AuthRepository from "./repositories/implementation/AuthRepository";
import UsersRepository from "./repositories/implementation/UsersRepository";

let authRepo: AuthRepositoryAbstraction;
let usersRepo: UsersRepositoryAbstraction;

usersRepo = new UsersRepository();
authRepo = new AuthRepository();

class DatabaseFacade {
  async login(credentials: AuthCredentials): Promise<AuthorizedUser> {
    return await authRepo.login(credentials);
  }

  async register(info: RegisterInfo): Promise<AuthorizedUser> {
    return await authRepo.register(info);
  }

  async showUser(id: number): Promise<User> {
    return await usersRepo.show(id);
  }

  async updateUser(data: User): Promise<User> {
    return await usersRepo.update(data);
  }
}

let Facade = () => {
  let facadeInstance: DatabaseFacade;

  Facade = () => {
    return facadeInstance;
  }

  facadeInstance = new DatabaseFacade();

  return facadeInstance;
}

export {
  Facade
}
