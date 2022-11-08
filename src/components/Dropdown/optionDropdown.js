import React from "react"
import styled from "styled-components";

const StyledOptionDropdown  = styled.div`
    .option1Div {
        color: black;
    }
`

export default function optionDropdown() {

    return(
        
        <StyledOptionDropdown>
            <div className="option1Div">
                <p>배경색</p>
                <p>글자색</p>
            </div>

            
        </StyledOptionDropdown>
    )
}