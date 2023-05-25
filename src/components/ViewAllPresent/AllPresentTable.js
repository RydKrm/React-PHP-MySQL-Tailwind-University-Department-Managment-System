import React from 'react';

const AllPresentTable = (props) => {
    return (
      <div className="overflow-x-auto mt-5">
        <table className="w-full text-left text-gray-500 dark:text-gray-400 text-lsm font-roboto ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className="w-2/5">Roll number</th>
              <th className="w-1/5">Total present</th>
              <th className="w-1/5">Total Class</th>
              <th className="w-1/5">Percentage </th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((std, index) => (
              <tr className="border-2 border-slate-200" key={index}>
                <td>{std.roll_number}</td>
                <td>{std.total_present}</td>
                <td>{std.total_class}</td>
                <td>{Math.ceil(std.total_present*100/std.total_class)} %</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllPresentTable;