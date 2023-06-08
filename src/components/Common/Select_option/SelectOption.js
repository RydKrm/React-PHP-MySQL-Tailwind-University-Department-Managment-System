import React from 'react';

const SelectOption = (props) => {
    return (
      <select
        name={props.name}
        onChange={props.handle_option}
        className="font-roboto border-green border-b w-40  bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3 mx-3"
      >
        <option>Select {props.name} </option>
        {props.options.map((op) => (
          <option key={op[0]} value={op[0]}>
            {" "}
            {op[1]}{" "}
          </option>
        ))}
      </select>
    );
};

export default SelectOption;