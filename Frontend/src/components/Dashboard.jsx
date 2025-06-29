import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  scales,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [feedback, setFeedback] = useState([]);
    const [feedbackInfo, setFeedbackInfo] = useState([]);
  

  const getFB = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getFB");
      console.log(response.data);
      setFeedback(response.data);
    } catch (err) {
      console.log(err);
    }
  };

   const getFBInfo = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getFBInfo");
      console.log(response.data);
      setFeedbackInfo(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFB();
    getFBInfo();
  }, []);

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Teacher's Average Rating",
        font: { size: 20 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        ticks: { stepSize: 1, font: { size: 14 } },
      },
    },
  };
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "left",
      },
      title: {
        display: true,
        text: "Feedback count per Teacher",
        font: { size: 20 },
      },
    },
  };

  const data = {
    labels: feedback.map((e) => e._id),
    datasets: [
      {
        label: "Average Rating",
        data: feedback.map((e) => e.avgRating),
        backgroundColor: [
          "RGB(255, 51, 51)",
          "RGB(255, 255, 102)",
          "RGB(153, 255, 144)",
          "RGB(102, 178, 255)",
          "RGB(255, 192, 203)",
        ],
      },
    ],
  };

  const Piedata = {
    labels: feedback.map((e) => e._id),
    datasets: [
      {
        label: "# of student",
        data: feedback.map((e) => e.count),
        backgroundColor: [
          "RGB(255, 51, 51)",
          "RGB(255, 255, 102)",
          "RGB(153, 255, 144)",
          "RGB(102, 178, 255)",
          "RGB(255, 192, 203)",
        ],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className=" w-auto bg-white m-5 px-10 rounded-2xl shadow-sm mt-25 h-full ">
        <div className="flex justify-center w-auto items-center">
          <div className=" h-[350px] m-10 w-[350px]">
            <Bar data={data} options={barOptions} />
          </div>
          <div className=" m-10 h-[350px] w-[350px]">
            <Pie data={Piedata} options={pieOptions} />
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-2xl m-2 font-semibold text-gray-700">All Feedback with Student Info</h2>
          <table className="w-full border mb-7">
            <thead className="bg-blue-300 border ">
              <tr>
                <th className="border p-2">Teacher's Name</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Student's Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Rating</th>
              </tr>
            </thead>
            <tbody>
              {feedbackInfo.map((FB,i)=>{
                return <tr>
                  <td  className="border p-2">{FB.teacherName}</td>
                  <td className="border p-2">{FB.subject}</td>
                  <td className="border p-2">{FB.studentName || "Annonymous"}</td>
                  <td className="border p-2">{FB.email || "Annonymous"}</td>
                  <td className="border p-2">{FB.rating}</td>
                </tr>
              })



              }
            </tbody>
              
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
