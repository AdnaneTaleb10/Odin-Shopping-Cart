import { motion } from "framer-motion";

export default function Cart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center px-10 py-8"
    >
      <h1 className="text-6xl font-extrabold mb-6">Shopping Cart</h1>
      <p className="text-muted-foreground text-lg">
        Review your items below before proceeding to checkout.
      </p>

      <div></div>
    </motion.div>
  );
}
