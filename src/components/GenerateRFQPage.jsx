import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const GenerateRFQPage = () => {
  const navigate = useNavigate();
  const [rfqDetails, setRfqDetails] = useState({
    productName: "",
    productSpecifications: "",
    quantity: "",
    productComments: "",
    deliveryAddress: "",
    paymentTerms: "",
    email: "",
    contactNumber: "",
    customTerms: "",
    procurementEndDate: "",
  });
  const [rows, setRows] = useState([]);
  const [selectedTerms, setSelectedTerms] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRfqDetails({ ...rfqDetails, [name]: value });
  };

  const addNewRow = () => {
    setRows([...rows, { ...rfqDetails }]);
    setRfqDetails({
      productName: "",
      productSpecifications: "",
      quantity: "",
      productComments: "",
      deliveryAddress: "",
      paymentTerms: "",
      email: "",
      contactNumber: "",
      customTerms: "",
      procurementEndDate: "",
    });
  };

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, idx) => idx !== index);
    setRows(updatedRows);
  };

  const handleTermSelection = (term) => {
    setSelectedTerms((prev) =>
      prev.includes(term) ? prev.filter((t) => t !== term) : [...prev, term]
    );
  };

  const handleSubmit = () => {
    console.log("RFQ Submitted", rows, "Selected Terms", selectedTerms);
  };

  const terms = [
    "Manufacturing Clearance",
    "Inspection Requirements",
    "Testing Certificates",
    "Warranty Conditions",
    "Quantity Variation",
    "Shortage & Rejection",
    "Order Cancellation",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 mt-20">
      
      <header className="bg-gray-900 text-white py-6 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center">RFQ Generator</h1>
          <p className="text-center text-sm mt-1">
            Create and manage your Request for Quotations effortlessly
          </p>
        </div>
      </header>

      
      <main className="flex-grow container mx-auto px-6 py-10">
        <div className="bg-white shadow-lg rounded-md p-6">
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Suggested Terms & Conditions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {terms.map((term, index) => (
                <div key={index} className="flex items-start">
                  <input
                    type="checkbox"
                    id={`term-${index}`}
                    checked={selectedTerms.includes(term)}
                    onChange={() => handleTermSelection(term)}
                    className="mt-1 mr-3 h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`term-${index}`}
                    className="text-gray-900 font-medium"
                  >
                    {term}
                  </label>
                </div>
              ))}
            </div>
          </section>

          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Add RFQ Details
            </h2>
            <table className="w-full table-auto border border-gray-300 shadow-sm rounded-md">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-2">Field</th>
                  <th className="px-4 py-2">Input</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Product Name", "productName"],
                  ["Product Specifications", "productSpecifications"],
                  ["Quantity", "quantity"],
                  ["Product Comments", "productComments"],
                  ["Delivery Address", "deliveryAddress"],
                  ["Payment Terms & Conditions", "paymentTerms"],
                  ["Email", "email"],
                  ["Contact Number", "contactNumber"],
                  ["Add Your Own Terms", "customTerms"],
                  ["Procurement End Date", "procurementEndDate"],
                ].map(([label, name], idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-100 transition duration-300"
                  >
                    <td className="border px-4 py-2 font-medium">{label}</td>
                    <td className="border px-4 py-2">
                      {name === "quantity" || name === "contactNumber" ? (
                        <input
                          type="number"
                          name={name}
                          value={rfqDetails[name]}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                      ) : name === "procurementEndDate" ? (
                        <input
                          type="date"
                          name={name}
                          value={rfqDetails[name]}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <textarea
                          name={name}
                          value={rfqDetails[name]}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex justify-end">
              <button
                onClick={addNewRow}
                className="px-6 py-2 bg-yellow-400 text-black font-medium py-2 px-6 rounded-md shadow-lg hover:bg-yellow-500 transition duration-200"
              >
                Add RFQ Row
              </button>
            </div>
          </section>

          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              RFQ Items List
            </h2>
            {rows.length > 0 ? (
              rows.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-4 mb-2 rounded-md shadow-md flex justify-between items-center border border-gray-200 hover:shadow-lg transition duration-300"
                >
                  <div>
                    <p className="text-sm text-gray-700">
                      <strong>Product Name:</strong> {row.productName}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Specifications:</strong>{" "}
                      {row.productSpecifications}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Quantity:</strong> {row.quantity}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Email:</strong> {row.email}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Contact Number:</strong> {row.contactNumber}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteRow(idx)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No RFQ items added yet.</p>
            )}
          </section>

          
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-yellow-400 text-black font-medium py-2 px-6 rounded-md shadow-lg hover:bg-yellow-500 transition duration-200"
            >
              Submit RFQ
            </button>
          </div>
        </div>
      </main>

      
      <Footer />
    </div>
  );
};

export default GenerateRFQPage;
