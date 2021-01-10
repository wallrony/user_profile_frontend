import ServiceResponse from "../../core/models/ServiceResponse";
import User from "../../core/models/User";
import { findErrorByName } from "../../core/utils/GeneralUtils";
import { Facade } from "../../data/Facade";
import UsersServiceAbstraction from "../abstraction/UsersServiceAbstraction";

class UsersService extends UsersServiceAbstraction {
  async show(id: number): Promise<ServiceResponse<User>> {
    const result: ServiceResponse<User> = {};

    try {
      result.data = await Facade().showUser(id);
    } catch(e) {
      result.err = `${findErrorByName(e.name)} - ${e.message}`;
    }

    return result;
  }

  async update(data: User): Promise<ServiceResponse<User>> {
    const result: ServiceResponse<User> = {};

    try {
      result.data = await Facade().updateUser(data);
    } catch(e) {
      result.err = `${findErrorByName(e.name)} - ${e.message}`;
    }

    return result;
  }
}

export default UsersService;
