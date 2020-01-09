import React from "react";
import {StyledStartButton} from "./styles/startButton";

const StartButton = ({callback}) => (
    <StyledStartButton onClick={callback}>
        Start game
    </StyledStartButton>
)
export default StartButton;