import React, { useState } from "react";
import axios from 'axios'
import Dashboard from "./Dashboard";
const Report = () => {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [notAuth, setNotAuth] = useState(false);

  const handleLogin = async() => {
    const pass = await axios.get(`http://localhost:5000/getPass/${password}`)
    console.log(pass)
  
    if (pass.data) {
      setAuth(true);
      setPassword("");
      setNotAuth(false);
    } else {
      setNotAuth(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {auth ? (
        <div><Dashboard/></div>
      ) : (
        <div className="flex justify-center flex-col items-center space-y-5 w-xl h-60 bg-white m-5 p-2 rounded-2xl shadow-sm mt-25">
          {notAuth ? (
            <p className="text-red-700 text-xl mx-3 font-semibold">
              Password Incorrect{" "}
            </p>
          ) : (
            <p className="text-gray-700 text-xl mx-3 font-semibold">
              Admin Password{" "}
            </p>
          )}

          <input
            type="password"
            className="w-1/2 mx-3  border rounded-xl p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-400 w-1/2 hover:bg-blue-800 rounded-2xl h-12 text-white font-medium text-xl"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Report;
