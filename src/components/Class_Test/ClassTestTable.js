import React from 'react';

const ClassTestTable = (props) => {
    return (
      <div className="overflow-x-auto mt-5 flex flex-col justify-center items-center">
        <table className="w-full text-center text-gray-500 dark:text-gray-400 text-lg">
          <thead className="text-sm text-neutral-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="md:w-2/5">Name</th>
              <th className="md:w-2/5">Roll number</th>
              <th className="md:w-1/5">Mark</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {props.students.map((std, index) => (
              <tr key={index} className="border border-green">
                <td className="text-neutral-400 font-roboto font-thin  text-sm">
                  {std.first_name} {std.last_name}
                </td>
                <td className="text-neutral-400 font-roboto font-thin text-sm">
                  {std.roll_number}
                </td>
                <td>
                  <input
                    type="text"
                    name="marks"
                    placeholder="Mark"
                    className="font-roboto border-green text-center  w-40 mr-3 bg-dark-black text-sm font-thin text-green focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-1"
                    onBlur={(event) => props.mark_adding(event, index)}
                  />
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

export default ClassTestTable;