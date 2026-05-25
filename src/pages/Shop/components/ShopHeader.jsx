import { motion } from "framer-motion";

export default function ShopHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center p-6"
    >
      <h1
        className="
          font-sans
          font-bold
          text-[clamp(2rem,5vw,3.5rem)]
          leading-tight
          mb-2
          tracking-[-0.02em]

          bg-linear-to-r
          from-foreground
          to-muted-foreground

          bg-clip-text
          text-transparent
        "
      >
        The Collection
      </h1>

      <p
        className="
    text-[0.9rem]
    text-muted-foreground
    max-w-[50ch]
    mx-auto
    leading-[1.3]
  "
      >
        Timeless design and modern craftsmanship. Discover high-quality pieces
        for every occasion.
      </p>
    </motion.div>
  );
}
