import React, { useEffect, useState } from "react";
import axios from "axios";

const UserCard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUser(response.data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-r from-[#2d3748] to-[#4a5568] text-white"
            : "bg-gradient-to-r from-[#E2E2E2] to-[#C9D6FF] text-gray-800"
        }`}
      >
        <div className="text-center text-3xl font-semibold animate-pulse">
          Loading...
        </div>
      </div>
    );
  }
  

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-r dark:from-[#1a202c] dark:via-[#2d3748] dark:to-[#4a5568] text-white"
          : "bg-gradient-to-r from-[#E2E2E2] to-[#C9D6FF] text-gray-800"
      }`}
    >
         {/* Toggle Dark Mode */}
         <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      <div
        className={`relative shadow-lg rounded-xl w-[450px] h-[220px] p-6 flex items-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${
          darkMode
            ? "bg-gradient-to-r from-[#2d3748] to-[#4a5568] text-gray-200 border border-gray-700"
            : "bg-gradient-to-tr from-[#4ca1af] to-[#c4e0e5] text-white"
        }`}
      >
       

        {/* Profile Picture */}
        <div className="w-1/3 flex pl-6 justify-center items-center">
          <img
            src={user.picture.large}
            alt="User Avatar"
            className="rounded-full  w-28 h-28 border-4 border-gray-200 dark:border-gray-600 shadow-lg"
          />
        </div>

        {/* User Details */}
        <div className="w-2/3 pl-12 flex flex-col justify-center">
          <div className="flex items-center mb-1">
            <p
              className={`font-bold text-lg mr-2 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {user.name.first}
            </p>
            <p
              className={`font-bold text-lg ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {user.name.last}
            </p>
          </div>
          <p
            className={`text-sm mb-1 ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Gender: {user.gender}
          </p>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Phone: {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
