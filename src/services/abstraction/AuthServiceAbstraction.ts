import AuthorizedUser from "../../core/models/AuhorizedUser";
import AuthCredentials from "../../core/models/AuthCredentials";
import RegisterInfo from "../../core/models/RegisterInfo";
import ServiceResponse from "../../core/models/ServiceResponse";
import Service from "./Service";
import { createError } from "../../core/utils/GeneralUtils";

abstract class AuthServiceAbstraction extends Service {
  async login(credentials: AuthCredentials): Promise<ServiceResponse<AuthorizedUser>> {
    throw createError('unimplemented method error', 'you must implement this method');
  }

  async register(info: RegisterInfo): Promise<ServiceResponse<AuthorizedUser>> {
    throw createError('unimplemented method error', 'you must implement this method');
  }
}

export default AuthServiceAbstraction;
