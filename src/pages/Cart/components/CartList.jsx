import CartItem from "./CartItem";

export default function CartList({ cart }) {
  return (
    <div className="flex flex-col gap-4 bg-background rounded-xl">
      {cart.map((item) => (
        <CartItem key={item.productId} item={item} />
      ))}
    </div>
  );
}
