import { useEffect } from "react";
import { useSesionStore as store } from "../stores/sesion.store.js";
import { useNavigate } from "react-router-dom";
export const Redirector = ({ loginRequired }) => {
  const isLogged = store((state) => state.isLogged);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginRequired && !isLogged) {
      navigate("/login");
    }
    if (!loginRequired && isLogged) {
      navigate("/");
    }
  }, [isLogged, loginRequired]);
};
