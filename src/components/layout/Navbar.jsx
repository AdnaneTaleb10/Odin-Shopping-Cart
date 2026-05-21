import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop", icon: ShoppingCart },
    { name: "Cart", path: "/cart" },
  ];

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-background border-b">
      {/* LOGO */}
      <Link to="/" className="text-[1.7rem] font-sans">
        <span className="bg-[linear-gradient(135deg,var(--warning),var(--primary))] bg-clip-text text-transparent font-bold">
          <em>the</em> EDIT
        </span>
      </Link>

      {/* NAV ITEMS */}
      <ul className="flex items-center gap-10">
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
                text-muted-foreground
                no-underline
                transition-all duration-200

                ${!isActive && "hover:bg-primary/15 hover:text-foreground"}
                
                

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
      hover:bg-transparent
      hover:scale-110
      hover:shadow-none
      focus:outline-none
      active:outline-none
    "
          >
            {darkMode ? (
              <Sun
                size={20}
                className="
                  transition-transform duration-300
                  group-hover:rotate-15
                "
              />
            ) : (
              <Moon
                size={20}
                className="
                  transition-transform duration-300
                  group-hover:rotate-15
                "
              />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}
