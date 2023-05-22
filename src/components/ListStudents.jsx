import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListStudents = ({ students, setStudents }) => {
  console.log(students);
  const handleDelete = (student) => {
    axios
      .delete(`http://localhost:3004/students/${student.id}`)
      .then((res) => {
        const filteredStudents = students.filter(
          (item) => item.id !== student.id
        );
        setStudents(filteredStudents);
      })
      .catch((err) => {
        alert("A problem happened while deleting");
      });
  };
  return (
    <div>
      <div className="relative overflow-x-auto mx-20 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-600">
          <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-500 dark:text-gray-400 bg-deep-orange-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nu.
              </th>
              <th scope="col" className="px-6 py-3">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3">
                Student Surname
              </th>
              <th scope="col" className="px-6 py-3">
                Student Number
              </th>
              <th scope="col" className="px-6 py-3">
                Student Class
              </th>
              <th scope="col" className="px-6 py-3">
                Student School
              </th>
              <th scope="col" className="px-6 py-3">
                Process
              </th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td className="font-semibold text-3xl  text-center" colSpan={7}>
                  Gösterilecek Veri Yok
                </td>
              </tr>
            ) : (
              <>
                {students.map((student, index) => (
                  <tr key={student.id} className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.surname}</td>
                    <td className="px-6 py-4">{student.studentNo}</td>
                    <td className="px-6 py-4">{student.studentClass}</td>
                    <td className="px-6 py-4">{student.schoolName}</td>
                    <td className="px-6 py-4">
                      <div
                        className="inline-flex rounded-md shadow-sm"
                        role="group"
                      >
                        <button
                          type="button"
                          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                          onClick={() => handleDelete(student)}
                        >
                          Delete
                        </button>
                        <Link
                          to={`/edit-student/${student.id}`}
                          type="button"
                          className="px-4 py-2 text-sm rounded-r-lg font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-800 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        >
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudents;
