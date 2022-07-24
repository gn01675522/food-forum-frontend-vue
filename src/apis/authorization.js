import { apiHelper } from "../utils/helpers.js";

export default {
  signin({ email, password }) {
    return apiHelper.post("/signin", {
      email,
      password,
    });
  },
  signup({ formData }) {
    return apiHelper.post("/signup", {
      ...formData,
    });
  },
};
