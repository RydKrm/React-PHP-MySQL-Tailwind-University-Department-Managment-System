import React from 'react';

const AllPresentTable = (props) => {
    return (
      <div className="overflow-x-auto mt-5">
        <table className="w-full text-center text-gray-500 dark:text-gray-400 text-lsm font-roboto ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-1/5">Roll number</th>
              <th className="w-1/5">Total Mark</th>
              <th className="w-1/5">Your Mark</th>
              <th className="w-1/5">ON 7.5 </th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((std, index) => (
              <tr className="border-2 border-slate-200 text-center" key={index}>
                <td>{std.roll_number}</td>
                <td>{std.total_mark}</td>
                <td>{std.your_mark}</td>
                <td>{(std.your_mark*7.5/std.total_mark).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllPresentTable;