import User from "../../../core/models/User";
import { createError } from "../../../core/utils/GeneralUtils";

class UsersRepositoryAbstraction {
  async show(id: number): Promise<User> {
    throw createError('unimplemented method error', 'you must implement this method');
  }

  async update(data: User): Promise<User> {
    throw createError('unimplemented method error', 'you must implement this method');
  }
}

export default UsersRepositoryAbstraction;
