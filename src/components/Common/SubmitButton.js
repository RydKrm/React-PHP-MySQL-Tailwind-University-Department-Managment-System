import React from 'react';

const SubmitButton = (props) => {
    return (
      <input
        className="btn font-roboto font-light w-40  text-neutral-400 hover:text-neutral-100 hover:border-white hover:bg-light-black bg-dark-black border-1 md:mb-10 mt-2 transition duration-0 hover:duration-700"
        type="submit"
        value={props.ButtonValue}
        onClick={props.ButtonHandle}
      />
    );
};

export default SubmitButton;