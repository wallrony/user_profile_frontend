import AuthorizedUser from "../../core/models/AuhorizedUser";
import AuthCredentials from "../../core/models/AuthCredentials";
import RegisterInfo from "../../core/models/RegisterInfo";
import { createError } from "../../core/utils/GeneralUtils";
import Repository from "./Repository";

abstract class AuthRepositoryAbstraction extends Repository {
  async login(credentials: AuthCredentials): Promise<AuthorizedUser> {
    throw createError('unimplemented method error', 'you must implement this method');
  }

  async register(info: RegisterInfo): Promise<AuthorizedUser> {
    throw createError('unimplemented method error', 'you must implement this method');
  }
}

export default AuthRepositoryAbstraction;