import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <>
      {/* ===== CSS INSIDE FILE ===== */}
      <style>{`
        .navbar {
          backdrop-filter: blur(12px);
          background: rgba(0, 0, 0, 0.75);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav-link {
          position: relative;
          font-size: 14px;
          color: #d1d5db;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 1px;
          background: linear-gradient(to right, #ffffff, #7dd3fc);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-icon {
          width: 30px;
          height: 30px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .nav-icon:hover {
          transform: scale(1.15);
          opacity: 0.9;
        }

        .icon-btn {
          padding: 6px;
        }
      `}</style>

      {/* ===== NAVBAR ===== */}
      <header className="navbar fixed top-0 left-0 w-full z-50">
        <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          
          {/* LOGO */}
          <img
            src="/logo.svg"
            alt="Apple logo"
            className="w-6 cursor-pointer"
          />

          {/* LINKS */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label }) => (
              <li key={label}>
                <a href={label} className="nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            <button className="icon-btn">
              <img
                src="/search.svg"
                alt="Search"
                className="nav-icon"
              />
            </button>
            <button className="icon-btn">
              <img
                src="/cart.svg"
                alt="Cart"
                className="nav-icon"
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
