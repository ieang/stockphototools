import * as React from "react";
import { KeywordText } from './components/Keyword/KeywordText';

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
                <h1>STOCK PHOTO TOOL</h1>
                <KeywordText></KeywordText>                
            </div>
        );
    }
}