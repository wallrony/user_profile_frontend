import AuthorizedUser from "../../core/models/AuhorizedUser";
import AuthCredentials from "../../core/models/AuthCredentials";
import RegisterInfo from "../../core/models/RegisterInfo";
import ServiceResponse from "../../core/models/ServiceResponse";
import AuthServiceAbstraction from "../abstraction/AuthServiceAbstraction";
import { findErrorByCode, findErrorByName } from "../../core/utils/GeneralUtils";
import { Facade } from "../../data/Facade";

class AuthService extends AuthServiceAbstraction {
  async login(credentials: AuthCredentials): Promise<ServiceResponse<AuthorizedUser>> {
    const result: ServiceResponse<AuthorizedUser> = {};

    try {
      result.data = await Facade().login(credentials);
    } catch(e) {
      if(e.response) {
        result.err = `${findErrorByCode(e.response.status)} - ${e.message}`;
      } else {
        result.err = `${findErrorByName(e.name)} - ${e.message}`;
      }
    }

    return result;
  }

  async register(info: RegisterInfo): Promise<ServiceResponse<AuthorizedUser>> {
    const result: ServiceResponse<AuthorizedUser> = {};

    try {
      result.data = await Facade().register(info);
    } catch(e) {
      result.err = `${findErrorByName(e.name)} - ${e.message}`;
    }

    return result;
  }
}

export default AuthService;
