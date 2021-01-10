import Model from "./Model";

interface AuthCredentials extends Model {
  email: string;
  password: string;
}

export default AuthCredentials;
