import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const ProductSearch = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const supplier = [
    { material: "Cement", category: "Construction", organization: "BuildCo", rating: 4.5 },
    { material: "Pipes", category: "Plumbing", organization: "FlowMaster", rating: 4.2 },
    { material: "Bricks", category: "Construction", organization: "BrickMakers Inc.", rating: 4.7 },
    { material: "Steel Rods", category: "Construction", organization: "MetalWorks", rating: 4.8 },
    { material: "Paint", category: "Decor", organization: "ColorWave", rating: 4.3 },
    { material: "Tiles", category: "Flooring", organization: "TileXpress", rating: 4.6 },
    { material: "Electrical Cables", category: "Electrical", organization: "PowerLine", rating: 4.4 },
    { material: "Wooden Beams", category: "Woodwork", organization: "WoodCrafts", rating: 4.1 },
    { material: "Glass Sheets", category: "Windows", organization: "ClearView", rating: 4.5 },
    { material: "PVC Fittings", category: "Plumbing", organization: "FlowMaster", rating: 4.2 },
  ];

  const fetchData = () => {
    if (search.trim() === "") {
      setData(null);
      return;
    }

    const filteredData = supplier.filter((item) =>
      item.material.toLowerCase().includes(search.toLowerCase())
    );
    setData({ data: filteredData });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-gray-900 text-white py-4 text-center mt-20">
        <h1 className="text-2xl font-semibold">Vendor Search</h1>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className={`text-xl font-semibold mb-2 text-gray-800`}>Search Materials</h2>
            <p className={`text-sm text-gray-700`}>
              Select a product to see the available vendors
            </p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-md">
            <input
              type="text"
              placeholder="Search materials here..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-100"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                fetchData();
              }}
            />
          </div>

          {search && data && data.data.length > 0 && (
            <div className="mt-4 bg-white shadow-md rounded-md">
              <ul className="divide-y divide-gray-200">
                {data.data.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3 hover:bg-gray-50 transition duration-200 flex justify-between items-center"
                  >
                    <div>
                      <div className="font-semibold text-gray-800">{item.material}</div>
                      <div className="text-sm text-gray-600">Category: {item.category}</div>
                      <div className="text-sm text-gray-600">Organization: {item.organization}</div>
                      <div className="text-sm text-gray-600 flex items-center">
                        Seller Rating:{" "}
                        <span className="ml-2 text-yellow-500">⭐ {item.rating}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate("/generate-rfq")}
                      className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition duration-200 shadow-md"
                    >
                      Generate RFQ
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {search && data && data.data.length === 0 && (
            <p className="text-gray-500 mt-4 text-center">
              No results found. Please try a different search.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductSearch;
