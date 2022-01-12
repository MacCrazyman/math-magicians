import { Link, Outlet } from "react-router-dom";

const Nav = () => (
  <div>
    <header>
        <nav>
          <Link to ='/'></Link>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
  </div>
)

export default Nav;