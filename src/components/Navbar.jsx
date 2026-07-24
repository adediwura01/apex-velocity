import "../css/navbar.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ArrowUpRight, X} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu opens
  useEffect(() => {

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };

}, [isOpen]);

  useEffect(() => {

  const handleEscape = (e) => {

    if (e.key === "Escape") {

      setIsOpen(false);

    }

  };

  window.addEventListener("keydown", handleEscape);

  return () => {

    window.removeEventListener("keydown", handleEscape);

  };

}, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },

    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="navbar">

        <div className="logo">

          <div className="logo-icon">
            <ShieldCheck size={18} />
          </div>

          <h2>
            Neo<span>Vault</span>
          </h2>

          

        </div>

        <nav className="desktop-nav">

          <a href="#platform-preview">Products</a>

          <a href="#features">Developers</a>

          <a href="#analytics">Security</a>

          <a href="#cta">Pricing</a>

        </nav>

        <button className="desktop-btn">

          Launch App

          <ArrowUpRight size={16} />

        </button>

        <button
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </header>

      <AnimatePresence>

        {isOpen && (

          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >

            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="mobile-header">
                
                <div className="logo">
                  <div className="logo-icon">
                   <ShieldCheck size={18} />
                </div>

                <h2>
                  Neo<span>Vault</span>
                </h2>

                </div>
                <button className="mobile-close" onClick={closeMenu} 
                aria-label="Close Menu">
                  <X size={34} />
                </button>

              </div>

              <motion.a
                href="#platform-preview"
                variants={itemVariants}
                onClick={closeMenu}
              >
                Products
              </motion.a>

              <motion.a
                href="#features"
                variants={itemVariants}
                onClick={closeMenu}
              >
                Developers
              </motion.a>

              <motion.a
                href="#analytics"
                variants={itemVariants}
                onClick={closeMenu}
              >
                Security
              </motion.a>

              <motion.a
                href="#cta"
                variants={itemVariants}
                onClick={closeMenu}
              >
                Pricing
              </motion.a>

              <motion.button
                variants={itemVariants}
                className="mobile-btn"
                onClick={closeMenu}
              >

                Launch App

                <ArrowUpRight size={16} />

              </motion.button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;