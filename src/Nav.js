import { Link, Outlet } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <div>
    <header>
      <nav className="flex-header">
        <Link className="h1" to="/math-magicians/">
          {' '}
          <h1>Math Magicians</h1>
          {' '}
        </Link>
        <Link className="nav-link" to="/math-magicians/"> Home </Link>
        {' | '}
        <Link className="nav-link" to="calculator">Calculator</Link>
        {' | '}
        <Link className="nav-link" to="quotes">Quotes</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Nav;
