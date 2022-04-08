import React from "react";

const FormInput = ({ props, onChange }) => {
    const { labelFor, labelTitle, placeholderText, inputType } = props;
    return (
        <div className="mg-t-20">
            <label className="input-label sm-title" htmlFor={labelFor}>
                {labelTitle}
            </label>
            <input
                className="user-input"
                required
                type={inputType}
                placeholder={placeholderText}
                onChange={onChange}
                id={labelFor}
            />
        </div>
    );
};

export { FormInput };
