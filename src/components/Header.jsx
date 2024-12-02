
function Header() {
  return (
    <header>
      {/* Menu bar icon */}
      <div id="menu-bar" className="fas fa-bars"></div>

      {/* Logo */}
      <a href="#" className="logo">
        <span>VISUALISASI</span> TIKomDik
      </a>

      {/* Navigation links */}
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="/looker">Looker</a>
        <a href="/dashboard">Dashboard</a>
      </nav>

     

    </header>
  );
}

export default Header;
