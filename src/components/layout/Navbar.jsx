import { Link, NavLink } from "react-router-dom";
import {
  ShoppingCart,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop", icon: ShoppingCart },
    { name: "Cart", path: "/cart" },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="border-b bg-primary-foreground">
      {/* TOP ROW */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        
        {/* LOGO */}
        <Link to="/" className="text-[1.7rem] font-sans">
          <span className="bg-[linear-gradient(135deg,var(--warning),var(--primary))] bg-clip-text text-transparent font-bold">
            <em>the</em> EDIT
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  text-[0.95rem]
                  font-semibold
                  no-underline
                  transition-all duration-200

                  ${
                    isActive
                      ? "bg-[color-mix(in_srgb,var(--primary)_20%,transparent)] text-primary"
                      : "text-muted-foreground hover:bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] hover:text-foreground"
                  }
                `}
              >
                {item.icon && <item.icon size={16} />}
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* THEME BUTTON */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                group
                p-2
                rounded-md
                text-muted-foreground
                transition-all duration-200
                hover:text-foreground
                hover:scale-110
                focus:outline-none
              "
            >
              {darkMode ? (
                <Sun
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              ) : (
                <Moon
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              )}
            </button>
          </li>
        </ul>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 md:hidden">
          
          {/* THEME BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              group
              p-2
              rounded-md
              text-muted-foreground
              transition-all duration-200
              hover:text-foreground
              focus:outline-none
            "
          >
            {darkMode ? (
              <Sun
                size={20}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
            ) : (
              <Moon
                size={20}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
            )}
          </button>

          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              p-2
              rounded-md
              text-muted-foreground
              transition-all duration-200
              hover:text-foreground
              hover:bg-accent
            "
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out

          ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="flex flex-col gap-2 px-4 pb-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-2
                px-4 py-3
                rounded-xl
                text-sm font-semibold
                transition-all duration-200

                ${
                  isActive
                    ? "bg-[color-mix(in_srgb,var(--primary)_20%,transparent)] text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }
              `}
            >
              {item.icon && <item.icon size={16} />}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}