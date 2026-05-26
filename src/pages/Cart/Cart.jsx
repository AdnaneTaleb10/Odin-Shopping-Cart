import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import EmptyCart from "./components/EmptyCart";
import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";

export default function Cart() {
  const { cart } = useOutletContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        flex flex-col items-center
        gap-10
        px-6 sm:px-10 lg:px-16
        py-10
      "
    >
      {/* HEADER */}
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          Shopping Cart
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
          Review your items below before proceeding to checkout.
        </p>
      </div>

      {/* CONTENT */}
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 w-full max-w-7xl mt-10">
          <CartList cart={cart}/>
          <CartSummary cart={cart}/>
        </div>
      )}
    </motion.div>
  );
}
