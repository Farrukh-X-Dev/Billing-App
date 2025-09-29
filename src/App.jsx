import React, { useState, useEffect } from "react";
import { ReceiptSection } from "./RecieptSection .jsx";
import { SearchSection } from "./SearchSection .jsx";
import logo from "../images/logo.png";
import menu from "./data .js";
import { Loader } from "lucide-react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [receiptItems, setReceiptItems] = useState([]);
  const [Loading , setLoading] = useState(false)

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
      {/* Left Section */}
      <div className="flex flex-col space-y-6 w-1/3 px-4">
        <div className="flex flex-row items-center pt-4">
          <img src={logo} alt="Food Qabila" className="h-20 w-20 rounded" />
          <h1 className="text-2xl font-bold pl-6">Food Qabila Restaurant</h1>
          <button
          onClick={() => {
    setLoading(true);
    const link = document.createElement("a");
    link.href =
      "https://github.com/Farrukh-X-Dev/Billing-App/releases/download/v1.0.0/Food.Qabila.Setup.1.0.0.exe";
    link.setAttribute("download", "Food-Qabila-Setup.exe");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setLoading(false), 2000);
  }}
  className="ml-6 bg-white text-[#b43129] font-semibold px-4 py-2 rounded-xl shadow-md hover:bg-[#fef1e6] hover:text-[#7a1f19] transition duration-300"
>
  {Loading ? (
    <Loader className="animate-spin" />
  ) : (
    <span>Download Desktop App</span>
  )}
</button>

        </div>
        <div className="flex justify-center">
          <ReceiptSection
            receiptItems={receiptItems}
            onClearReceipt={() => setReceiptItems([])}
          />
        </div>
      </div>

      {/* Right Section  */}
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
