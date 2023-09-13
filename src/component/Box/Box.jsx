import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { BiCircle } from "react-icons/bi";
import './Box.scss'
const Box = ({ value, id, onHandleClick }) => {
    let sign;
    if (value === "X") {
        sign = <RxCross2 color="red" name="cross" strokeWidth={"1.5px"} />
    }
    if (value === "O") {
        sign = <BiCircle color="blue" name="circle" strokeWidth={"1.5px"} />

    }
    return (
        <button key={id} className='box winBox'  onClick={onHandleClick}>{sign}</button>
    )
}

export default Box