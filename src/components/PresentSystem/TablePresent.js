import React from 'react';

const TablePresent = (props) => {
    return (
      <div className="overflow-x-auto mt-5 flex flex-col justify-center items-center">
        <table className="w-full text-center text-gray-500 dark:text-gray-400 text-lg">
          <thead className="text-sm text-neutral-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="md:w-2/5">Name</th>
              <th className="md:w-1/5">Roll number</th>
              <th className="md:w-2/5">present</th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((std, index) => (
              <tr className="border py-2 border-slate-200" key={index}>
                <td className="text-neutral-400 font-roboto font-thin  text-sm">
                  {std.first_name} {std.last_name}
                </td>
                <td className="text-neutral-400 font-roboto font-thin  text-sm">
                  {std.roll_number}
                </td>
                <td className="text-neutral-400 font-roboto font-thin  text-sm">
                  {std.is_present === "not present" && (
                    <button
                      name="marks"
                      className="btn font-roboto font-light w-32 my-2 text-neutral-100 hover:text-neutral-100 hover:border-white hover:bg-light-black 
                      bg-red-600 border transition duration-0 hover:duration-700"
                      onClick={() =>
                        props.present_adding(std.student_id, "present")
                      }
                    >
                      {std.is_present}
                    </button>
                  )}
                  {std.is_present === "present" && (
                    <button
                      name="marks"
                      className="btn font-roboto font-light w-32 my-2 text-neutral-100 hover:text-neutral-100 hover:border-white hover:bg-light-black bg-green border transition duration-0 hover:duration-700"
                      onClick={() =>
                        props.present_adding(std.student_id, "not present")
                      }
                    >
                      {std.is_present}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          className="btn font-roboto font-light w-40 mt-5 text-neutral-400 hover:text-neutral-100 hover:border-white hover:bg-light-black bg-dark-black border-1 md:mb-10 transition duration-0 hover:duration-700"
          type="submit"
          value="submit"
          onClick={props.onMarkSubmit}
        />
      </div>
    );
};

export default TablePresent;