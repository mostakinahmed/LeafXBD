// context/UserContext.js
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// ✅ Create context
export const DataContext = createContext();

// ✅ Static data
const productData = [
  {
    id: 1,
    cat: "laptop",
    name: "John Doe",
    email: "johndoe@example.com",
    age: 29,
    isActive: true,
  },
  {
    id: 2,
    cat: "laptop",
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 34,
    isActive: false,
  },
  {
    id: 3,
    cat: "laptop",
    name: "Sam Green",
    email: "samgreen@example.com",
    age: 23,
    isActive: true,
  },
  {
    id: 4,
    cat: "power",
    name: "Emily White",
    email: "emilywhite@example.com",
    age: 41,
    isActive: false,
  },
  {
    id: 5,
    cat: "desktop",
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    age: 30,
    isActive: true,
  },
];

const userData = [
  { id: 55, name: "iphone 15", Brand: "Apple", country: "USA" },
];

// ✅ Context provider component
export const UserContext = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  // ✅ Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fabribuzz.onrender.com/api/product"
        );
        setApiData(response.data);
      } catch (err) {
        console.error("API fetch error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const contextValue = {
    userData,
    productData,
    apiData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
