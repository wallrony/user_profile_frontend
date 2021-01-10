import User from "../../../core/models/User";
import IUsersRepository from "../abstraction/UsersRepositoryAbstraction";
import { apiGet, apiPut } from "../Client";

class UsersRepository extends IUsersRepository {
  async show(id: number): Promise<User> {
    const result = await apiGet<User>(`/accounts/users/${id}`);

    return result;
  }

  async update(data: User): Promise<User> {
    const result = await apiPut<User>(
      `/accounts/users/${data.id}`,
      data
    );

    return result;
  }
}

export default UsersRepository;