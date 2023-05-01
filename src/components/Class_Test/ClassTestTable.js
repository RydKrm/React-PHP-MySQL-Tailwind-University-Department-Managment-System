import React from 'react';

const ClassTestTable = (props) => {
    return (
      <div className="overflow-x-auto mt-5">
        <table className="w-full text-left text-gray-500 dark:text-gray-400 text-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-2/5">Name</th>
              <th className="w-1/5">Roll number</th>
              <th className="w-1/5">Mark</th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((std, index) => (
              <tr key={index} className="border-2 border-slate-200">
                <td>
                  {std.first_name} {std.last_name}
                </td>
                <td>{std.roll_number}</td>
                <td>
                  <input
                    type="text"
                    name="marks"
                    placeholder="Mark"
                    className="form-control form-control-lg input-bordered text-sm hover:ring-1 hover:border-sky-500"
                    onBlur={(event) => props.mark_adding(event, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          className="btn btn-info btn-lg font-roboto text-lg font-light text-white
                           hover:ring-1 duration-200 hover:bg-sky-500 hover:delay-800 mt-5"
          type="submit"
          value="submit"
          onClick={props.onMarkSubmit}
        />
      </div>
    );
};

export default ClassTestTable;