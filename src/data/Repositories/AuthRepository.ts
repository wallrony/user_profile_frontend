import AuthorizedUser from "../../core/models/AuhorizedUser";
import AuthCredentials from "../../core/models/AuthCredentials";
import RegisterInfo from "../../core/models/RegisterInfo";
import AuthRepositoryAbstraction from "../IRepositories/AuthRepositoryAbstraction";
import { apiPost } from "./Client";

class AuthRepository extends AuthRepositoryAbstraction {
  async login(credentials: AuthCredentials): Promise<AuthorizedUser> {
    const result = await apiPost<AuthorizedUser>('/accounts/login', credentials);

    return result;
  }

  async register(info: RegisterInfo): Promise<AuthorizedUser> {
    const result = await apiPost<AuthorizedUser>('/accounts/register', info);

    return result;
  }
}

export default AuthRepository;
