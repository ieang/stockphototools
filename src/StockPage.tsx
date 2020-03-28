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
`;

export class StockPage extends React.Component<Props, State> {
    render() {
        return (
            <PageStyle>
                <h1>STOCK TOOL</h1>
                <KeywordContainer>
                </KeywordContainer>
                
            </PageStyle>
        );
    }
}