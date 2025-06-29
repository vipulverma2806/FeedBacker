import React, { useDebugValue, useState } from "react";
import axios from "axios";
const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    studentName: "",
    email: "",
    subject: "",
    teacherName: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5000/submit", form);
      console.log(res.data)
      console.log("Data received");

      setSubmitted(true);
      setForm({
        studentName: "",
        email: "",
        subject: "",
        teacherName: "",
        rating: 0,
        comment: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {submitted ? (
        <div className="flex justify-center flex-col items-center min-h-screen space-y-4">
          <h2 className="font-bold text-3xl text-green-600">ThankYou!</h2>
          <p>Your Form has submitted successfully.</p>

          <button
            className="bg-blue-400 w-lg hover:bg-blue-800 rounded-2xl h-10 text-white font-medium text-xl"
            onClick={() => setSubmitted(!submitted)}
          >
            Submit another form
          </button>
        </div>
      ) : (
        <form
          className="flex justify-center flex-col items-center space-y-5 w-3xl bg-white m-5 pb-20 rounded-2xl shadow-sm mt-25"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold m-4">Feedback Form</h1>
          <div className="flex flex-col space-y-2 w-2xl mt-5 ">
            <label className="text-gray-700 text-xl mx-3">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border rounded-xl mx-3 p-3"
              value={form.subject}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="flex flex-col space-y-2 w-2xl ">
            <label className="text-gray-700 text-xl mx-3">Teacher's Name</label>
            <input
              type="text"
              name="teacherName"
              className="w-full mx-3  border rounded-xl p-3"
              value={form.teacherName}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="flex flex-col space-y-2 w-2xl ">
            <label className="text-gray-700 text-xl mx-3">Rating</label>
            <select
              name="rating"
              className="mx-3 w-40 "
              value={form.rating}
              onChange={(e) => handleChange(e)}
              required
            >
              <option>
                Give rating here
              </option>
              {[1, 2, 3, 4, 5].map((rate, i) => (
                <option value={rate} key={i}>{rate}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2 w-2xl ">
            <label className="text-gray-700 text-xl mx-3 p-3">Comments</label>
            <textarea
              rows="10"
              className="border rounded-xl mx-3 min-h-30 max-h-50 p-3"
              name="comment"
              value={form.comment}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 w-2xl">
            <div className="flex flex-col space-y-2 w-2xl">
              <label className="text-gray-700 text-xl mx-3">
                Your Name (optional)
              </label>
              <input
                type="text"
                name="studentName"
                className="w-full md:w-[48%] mx-3 p-3 border rounded-xl"
                value={form.studentName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col space-y-2 w-2xl ">
              <label className="text-gray-700 text-xl mx-3">
                Your Email (optional)
              </label>
              <input
                type="text"
                name="email"
                className="w-full md:w-[48%] mx-3 p-3 border rounded-xl "
                value={form.email}
                onChange={(e) => handleChange(e)}
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
