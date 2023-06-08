import React from 'react';

const AllPresentTable = (props) => {
    return (
      <div className="overflow-x-auto mt-5 flex flex-col justify-center items-center">
        <table className="w-full text-center text-gray-500 dark:text-gray-400 text-lg">
          <thead className="text-sm text-neutral-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="md:w-1/5">Roll number</th>
              <th className="md:w-1/5">Total Mark</th>
              <th className="md:w-1/5">Your Mark</th>
              <th className="md:w-1/5">ON 7.5 </th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((std, index) => (
              <tr
                className="border py-2 border-slate-200 text-center"
                key={index}
              >
                <td className="text-neutral-400 font-roboto font-thin  text-sm">
                  {std.roll_number}
                </td>
                <td className="text-neutral-400 font-roboto font-thin  text-sm">
                  {std.total_mark}
                </td>
                <td className="text-neutral-400 font-roboto font-thin  text-sm">
                  {std.your_mark}
                </td>
                <td className="text-neutral-400 font-roboto font-thin  text-sm">
                  {((std.your_mark * 7.5) / std.total_mark).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllPresentTable;