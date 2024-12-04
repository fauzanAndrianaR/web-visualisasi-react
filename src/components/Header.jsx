import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      {/* Menu bar icon */}
      <div id="menu-bar" className="fas fa-bars"></div>

      {/* Logo */}
      <Link to="/" className="logo">
      <img src="logodisdik.png" alt="Logo Disdik" className="logo-img" />
        <span>VISUALISASI</span> TIKomDik
      </Link>

      {/* Navigation links */}
      <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/looker" className="nav-link">Looker</Link>
      <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </nav>

     

    </header>
  );
}

export default Header;
