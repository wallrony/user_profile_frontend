import HomePage from "../../ui/pages/BasePages/HomePage";
import LoginPage from "../../ui/pages/BasePages/LoginPage";
import RegisterPage from "../../ui/pages/BasePages/RegisterPage";
import EditUserPage from "../../ui/pages/UserPages/EditUserPage";
import UserInfoPage from "../../ui/pages/UserPages/UserInfoPage";
import AppRoute from "../models/AppRoute";

const baseRoutes: AppRoute[] = [
  {
    component: HomePage,
    name: 'Home',
    path: '/',
  },
  {
    component: LoginPage,
    name: 'Entrar',
    path: '/login',
  },
  {
    component: RegisterPage,
    name: 'Cadastrar',
    path: '/register',
  },
];

const userRoutes: AppRoute[] = [
  {
    component: UserInfoPage,
    name: 'Perfil',
    path: '/',
  },
  {
    component: EditUserPage,
    name: 'Editar Perfil',
    path: '/perfil'
  }
];

export function getRoutes(isAuth: boolean) {
  if(isAuth) {
    return userRoutes;
  } else {
    return baseRoutes;
  }
}
