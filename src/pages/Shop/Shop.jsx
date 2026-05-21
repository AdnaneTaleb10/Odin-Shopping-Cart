import ProductCard from "@/components/products/ProductCard";
import ShopFilters from "./components/ShopFilters";
import ShopHeader from "./components/ShopHeader";
import { allProducts } from "@/data/products";

export default function Shop() {
  return (
    <div className="flex flex-col items-center px-10 py-5">
      <ShopHeader />
      <ShopFilters />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 w-full">
        {allProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            slug={product.slug}
            img={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
