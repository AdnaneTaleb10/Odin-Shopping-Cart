import ProductCard from "@/components/products/ProductCard";
import ShopFilters from "./components/ShopFilters";
import ShopHeader from "./components/ShopHeader";
import { allProducts } from "@/data/products";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...allProducts]);

  const handleAddToCart = (product, quantity) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product.id);

      // REMOVE ITEM (quantity = 0)
      if (quantity === 0) {
        toast.warning(`${product.title} Removed from cart`);

        return prev.filter((item) => item.productId !== product.id);
      }

      // UPDATE EXISTING
      if (existing) {
        toast.info("Cart updated");

        return prev.map((item) =>
          item.productId === product.id ? { ...item, quantity } : item,
        );
      }

      // ADD NEW
      toast.success("Added to cart", {
        description: `${product.title} × ${quantity}`,
      });

      return [
        ...prev,
        {
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity,
        },
      ];
    });
  };

  const handleFilter = (filterType) => {
    if (filterType !== "All") {
      setFilteredProducts(
        allProducts.filter((product) => product.category.name === filterType),
      );
    } else {
      setFilteredProducts(allProducts);
      console.log(allProducts);
    }
  };

  const getCartItem = (productId) => {
    return cart.find((item) => item.productId === productId);
  };

  return (
    <div className="flex flex-col items-center px-10 py-5">
      <ShopHeader />
      <ShopFilters handleFilter={handleFilter} />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 w-full"
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartItem={getCartItem(product.id)}
            onAddToCart={handleAddToCart}
          />
        ))}
      </motion.div>
    </div>
  );
}
