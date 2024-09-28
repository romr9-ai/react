import CartWidget from '../CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Post-Tattoo Care</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/category/cremas">Cremas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/lociones">Lociones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/fragancias">Fragancias</Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
