import React, { useState, useEffect } from "react";
import { ReceiptSection } from "./RecieptSection .jsx";
import { SearchSection } from "./SearchSection .jsx";
import logo from "../images/logo.png";
import menu from "./data .js";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [receiptItems, setReceiptItems] = useState([]);

  useEffect(() => {
    const allDishes = menu[0].categories.flatMap((cat) => cat.dishes);
    setSearchResults(allDishes);
  }, []);

  const handleAddItem = (item) => {
    setReceiptItems((prev) => {
      const existing = prev.find(
        (i) => i.name.trim().toLowerCase() === item.name.trim().toLowerCase()
      );
      if (existing) {
        return prev.map((i) =>
          i.name.trim().toLowerCase() === item.name.trim().toLowerCase()
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  return (
<div className=" bg-[#b43129] text-white font-sans flex">
  {/* Left Section - Logo + Receipt (1/3) */}
  <div className="flex flex-col space-y-6 w-1/3 px-4">
    <div className="flex flex-row items-center pt-4">
      <img src={logo} alt="Food Qabila" className="h-20 w-20 rounded" />
      <h1 className="text-2xl font-bold pl-6">Food Qabila Restaurant</h1>
    </div>
    <div className="flex justify-center">
      <ReceiptSection
        receiptItems={receiptItems}
        onClearReceipt={()=>setReceiptItems([])}
      />
    </div>
  </div>

  {/* Right Section - Search (2/3) */}
  <div className="w-2/3 h-full bg-[#fef1e6] p-6 overflow-y-auto">
    <SearchSection
      setSearchResults={setSearchResults}
      searchResults={searchResults}
      onAddItem={handleAddItem}
    />
  </div>
</div>


  );
};

export default App;
