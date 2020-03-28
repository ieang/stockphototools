import * as React from 'react';
import styled from 'styled-components';

const TextAreaStyled = styled.textarea`
    color: gray;
    width: 80%;
    height: 150px;
    margin-bottom: 20px;
    width: 100%;
`;

const Note: React.FC = () => {
    return (
        <TextAreaStyled></TextAreaStyled>
    )
}

export default Note;