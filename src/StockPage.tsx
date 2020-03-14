import * as React from "react";

import { KeywordContainer } from './components/Keyword/KeywordContainer';

export interface Props { 
    compiler: string; 
    framework: string; 
}

export interface State {

}

export class StockPage extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <h1>STOCK TOOL</h1>
                <KeywordContainer>
                </KeywordContainer>
                
            </div>
        );
    }
}