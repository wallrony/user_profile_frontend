import User from "../core/models/User";
import IUsersRepository from "./IRepositories/IUsersRepository";
import UsersRepository from "./Repositories/UsersRepository";

let usersRepo: IUsersRepository;

usersRepo = new UsersRepository();

class DatabaseFacade {
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
