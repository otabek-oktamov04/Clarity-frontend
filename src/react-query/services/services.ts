import { ILoginFormInputs } from "@/utils/interfaces/auth.interface";
import axiosInstance from "../../services/axios-config";

class APIServices {
  async login(loginValue: ILoginFormInputs) {
    const res = await axiosInstance.post("/user/login/", loginValue);
    return res;
  }
  async getMe() {
    const res = await axiosInstance.get("user/me");
    return res.data;
  }
}

const ServiceInstance = new APIServices();
export default ServiceInstance;
