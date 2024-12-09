import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";


function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleDropdownClick = (type) => {
    navigate(`/dashboard?type=${type}`);
  };

  return (
    <header>
      <div id="menu-bar" className="fas fa-bars"></div>
      <Link to="/" className="logo">
        <img src="logodisdik.png" alt="Logo Disdik" className="logo-img" />
        <span>DATABASE</span> TIKomDik
      </Link>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/looker" className="nav-link">Looker</Link>
        <div
          className="nav-link dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          Dashboard 
          <span className={`arrow ${dropdownVisible ? "open" : ""}`}></span>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <button onClick={() => handleDropdownClick("siswa")}>Data Siswa</button>
              <button onClick={() => handleDropdownClick("guru")}>Data Guru</button>
              <button onClick={() => handleDropdownClick("sekolah")}>Data Sekolah</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
