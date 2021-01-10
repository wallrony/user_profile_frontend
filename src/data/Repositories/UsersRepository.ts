import User from "../../core/models/User";
import IUsersRepository from "../IRepositories/IUsersRepository";
import { apiGet, apiPut } from "./Client";

class UsersRepository extends IUsersRepository {
  async show(id: number): Promise<User> {
    const result: User = await apiGet(`/accounts/users/${id}`);

    return result;
  }

  async update(data: User): Promise<User> {
    const result: User = await apiPut(
      `/accounts/users/${data.id}`,
      data
    );

    return result;
  }
}

export default UsersRepository;