import Model from "./Model";
import User from "./User";

interface AuthorizedUser extends Model {
  auth_token?: string;
  user?: User;
}

export default AuthorizedUser;
