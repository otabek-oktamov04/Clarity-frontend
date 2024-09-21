import { useAuth } from "@/auth/useAuth";
import { ILoginFormInputs } from "@/utils/interfaces/auth.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import APIServices from "../services/services";

const useLogin = () => {
  const { login } = useAuth();
  return useMutation({
    mutationFn: (loginValue: ILoginFormInputs) => APIServices.login(loginValue),
    onSuccess: (response) => {
      const { access } = response.data.data;
      login(access);
    },
  });
};

const useGetMe = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: () => APIServices.getMe(),
  });
};

export { useLogin, useGetMe };
