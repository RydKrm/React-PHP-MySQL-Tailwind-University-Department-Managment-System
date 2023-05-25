import React from 'react';

const SingleInput = (props) => {
    return (
      <div className="col-md-6 mb-4">
        <div className="form-outline">
          <input
            onChange={props.handle}
            type={props.type}
            id={props.name}
            placeholder={props.place}
            onBlur={props.handle}
            className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
            name={props.name}
          />
        </div>
      </div>
    );
};

export default SingleInput;