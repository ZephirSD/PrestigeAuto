import React from "react";

function Input({label, type, ref, value, changeValue, style}) {
  return (
    <>
      <div className="case_input" style={style}>
        <label>{label}</label>
        <input type={type} ref={ref} value={value} onChange={changeValue}></input>
      </div>
    </>
  );
}

function Button({value, type, onClick}) {
  return (
    <>
      <div className="case_input">, 
        <button type={type} onClick={onClick !== "" || onClick != null ?  onClick : ""}>{value}</button>
      </div>
    </>
  )
}


export { Input, Button };
