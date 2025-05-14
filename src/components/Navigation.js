import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <button
        className={`menu-button ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="메뉴"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("features");
            }}
          >
            서비스설명
          </a>
        </li>
        <li>
          <a
            href="#how"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("how");
            }}
          >
            이용방법
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("testimonials");
            }}
          >
            고객후기
          </a>
        </li>
        <li>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("cta");
            }}
          >
            대출신청
          </a>
        </li>
        <li>
          <Link to="/limit-calculator" onClick={() => setIsMenuOpen(false)}>
            한도계산
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
