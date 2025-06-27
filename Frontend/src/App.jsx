import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Form from './components/Form'
import Report from './components/Report'
const App = () => {
  return (
    <BrowserRouter>
      <div className=" min-h-screen bg-gray-100">
        <nav className="bg-blue-400 text-white flex flex-col justify-between h-25 md:h-15 md:flex-row items-center p-5 ">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">FeedBacker </h1>
            <span className="text-3xl ml-2 font-extralight">
              - Share your Feedback
            </span>
          </div>
          <div>
            <Link to="/" className="mr-3 hover:underline">
              Feedback Form
            </Link>
            <Link to="/report" className="mr-3 hover:underline">
              Admin DashBoard
            </Link>
          </div>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
