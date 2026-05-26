import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div
      className="
        w-full max-w-xl
        flex flex-col items-center text-center
        border border-dashed border-border
        rounded-2xl
        bg-card
        px-8 py-14
      "
    >
      <div
        className="
          flex items-center justify-center
          w-16 h-16 rounded-full
          bg-muted mb-5
        "
      >
        <ShoppingCart className="text-muted-foreground" size={28} />
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-2">
        Your cart is empty
      </h2>

      <p className="text-muted-foreground mb-8 max-w-sm">
        Looks like you haven’t added anything yet. Start exploring products and
        add your favorites.
      </p>

      <Link
        to="/shop"
        className="
          inline-flex items-center justify-center
          px-5 py-3 rounded-xl
          bg-primary text-primary-foreground
          font-semibold

          hover:bg-primary/90
          hover:-translate-y-0.5
          hover:shadow-[0_4px_12px_hsl(var(--primary)/0.25)]

          active:translate-y-0
          transition-all duration-200
        "
      >
        Continue Shopping
      </Link>
    </div>
  );
}
