
import '../css/Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="logo">DASHBOARD-LIGHT DECODER</a>
        <div className="navmenu">
          <ul className="navlist">
            <li className="navitem">
              <a href="#">About Us</a>
            </li>
            <li className="navitem">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
