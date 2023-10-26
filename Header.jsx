import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav>
      <div className="navbar">
        <ul>
          <li>
            <a>Dev@Deakin</a>
          </li>
        </ul>
        <div className="search-box">
          <input type="text" name="search" id="Search" placeholder="Search" />
        </div>
        <ul>
            <Link classname ="button" to="/login">Login</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
