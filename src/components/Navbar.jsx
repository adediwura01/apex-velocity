import "../css/navbar.css";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <div className="logo-icon">
          <ShieldCheck size={18} />
        </div>

        <h2>
          Neo<span>Vault</span>
        </h2>

      </div>

      <nav>

        <a href="#">Products</a>

        <a href="#">Developers</a>

        <a href="#">Security</a>

        <a href="#">Pricing</a>

      </nav>

      <button>

        Launch App

        <ArrowUpRight size={16} />

      </button>

    </header>
  );
}

export default Navbar;