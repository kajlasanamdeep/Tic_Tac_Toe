import React from "react";
import './box.css';
function Box(props) {
    return (
            <button style={{backgroundColor:`${props.outline?'red':''}`}} onClick={props.onClick} className="box">{props.value}</button>
    )
}

export default Box;