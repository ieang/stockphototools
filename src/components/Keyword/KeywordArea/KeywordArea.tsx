import * as React from "react";
import styled from "styled-components";

interface Props {
    onInputChange(e:any): void,
}

const TextAreaStyled = styled.textarea`
    color: gray;
    height: 150px;
    margin-bottom: 20px;
    width: 100%;
`;

const KeywordArea: React.FC<Props> = (props) => {
    return (
        <TextAreaStyled onInput={props.onInputChange}></TextAreaStyled>
    );
}

export default KeywordArea;