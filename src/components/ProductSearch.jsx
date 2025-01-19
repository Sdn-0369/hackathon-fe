import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const ProductSearch = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); 

  const fetchData = async () => {
    try {
      if (search.trim() === "") {
        setData(null); 
        return;
      }
      const response = await axios.post("http://localhost:3002/", { search });
      setData(response.data);
      localStorage.setItem("data", JSON.stringify(response.data)); structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-gray-900 text-white py-4 text-center mt-20">
        <h1 className="text-2xl font-semibold">Vendor Search</h1>
      </header>

      <main className="flex-grow p-6">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="mb-6 text-center">
            <h2
              className={`text-xl font-semibold mb-2 ${
                search ? "text-gray-500 blur-sm" : "text-gray-800"
              }`}
            >
              Search Materials
            </h2>
            <p
              className={`text-sm ${
                search ? "text-gray-500 blur-sm" : "text-gray-700"
              }`}
            >
              Select a product to see the available vendors
            </p>
          </div>

          
          <div className="bg-white shadow-md p-4 rounded-md">
            <input
              type="text"
              placeholder="Search materials here..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-100"
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
                    data-id={idx}
                    className="p-3 hover:bg-gray-50 transition duration-200 flex justify-between items-center"
                  >
                    <div>
                      <div className="font-semibold text-gray-800">{item.material}</div>
                      <div className="text-sm text-gray-600">
                        Category: {item.category}
                      </div>
                      <div className="text-sm text-gray-600">
                        Organization: {item.organization}
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        Seller Rating:{" "}
                        <span className="ml-2 text-yellow-500">
                          ⭐ {item.rating}
                        </span>
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
