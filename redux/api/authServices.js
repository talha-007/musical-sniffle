import { callAPi } from "./http-common";

const adminLogin = (data) => {
  return callAPi.post("/api/v1/admin/login", data);
};

const authService = {
  adminLogin,
};
export default authService;
