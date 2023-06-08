import React from 'react';

const TablePresent = (props) => {
    return (
      <div className="overflow-x-auto mt-5">
        <table className="w-full text-left text-gray-500 dark:text-gray-400 text-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center text-neutral-400 font-roboto font-thin text-sm">
              <th className="md:w-2/5">Name</th>
              <th className="md:w-2/5">Date</th>
              <th className="md:w-1/5">present</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {props.present.map((pre, index) => (
              <tr key={index} className="border border-green h-10">
                <td className="text-neutral-400 font-roboto font-thin text-sm">
                  {props.course_name}
                </td>
                <td className="text-neutral-400 font-roboto font-thin text-sm">
                  {pre.present_date}
                </td>
                <td className="text-neutral-400 font-roboto font-thin text-sm">
                  {pre.is_present}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default TablePresent;