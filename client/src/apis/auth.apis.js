import baseApi from "./base.api";

export const login = (data) => {
  return baseApi.post(`jwt/create`, data);
};
