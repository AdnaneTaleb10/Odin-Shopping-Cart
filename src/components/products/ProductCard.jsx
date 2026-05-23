import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ title, slug, img, price }) {
  return (
    <div
      className="
        group
        w-full
        border border-border
        rounded-xl overflow-hidden
        bg-card
        flex flex-col
        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:border-primary
        hover:shadow-[0_12px_40px_color-mix(in_srgb,var(--primary)_25%,transparent)]
      "
    >
      {/* IMAGE */}
      <Link
        to={`/shop/${slug}`}
        className="aspect-square overflow-hidden bg-muted"
      >
        <img
          src={img}
          alt={title}
          className="
            w-full h-full object-cover
            transition-transform duration-300 ease-out
            group-hover:scale-105
          "
        />
      </Link>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-4 flex-1">
        {/* TITLE + PRICE */}
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold line-clamp-2 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-primary font-bold">${price}</p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-row items-center justify-between gap-3 mt-auto">
          {/* COUNTER */}
          <div className="flex items-center justify-center border border-border rounded-lg overflow-hidden w-fit sm:w-auto">
            <button className="px-3 py-2 font-bold hover:bg-accent transition">
              -
            </button>

            <input
              type="number"
              defaultValue={1}
              className="
                w-10
                text-center
                bg-transparent
                outline-none
                font-bold
                [appearance:textfield]
                [&::-webkit-outer-spin-button]:appearance-none
                [&::-webkit-inner-spin-button]:appearance-none
              "
            />

            <button className="px-3 py-2 font-bold hover:bg-accent transition">
              +
            </button>
          </div>

          {/* ADD BUTTON */}
          <button
            className="
              flex items-center justify-center gap-2
              bg-primary font-semibold text-primary-foreground
              px-6 py-2 rounded-lg
              w-fit sm:w-auto
              hover:opacity-90 active:scale-[0.98]
              transition
            "
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
