import { CurrentUser } from "./currentUser";

export interface LoginProps {
  email: CurrentUser["email"];
  password: String;
}
