import React from 'react';

const SubmitButton = (props) => {
    return (
      <input
        className="btn btn-info btn-lg font-roboto text-lg font-light text-white
                           hover:ring-1 duration-200 hover:bg-sky-500 hover:delay-800"
        type="submit"
        value={props.ButtonValue}
        onClick={props.ButtonHandle}
      />
    );
};

export default SubmitButton;