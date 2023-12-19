import CardLayout from "../../layouts/CardLayout.jsx";
import Fingerprint from "../../assets/json/Fingerprint.json";
import { Redirector } from "../../middleware/sesion.middleware.jsx";
import { useState } from "react";
import { login, obtenerDatosUsuario } from "../../apis/auth.apis.js";
import { successMessage, errorMessage } from "../../components/messages.js";
import { useSesionStore } from "../../stores/sesion.store.js";
const LoginForm = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const setTokens = useSesionStore((state) => state.setTokens);
  const setLoading = useSesionStore((state) => state.setLoading);
  const setUserData = useSesionStore((state) => state.setUserData);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(data)
      .then((response) => {
        setTokens(response.data);
        successMessage("Hecho", "Inicio de sesión exitoso");
      })
      .then(() => {
        obtenerDatosUsuario().then((response) => {
          setUserData(response.data);
        });
      })
      .catch((error) => {
        errorMessage(error.response.data);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <h6>Ingrese sus credenciales para iniciar</h6>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Usuario <i className="bi bi-person-badge"></i>
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="username"
            required
            onChange={handleChange}
            aria-describedby="emailHelp"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Contraseña <i className="bi bi-key-fill"></i>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </>
  );
};

const Login = () => {
  Redirector(false);
  document.title = "Stockman | Login";
  return (
    <>
      <CardLayout
        cardHeader={"Stockman"}
        cardTitle={"Iniciar sesión"}
        cardComponent={<LoginForm />}
        cardIcon={Fingerprint}
      />
    </>
  );
};

export default Login;
