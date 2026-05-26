import ProductCard from "@/components/products/ProductCard";
import ShopFilters from "./components/ShopFilters";
import ShopHeader from "./components/ShopHeader";
import { allProducts } from "@/data/products";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category.name === activeCategory;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col items-center px-10 py-5">
      <ShopHeader />
      <ShopFilters
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {filteredProducts.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 w-full"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
      flex flex-col items-center justify-center
      text-center py-20
    "
        >
          <h2 className="text-2xl font-bold text-foreground">
            No products match
          </h2>

          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filters.
          </p>
        </motion.div>
      )}
    </div>
  );
}
