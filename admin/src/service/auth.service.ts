import axios from "../config/axios";
import TokenService from "./token.service";
import urls from "./api.routes";
import api from "./api";

class AuthService {
  static async login(email: string, password: string) {
    const response = await axios
      .post(urls.login, JSON.stringify({ email, password }), {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
        // TODO: fix with credentials error
      })
      .then((response) => {
        if (response.data.token) {
          TokenService.setUser(response.data.user);
        }
        return response.data;
      });

    return response;
  }

  static async logout() {
    TokenService.removeUser();
  }
  static getCurrentUser() {
    return TokenService.getUser();
  }
  static async register(username: string, email: string, password: string) {
    return api.post("/auth/signup", {
      username,
      email,
      password,
    });
  }
}

export default AuthService;
