import { Link, NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <header className="header">
        <NavLink
          className={({ isActive }) => (isActive ? 'active link' : 'link')}
          to="/relic-finder"
        >
          Relic Finder
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active link' : 'link')}
          to="/available-relics"
        >
          Available Relics
        </NavLink>
      </header>

      <main className="contents">
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
