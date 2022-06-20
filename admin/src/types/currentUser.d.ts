// @types.currentUser.ts
export interface CurrentUser {
  _id: string;
  username: string;
  email: string;
  phoneNumber: string;
  role: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type AuthContextType = {
  currentUser: CurrentUser | null;
  login: (email: CurrentUser["email"], password: email) => Promise<void>;
  logout: () => void;
};
