import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { useSesionStore } from "../stores/sesion.store.js";
import SesionHook, { refreshSesion } from "../hooks/sesion.hook.jsx";

const App = () => {
  const [dateTime, setDateTime] = useState("");
  const { increment, isLogged, timer } = useSesionStore((state) => state);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
      isLogged ? increment() : null;
    }, 1000);
    return () => clearInterval(interval);
  }, [increment, isLogged, timer]);

  SesionHook();
  return (
    <div
      onMouseMove={() => {
        timer >= 1200 ? refreshSesion() : null;
      }}
    >
      <Navbar dateTime={dateTime} />
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
