import React from 'react';

const AllPresentTable = (props) => {
    return (
      <div className="overflow-x-auto mt-5 flex flex-col justify-center items-center">
        <table className="w-full text-center text-gray-500 dark:text-gray-400 text-lg">
          <thead className="text-sm text-neutral-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="w-2/6">Roll number</th>
              <th className="w-1/6">Total present</th>
              <th className="w-1/6">Total Class</th>
              <th className="w-2/6">Percentage </th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((std, index) => (
              <tr className="border py-2 border-slate-200" key={index}>
                <td className="text-neutral-400 font-roboto font-thin  text-base">
                  {std.roll_number}
                </td>
                <td className="text-neutral-400 font-roboto font-thin  text-base">
                  {std.total_present}
                </td>
                <td className="text-neutral-400 font-roboto font-thin  text-base">
                  {std.total_class}
                </td>
                <td className="text-neutral-400 font-roboto font-thin  text-base">
                  {Math.ceil((std.total_present * 100) / std.total_class)} %
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllPresentTable;