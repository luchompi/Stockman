import { useEffect, useState } from "react";
import { useSesionStore as store } from "../stores/sesion.store";
import {
  infoMessage,
  questionMessageForPreventLogout,
} from "../components/messages";
import { refreshTokens } from "../apis/auth.apis";

export const refreshSesion = async () => {
  const { refreshPAT } = store.getState();
  const response = await refreshTokens();
  refreshPAT(response.data);
};

const SesionHook = () => {
  const { timer, logout, sesionWasStarted } = store((state) => state);
  const [showOnce, setShowOnce] = useState(false);

  useEffect(() => {
    if (timer >= 1800 && sesionWasStarted) {
      infoMessage("Sesión cerrada", "La sesión se ha cerrado por inactividad");
      logout();
      setShowOnce(false);
    } else if (timer == 1300) {
      setShowOnce(true);
    }
  }, [timer, logout, sesionWasStarted]);

  useEffect(() => {
    if (showOnce) {
      questionMessageForPreventLogout(
        "¿Sigues ahí?",
        "Has clic en el botón para prevenir cierre de sesión"
      )
        .then((response) => {
          refreshSesion();
        })
        .finally(() => {
          setShowOnce(false);
        });
    }
  }, [showOnce]);

  return <div />;
};

export default SesionHook;
