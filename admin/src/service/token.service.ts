import { CurrentUser } from "../types/currentUser";

class TokenService {
  // TODO: correct tokens
  getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem("user") as string);
    return user?.refreshToken;
  }
  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("user") as string);
    return user?.accessToken;
  }
  updateLocalAccessToken(token: string) {
    let user = JSON.parse(localStorage.getItem("user") as string);
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUser() {
    return JSON.parse(localStorage.getItem("user") as string);
  }
  setUser(user: CurrentUser) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  removeUser() {
    localStorage.removeItem("user");
  }
}
export default new TokenService();
