import { Outlet, Link } from "react-router-dom";
import './NavBar/Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link">Registration</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </nav>

      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
