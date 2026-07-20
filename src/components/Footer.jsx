import Medallion from "./Medallion.jsx";
import { primeiroNome } from "../data.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Medallion size={40} />
      <p>Com todo o carinho, para {primeiroNome}.</p>
    </footer>
  );
}
