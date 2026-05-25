import { useState } from "react";
import { allProducts } from "@/data/products";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const product = allProducts.find((item) => item.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);

  // Related products: same category, excluding current
  const relatedProducts = allProducts.filter(
    (item) => item.category.name === product?.category.name && item.id !== product?.id
  );

  if (!product) {
    return (
      <div className="p-10 text-center text-muted-foreground">
        Product not found
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-4 items-center w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10"
    >
      {/* BACK */}
      <Link
        to="/shop"
        className="
          self-end inline-flex pr-2 items-center gap-2
          text-muted-foreground font-semibold text-base sm:text-lg
          hover:text-primary hover:underline transition-colors
        "
      >
        <ArrowLeft size={18} />
        Back to Shop
      </Link>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6 lg:gap-10 items-start w-full">

        {/* LEFT: IMAGES */}
        <div className="flex flex-col items-center gap-4">
          {/* MAIN IMAGE */}
          <div className="w-full aspect-square overflow-hidden rounded-xl border border-border bg-muted shadow-lg">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="grid grid-cols-3 gap-3 w-full">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`
                  p-0 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-transparent leading-none
                  ${selectedImage === img
                    ? "border-primary shadow-[0_0_0_2px_hsl(var(--primary))]"
                    : "border-transparent hover:border-primary/50"}
                `}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full aspect-square object-cover block"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: INFO CARD */}
        <div className="
          flex flex-col justify-between gap-4
          bg-card border border-border rounded-xl p-6 sm:p-8
          box-border h-full
        ">
          {/* TITLE + PRICE */}
          <div className="pb-4 border-b border-border">
            <h1 className="
              font-bold mb-3 leading-tight tracking-tight
              text-[clamp(1.4rem,3.5vw,2.2rem)]
              bg-linear-to-br from-foreground to-muted-foreground
              bg-clip-text text-transparent
            ">
              {product.title}
            </h1>
            <p className="
              font-bold m-0 text-[clamp(1.3rem,2.5vw,1.75rem)]
              bg-linear-to-br from-primary to-primary/70
              bg-clip-text text-transparent
            ">
              ${product.price}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="flex-1 flex items-center">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-[1.05rem]">
              {product.description}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center flex-wrap gap-4 pt-4 border-t border-border">

            {/* QUANTITY */}
            <div className="
              flex items-center justify-between
              border border-border rounded-lg overflow-hidden
              bg-background transition-all duration-200
              focus-within:border-primary focus-within:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)]
              shrink-0
            ">
              <button
                onClick={() => setQuantity((q) => Math.max(0, q - 1))}
                className="
                  flex items-center justify-center
                  w-10 h-10 text-xl font-semibold
                  hover:text-primary hover:scale-125 transition-all duration-200
                  bg-transparent border-none cursor-pointer text-foreground
                "
              >
                –
              </button>
              <input
                type="number"
                min="0"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
                className="
                  w-12 h-10 text-center bg-transparent border-x border-border
                  outline-none font-semibold text-foreground text-sm
                  [appearance:textfield]
                  [&::-webkit-outer-spin-button]:appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none
                "
              />
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="
                  flex items-center justify-center
                  w-10 h-10 text-xl font-semibold
                  hover:text-primary hover:scale-125 transition-all duration-200
                  bg-transparent border-none cursor-pointer text-foreground
                "
              >
                +
              </button>
            </div>

            {/* ADD TO CART */}
            <button className="
              flex-1 flex items-center justify-center gap-2
              h-10 px-6 rounded-lg font-semibold text-white text-sm
              bg-linear-to-br from-primary to-primary/80
              shadow-[0_4px_12px_hsl(var(--primary)/0.25)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_20px_hsl(var(--primary)/0.35)]
              hover:from-primary/90 hover:to-primary
              active:translate-y-0
              focus:outline-2 focus:outline-primary/50 focus:outline-offset-2
              transition-all duration-200 cursor-pointer border-none whitespace-nowrap
            ">
              <ShoppingCart size={16} />
              Add to Cart
            </button>

          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full mt-8"
        >
          <h2 className="
            text-center font-bold mb-8
            text-[clamp(1.5rem,3vw,2rem)] tracking-tight
            bg-linear-to-br from-foreground to-muted-foreground
            bg-clip-text text-transparent
          ">
            You might also like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 w-full">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                cartItem={undefined}
                onAddToCart={() => {}}
              />
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  );
}