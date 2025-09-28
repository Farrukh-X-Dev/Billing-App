import menuData from "./data .js";
import { useState, useEffect } from "react";

export const SearchSection = ({ searchResults, setSearchResults, onAddItem }) => {
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    const filtered = menuData[0].categories
      .map((category) => {
        const matchedDishes = category.dishes.filter((dish) =>
          dish.name.toLowerCase().includes(query)
        );
        if (matchedDishes.length > 0) {
          return { ...category, dishes: matchedDishes };
        }
        return null;
      })
      .filter(Boolean);

    setFilteredCategories(filtered);
    setSearchResults(filtered.flatMap((cat) => cat.dishes));
  };

  useEffect(() => {
    setFilteredCategories(menuData[0].categories);
    setSearchResults(menuData[0].categories.flatMap((cat) => cat.dishes));
  }, []);

  return (
    <div className="bg-[#fef1e6] text-black rounded-lg p-4 w-full overflow-auto max-h-screen">
      <input
        type="text"
        placeholder=" Enter dish name... "
        onChange={handleSearch}
        className="w-full p-2 mb-4 rounded border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-200"
      />

      <h2 className="text-lg font-semibold mb-2">ALL ITEMS</h2>

      {filteredCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-6">
          <h3 className="text-md font-bold mb-2">{category.name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {category.dishes.map((dish, dishIndex) => (
              <div
                key={dishIndex}
                className="bg-zinc-200 rounded-xl shadow-md p-3 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => onAddItem(dish)}
              >
                <img
                  src={dish.image || "https://via.placeholder.com/80"}
                  alt={dish.name}
                  className="h-16 w-16 object-cover rounded-full mb-2"
                />
                <span className="text-sm bg-red-600 text-white px-2 py-1 rounded-full font-bold w-full">
                  {dish.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
