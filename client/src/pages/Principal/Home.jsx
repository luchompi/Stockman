import CardLayout from "../../layouts/CardLayout.jsx";
import Chart from "../../assets/json/Chart.json";
import { Redirector } from "../../middleware/sesion.middleware.jsx";
const Home = () => {
  document.title = "Stockman | Home";
  Redirector(false);
  return (
    <>
      <CardLayout
        cardHeader={"Stockman"}
        cardTitle={"Bienvenido a Stockman"}
        cardText={"Su sistema de inventario"}
        cardIcon={Chart}
      />
    </>
  );
};

export default Home;
