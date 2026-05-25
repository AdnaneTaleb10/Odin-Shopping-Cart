import ProductCard from "@/components/products/ProductCard";
import ShopFilters from "./components/ShopFilters";
import ShopHeader from "./components/ShopHeader";
import { allProducts } from "@/data/products";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([...allProducts]);

  const { setNumberOfItems } = useOutletContext();

  useEffect(() => {
    setNumberOfItems(cart.length);
  }, [cart, setNumberOfItems]);

  const handleAddToCart = (product, quantity) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === product.id);

      // REMOVE
      if (quantity === 0) {
        toast.warning(`${product.title} Removed from cart`, {
          id: `remove-${product.id}`,
        });

        return prev.filter((item) => item.productId !== product.id);
      }

      // UPDATE
      if (existing) {
        toast.info("Cart updated", {
          id: `update-${product.id}`,
        });

        return prev.map((item) =>
          item.productId === product.id ? { ...item, quantity } : item,
        );
      }

      // ADD
      toast.success("Added to cart", {
        id: `add-${product.id}`,
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
