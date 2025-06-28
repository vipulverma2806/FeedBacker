import React, { useState } from "react";

const Form = () => {
  const [submitted, setSubmitted] = useState(true);
  return (
    <div className="flex justify-center items-center">
      {submitted ? (
        <div className="flex justify-center items-center min-h-screen">ThankYou</div>
      ) : (
        <form className="flex justify-center flex-col items-center space-y-5 w-3xl bg-white m-5 pb-20 rounded-2xl shadow-sm mt-25">
          <h1 className="text-3xl font-bold m-4">Feedback Form</h1>
          <div className="flex flex-col space-y-2 w-2xl mt-5 ">
            <label className="text-gray-700 text-xl mx-3">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border rounded-xl mx-3 p-3"
            />
          </div>
          <div className="flex flex-col space-y-2 w-2xl ">
            <label className="text-gray-700 text-xl mx-3">Teacher's Name</label>
            <input
              type="text"
              name="TeacherName"
              className="w-full mx-3  border rounded-xl p-3"
            />
          </div>
          <div className="flex flex-col space-y-2 w-2xl ">
            <label className="text-gray-700 text-xl mx-3">Rating</label>
            <select name="rating" className="mx-3 w-40 ">
              <option value="" disabled selected>
                Give rating here
              </option>
              {[1, 2, 3, 4, 5].map((rate, i) => (
                <option value="rate">{rate}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2 w-2xl ">
            <label className="text-gray-700 text-xl mx-3 p-3">Comments</label>
            <textarea
              rows="10"
              className="border rounded-xl mx-3 min-h-30 max-h-50 p-3"
            />
          </div>

          <div className="grid md:grid-cols-2 w-2xl">
            <div className="flex flex-col space-y-2 w-2xl">
              <label className="text-gray-700 text-xl mx-3">
                Your Name (optional)
              </label>
              <input
                type="text"
                name="subject"
                className="w-[48%] mx-3 p-3 border rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2 w-2xl ">
              <label className="text-gray-700 text-xl mx-3">
                Your Email (optional)
              </label>
              <input
                type="text"
                name="subject"
                className="w-[48%] mx-3 p-3 border rounded-xl "
              />
            </div>
          </div>
          <div className="w-full flex justify-center mt-10">
            <button
              type="submit"
              className="bg-blue-400 w-xl hover:bg-blue-800 rounded-2xl h-12 text-white font-medium text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
