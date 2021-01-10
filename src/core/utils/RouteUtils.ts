import AppRoute from "../models/AppRoute";

const baseRoutes: AppRoute[] = [];

const userRoutes: AppRoute[] = [];

export function getRoutes(isAuth: boolean) {
  if(isAuth) {
    return userRoutes;
  } else {
    return baseRoutes;
  }
}
