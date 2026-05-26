import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import EmptyCart from "./components/EmptyCart";

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
        <div>Cart content here</div>
      )}
    </motion.div>
  );
}