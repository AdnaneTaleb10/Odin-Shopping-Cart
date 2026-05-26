import { Trash2 } from "lucide-react";
import { useOutletContext } from "react-router-dom";

export default function CartItem({ item }) {
  const { handleAddToCart } = useOutletContext();

  const increaseQuantity = () => {
    handleAddToCart(
      {
        id: item.productId,
        title: item.title,
        price: item.price,
        image: item.image,
      },
      item.quantity + 1,
    );
  };

  const decreaseQuantity = () => {
    handleAddToCart(
      {
        id: item.productId,
        title: item.title,
        price: item.price,
        image: item.image,
      },
      Math.max(item.quantity - 1, 1),
    );
  };

  return (
    <div
      className="
        flex flex-col sm:flex-row items-center gap-5
        border border-border rounded-2xl
        p-4 bg-card
      "
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-28 object-cover rounded-xl"
      />

      {/* INFO */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-bold">{item.title}</h3>

        <p className="text-muted-foreground mt-1">${item.price} each</p>

        <p className="font-semibold mt-2">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-4">
        {/* COUNTER */}
        <div
          className="
            flex items-center border border-border
            rounded-lg overflow-hidden
          "
        >
          <button
            onClick={decreaseQuantity}
            className="
              flex items-center justify-center
              w-10 h-10
              text-lg font-bold
              hover:bg-accent
              transition
            "
          >
            -
          </button>

          <input
            type="number"
            value={item.quantity}
            readOnly
            className="
              w-12 text-center bg-transparent
              outline-none font-bold
              [appearance:textfield]
              [&::-webkit-outer-spin-button]:appearance-none
              [&::-webkit-inner-spin-button]:appearance-none
            "
          />

          <button
            onClick={increaseQuantity}
            className="
              flex items-center justify-center
              w-10 h-10
              text-lg font-bold
              hover:bg-accent
              transition
            "
          >
            +
          </button>
        </div>

        {/* REMOVE */}
        <button
          onClick={() =>
            handleAddToCart(
              {
                id: item.productId,
                title: item.title,
                price: item.price,
                image: item.image,
              },
              0,
            )
          }
          className="
            flex items-center justify-center
            w-10 h-10 rounded-lg
            hover:bg-red-500/10
            transition
          "
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
