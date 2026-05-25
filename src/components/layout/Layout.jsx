import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout() {
  const [numberOfItems, setNumberOfItems] = useState(0);

  return (
    <div>
      <Navbar numberOfItems={numberOfItems} />
      <Outlet
        context={{
          setNumberOfItems,
        }}
      />
    </div>
  );
}
