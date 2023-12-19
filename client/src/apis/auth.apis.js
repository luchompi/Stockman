import baseApi from "./base.api";
import { useSesionStore as store } from "../stores/sesion.store";

export const obtenerDatosUsuario = () => {
  const { PAT } = store.getState();
  return baseApi.get(`users/me/`, {
    headers: {
      Authorization: `JWT ${PAT}`,
    },
  });
}
export const login = (data) => {
  return baseApi.post(`jwt/create`, data);
};

