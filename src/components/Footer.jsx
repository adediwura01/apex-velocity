import "../css/Footer.css";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>NeoVault</h2>

            <p>
              Secure. Intelligent. Built for the future of digital investing.
            </p>

          </div>

          <div className="footer-links">

            <div>

              <h4>Product</h4>

              <a href="#">Features</a>
              <a href="#">Analytics</a>
              <a href="#">Dashboard</a>
              <a href="#">Security</a>

            </div>

            <div>

              <h4>Resources</h4>

              <a href="#">Documentation</a>
              <a href="#">Blog</a>
              <a href="#">Support</a>
              <a href="#">FAQs</a>

            </div>

            <div>

              <h4>Company</h4>

              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>

            </div>

            <div>

              <h4>Legal</h4>

              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>

            </div>

          </div>

        </div>

        <div className="footer-socials">

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaXTwitter />
              </a>

            </div>
        

        <div className="footer-bottom">

          <span>
            © 2026 NeoVault. All rights reserved.
          </span>

          <span>
            Adeniregun Emmanuel
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;