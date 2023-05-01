import React from 'react';

const TablePresent = (props) => {
    return (
      <div className="overflow-x-auto mt-5">
        <table className="w-full text-left text-gray-500 dark:text-gray-400 text-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-1/4">Name</th>
              <th className="w-1/4">Date</th>
              <th className="w-1/4">present</th>
            </tr>
          </thead>
          <tbody>
            {props.present.map((pre, index) => (
              <tr key={index} className="border-2 border-slate-200">
                <td>{props.course_name}</td>
                <td>{pre.present_date}</td>
                <td>{pre.is_present}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default TablePresent;