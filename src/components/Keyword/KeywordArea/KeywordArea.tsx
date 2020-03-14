import * as React from "react";
import styled from "styled-components";

interface Props {
    onInputChange(e:any): void,
}

const TextAreaStyled = styled.textarea`
    color: gray;
    width: 80%;
    height: 150px;
    margin-bottom: 20px;
`;

const KeywordArea: React.FC<Props> = (props) => {
    return (
        <TextAreaStyled onInput={props.onInputChange}></TextAreaStyled>
    );
}

export default KeywordArea;