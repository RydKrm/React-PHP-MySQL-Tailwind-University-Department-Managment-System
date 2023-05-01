import React from 'react';

const TablePresent = (props) => {
    return (
      <div className="overflow-x-auto mt-5">
        <table className="w-full text-left text-gray-500 dark:text-gray-400 text-lsm font-roboto ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-2/5">Name</th>
              <th className="w-1/5">Roll number</th>
              <th className="w-1/5">present</th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((std, index) => (
              <tr className="border-2 border-slate-200" key={index}>
                <td>
                  {std.first_name} {std.last_name}
                </td>
                <td>{std.roll_number}</td>
                <td>
                  {std.is_present === "not present" && (
                    <button
                      name="marks"
                      className="btn bg-rose-500 ring-1 border-white"
                      onClick={() => props.present_adding(std.student_id, "present")}
                    >
                      {std.is_present}
                    </button>
                  )}
                  {std.is_present === "present" && (
                    <button
                      name="marks"
                      className="btn btn-success text-white"
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
          className="btn btn-danger btn-lg mt-5"
          type="submit"
          value="submit"
          onClick={props.onMarkSubmit}
        />
      </div>
    );
};

export default TablePresent;