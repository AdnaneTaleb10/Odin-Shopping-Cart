export default function CartSummary({ cart }) {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = 5;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div
      className="
        w-full lg:max-w-sm
        h-fit
        sticky top-24
        bg-card
        border border-border
        rounded-2xl
        p-6
        shadow-sm
      "
    >
      {/* HEADER */}
      <div className="pb-5 border-b border-border">
        <h2 className="text-2xl font-bold tracking-tight">
          Order Summary
        </h2>

        <p className="text-sm text-muted-foreground mt-1">
          Review your final order details.
        </p>
      </div>

      {/* SUMMARY ROWS */}
      <div className="flex flex-col gap-4 py-5">
        {/* SUBTOTAL */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Subtotal</p>

          <p className="font-semibold text-foreground">
            ${subtotal.toFixed(2)}
          </p>
        </div>

        {/* SHIPPING */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Shipping</p>

          <p className="font-semibold text-foreground">
            ${shipping.toFixed(2)}
          </p>
        </div>

        {/* TAX */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Tax (8%)</p>

          <p className="font-semibold text-foreground">
            ${tax.toFixed(2)}
          </p>
        </div>
      </div>

      {/* TOTAL */}
      <div
        className="
          flex items-center justify-between
          pt-5
          border-t border-border
        "
      >
        <p className="text-lg font-bold">Total</p>

        <p
          className="
            text-2xl font-extrabold
            bg-linear-to-r from-primary to-primary/70
            bg-clip-text text-transparent
          "
        >
          ${total.toFixed(2)}
        </p>
      </div>

      {/* CHECKOUT BUTTON */}
      <button
        className="
          mt-6
          w-full
          h-12
          rounded-xl
          font-semibold
          text-primary-foreground
          bg-primary
          transition-all duration-200

          hover:-translate-y-0.5
          hover:opacity-90
          hover:shadow-[0_8px_20px_hsl(var(--primary)/0.30)]

          active:translate-y-0
          cursor-pointer
        "
      >
        Proceed to Checkout
      </button>
    </div>
  );
}