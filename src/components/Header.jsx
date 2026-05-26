import { NavLink } from "react-router-dom";
const Header = () => (
  <nav className="navbar navbar-expand-lg bg-white border-bottom">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        Company User Database
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="#navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/statistics">
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Header;
