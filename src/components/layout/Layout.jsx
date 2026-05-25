import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { toast } from "sonner";

export default function Layout() {
  const [cart, setCart] = useState([]);

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

  const getCartItem = (productId) => {
    return cart.find((item) => item.productId === productId);
  };

  return (
    <div>
      <Navbar numberOfItems={cart.length} />
      <Outlet
        context={{
          /* setNumberOfItems, */
          cart,
          handleAddToCart,
          getCartItem,
        }}
      />
    </div>
  );
}
