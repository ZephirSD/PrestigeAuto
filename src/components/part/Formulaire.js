import React from "react";

function Input({label, type, ref}) {
  return (
    <>
      <div className="case_input">
        <label>{label}</label>
        <input type={type} ref={ref}></input>
      </div>
    </>
  );
}

function Button({value, type}) {
  return (
    <>
      <div className="case_input">
        <button type={type}>{value}</button>
      </div>
    </>
  )
}


export { Input, Button };
