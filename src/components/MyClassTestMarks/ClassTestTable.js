import React from 'react';

const ClassTestTable = (props) => {
    return (
      <div className="overflow-x-auto mt-5">
        <table className="w-full text-left text-gray-500 dark:text-gray-400 text-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center text-neutral-400 font-roboto font-thin text-sm">
              <th className="w-1/6"> Course Name</th>
              <th className="w-1/6">Course Section</th>
              <th className="w-1/6">CT Number</th>
              <th className="w-1/6">Total mark</th>
              <th className="w-1/6">My Mark</th>
            </tr>
          </thead>
          <tbody>
            {props.class_test.map((ct, index) => (
              <tr key={index} className="border border-green h-10 text-center">
                <td className="text-neutral-400 font-roboto font-thin text-sm">
                  {ct.course_name}
                </td>
                <td className="text-neutral-400 font-roboto font-thin text-sm">
                  {ct.course_section}
                </td>
                <td className="text-neutral-400 font-roboto font-thin text-sm">
                  {ct.class_test_number}
                </td>
                <td className="text-neutral-400 font-roboto font-thin text-sm">
                  {ct.total_mark}
                </td>
                <td className="text-neutral-400 font-roboto font-thin text-sm">
                  {ct.mark}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ClassTestTable;