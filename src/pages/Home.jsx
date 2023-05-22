import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import ListStudents from "../components/ListStudents";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [students, setStudents] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3004/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {});
  }, []);
  if (students === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Header />
      <div className=" flex justify-end mx-20">
        <button
          onClick={() => navigate("/add-student")}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Add New Student
        </button>
      </div>
      <ListStudents students={students} setStudents={setStudents} />
    </div>
  );
};

export default Home;
