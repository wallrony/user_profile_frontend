import HomePage from "../../ui/pages/BasePages/HomePage";
import LoginPage from "../../ui/pages/BasePages/LoginPage";
import RegisterPage from "../../ui/pages/BasePages/RegisterPage";
import EditUserPage from "../../ui/pages/UserPages/EditUserPage";
import UserInfoPage from "../../ui/pages/UserPages/UserInfoPage";
import AppRoute from "../models/AppRoute";

const baseRoutes: AppRoute[] = [
  {
    component: HomePage,
    path: '/',
  },
  {
    component: LoginPage,
    path: '/login',
  },
  {
    component: RegisterPage,
    path: '/register',
  },
];

const userRoutes: AppRoute[] = [
  {
    component: UserInfoPage,
    path: '/',
  },
  {
    component: EditUserPage,
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
