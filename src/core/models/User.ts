import Model from "./Model";

interface User extends Model {
  id: number;
  name: string;
  birthday: string;
  email: string;
  password: string;
  created_at?: string;
  updated_at?: string;
}

export default User;
