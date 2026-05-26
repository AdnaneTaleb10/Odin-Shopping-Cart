import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { toast } from "sonner";

export default function Layout() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    const productId = product.id;

    // REMOVE FLOW
    if (quantity === 0) {
      setCart((prev) => {
        const existing = prev.find((item) => item.productId === productId);
        if (!existing) return prev;

        // remove item
        const updatedCart = prev.filter((item) => item.productId !== productId);

        toast.warning(`${product.title} removed`, {
          id: `remove-${productId}`,
          action: {
            label: "Undo",
            onClick: () => {
              setCart((curr) => {
                const alreadyExists = curr.some(
                  (item) => item.productId === productId,
                );

                if (alreadyExists) return curr;

                return [...curr, existing];
              });

              toast.success("Restored", {
                id: `restore-${productId}`,
                closeButton: true,
              });
            },
          },
          closeButton: true,
        });

        return updatedCart;
      });

      return;
    }

    // ADD / UPDATE FLOW
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);

      // UPDATE
      if (existing) {
        toast.info("Cart updated", {
          id: `update-${productId}`,
          closeButton: true,
        });

        return prev.map((item) =>
          item.productId === productId ? { ...item, quantity } : item,
        );
      }

      // ADD
      toast.success("Added to cart", {
        id: `add-${productId}`,
        description: `${product.title} × ${quantity}`,
        closeButton: true,
      });

      return [
        ...prev,
        {
          productId,
          title: product.title,
          price: product.price,
          image: product.images?.[0],
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
          cart,
          handleAddToCart,
          getCartItem,
        }}
      />
    </div>
  );
}
