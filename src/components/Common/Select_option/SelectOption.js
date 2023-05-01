import React from 'react';

const SelectOption = (props) => {
    return (
      <select
        name= {props.name}
        onChange={props.handle_option}
        className="select form-control-lg select-info w-full max-w-xs font-roboto 
                                       text-sm font-light hover:ring-1 duration-200 "
      >
        <option>Select {props.name} </option>
        {props.options.map(op=> <option key={op[0]} value={op[0]}> {op[1]} </option>)}
      </select>
    );
};

export default SelectOption;