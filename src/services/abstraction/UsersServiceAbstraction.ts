import ServiceResponse from "../../core/models/ServiceResponse";
import User from "../../core/models/User";
import Service from "./Service";
import { createError } from "../../core/utils/GeneralUtils";

abstract class UsersServiceAbstraction extends Service {
  async show(id: number): Promise<ServiceResponse<User>> {
    throw createError('unimplemented method error', 'you must implement this method');
  }

  async update(data: User): Promise<ServiceResponse<User>> {
    throw createError('unimplemented method error', 'you must implement this method');
  }
}

export default UsersServiceAbstraction;
