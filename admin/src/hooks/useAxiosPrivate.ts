import { axiosPrivate } from "../config/axios";
import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { AuthContextType } from "../types/currentUser";

const useAxiosPrivate = () => {
  const { currentUser } = useAuth() as AuthContextType;

  
  return axiosPrivate;
};

export default useAxiosPrivate;
