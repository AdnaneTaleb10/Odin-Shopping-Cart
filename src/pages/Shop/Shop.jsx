import ShopFilters from "./components/ShopFilters";
import ShopHeader from "./components/ShopHeader";

export default function Shop() {
  return (
    <div className="flex flex-col items-center">
      <ShopHeader />
      <ShopFilters />
    </div>
  );
}
