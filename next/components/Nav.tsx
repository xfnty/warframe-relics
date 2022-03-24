import NavLink from './NavLink';

const Nav = () => {
  return (
    <>
      <header className="sticky top-0 bg-black p-2 text-sm sm:p-3 sm:text-base">
        <NavLink href="/relic-finder" className="hover:text-main">
          Relic Finder
        </NavLink>
        <NavLink href="/available-relics" className="hover:text-main ml-3">
          Available Relics
        </NavLink>
      </header>
    </>
  );
};

export default Nav;
