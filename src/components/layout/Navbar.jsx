import { Link } from "react-router-dom";
import { ShoppingCart, Moon } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop", icon: ShoppingCart },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-white border-b">
      <Link to="/" className="text-[1.7rem] font-sans">
        <span className="bg-[linear-gradient(135deg,var(--warning),var(--primary))] bg-clip-text text-transparent font-bold">
          <em>the</em> EDIT
        </span>
      </Link>

      <ul className="flex items-center gap-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                text-[0.95rem]
                font-medium
                text-muted-foreground
                no-underline
                transition-all duration-200
                hover:bg-primary/15
                hover:text-foreground
              "
            >
              {item.icon && <item.icon size={16} />}
              {item.name}
            </Link>
          </li>
        ))}

        <li>
          <button
            className="
              p-2
              rounded-md
              text-muted-foreground
              transition-all duration-200
              hover:bg-accent
              hover:text-foreground
            "
          >
            <Moon size={18} />
          </button>
        </li>
      </ul>
    </nav>
  );
}