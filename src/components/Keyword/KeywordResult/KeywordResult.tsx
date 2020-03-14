import * as React from 'react';
import CopyToClipboard = require('react-copy-to-clipboard');
import styled from 'styled-components';

interface Props {
    keywords: string;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`; 
const CopyToClipBoardStyled = styled.button`
    width: 350px;
    height: 50px;
`;

const CountKeywordStyled = styled.div`
    font-size: 32px;
    margin: 10px;
`;

const KeywordResultStyled = styled.div`
    width: 90%;
    word-wrap: break-word;
`;

const KeywordResult: React.FC<Props> = (props) => {
    return (
        <Wrapper>
            <KeywordResultStyled>{props.keywords}</KeywordResultStyled>
            <CountKeywordStyled>
                <span>Count: </span>
                <span>{props.keywords.length === 0 ? 0 : props.keywords.split(',').length}</span>
            </CountKeywordStyled> 
            <CopyToClipboard text={props.keywords}>
                <CopyToClipBoardStyled>Copy keywords</CopyToClipBoardStyled>
            </CopyToClipboard>
        </Wrapper>
    )
}

export default KeywordResult;