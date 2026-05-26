import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

export default function ShopFilters({
  activeCategory,
  setActiveCategory,
  searchText,
  setSearchText,
}) {
  const categories = [
    "All",
    "Clothes",
    "Electronics",
    "Furniture",
    "Shoes",
    "Miscellaneous",
  ];

  return (
    <div className="w-full mx-auto mb-8">
      <div
        className="
          flex flex-wrap items-center gap-4
          p-3
          bg-card
          border border-border
          rounded-2xl
        "
      >
        {/* SEARCH */}
        <div className="relative w-full md:w-60 shrink-0">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
            className="
              w-full
              pl-10 pr-9 py-2.5
              rounded-xl
              border border-border
              bg-background
              text-sm text-foreground
              focus:outline-none
              focus:border-primary
              transition-all
            "
          />

          {searchText && (
            <X
              size={16}
              onClick={() => setSearchText("")}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                text-muted-foreground
                cursor-pointer
              "
            />
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-1 flex-wrap gap-2 min-w-0">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  flex-1 basis-35
                  py-5
                  rounded-xl
                  border
                  text-base font-semibold
                  capitalize
                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-transparent border-border text-muted-foreground hover:bg-accent hover:text-foreground hover:border-primary"
                  }
                `}
              >
                {category}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}