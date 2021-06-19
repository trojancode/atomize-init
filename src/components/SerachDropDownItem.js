import React from 'react'
import { Div, Text } from "atomize";

const SerachDropDownItem = ({name,onClick=()=>{}}) => {
    return (
        <Div p={{ x: "25px", y: "18px" }} onClick={(e)=>onClick()} textAlign="left" className="dropdownitem">
            <Text textSize="para" textColor="danger900">{name}</Text>
        </Div>
    )
}

export default SerachDropDownItem
