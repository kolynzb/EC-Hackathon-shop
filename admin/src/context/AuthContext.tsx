import React, { useContext, useState, useEffect, createContext } from "react";
import AuthService from "../service/auth.service";
import { AuthContextType, CurrentUser } from "../types/currentUser";

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const login = async (
    email: CurrentUser["email"],
    password: string
  ): Promise<void> => await AuthService.login(email, password);

  const logout = () => {
    AuthService.logout;
    setCurrentUser(null);
  };

  useEffect(() => {
    let user = AuthService.getCurrentUser;
    // TODO: check for current user
    user ? setCurrentUser(user) : setCurrentUser(null);
    setLoading(false);
  }, []);

  const value: AuthContextType = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* {loading ? <_Loader /> : children} */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// were your going to use it
// const [user] = useContext(AuthContext)

// TODO: Login with Cookie or token
// TODO: connect axios

const _Loader = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ width: "100vh", height: "100vh" }}
    >
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
