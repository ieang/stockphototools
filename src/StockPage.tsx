import * as React from "react";

import { KeywordContainer } from './components/Keyword/KeywordContainer';
import styled from "styled-components";

export interface Props { 
    compiler: string; 
    framework: string; 
}

export interface State {

}

const PageStyle = styled.div`
    font-family: 'Montserrat', sans-serif;
    background-color: pink;
`;

const TitleStyle = styled.h1`
    text-align: center;
`;

export class StockPage extends React.Component<Props, State> {
    render() {
        return (
            <PageStyle>
                <TitleStyle>STOCK TOOL</TitleStyle>
                <KeywordContainer>
                </KeywordContainer>                
            </PageStyle>
        );
    }
}