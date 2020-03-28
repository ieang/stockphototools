import * as React from "react";
import { Title } from '../Title/Title';
import { BLACKLIST_KEYWORDS } from '../Constants/Constants';
import KeywordArea from "./KeywordArea/KeywordArea";
import KeywordResult from "./KeywordResult/KeywordResult";
import Note from "./Note/Note";
import styled from "styled-components";

export interface Props {
}

export interface State {
    title: string,
    keywords: string,
    newKeywords: string,
    copied: boolean,
}

const KeywordContainerStyle = styled.div`
    margin: 50px;
`;

const WraprStyle = styled.div`
    width: 100%;
`;

export class KeywordContainer extends React.Component<Props, State> {
    constructor() {
        super({});
        this.state = {
            title: '',
            keywords: '',
            newKeywords: '',
            copied: false,
        };
    }

    componentWillUpdate(nextProps:Props, nextState:State) {
        if(this.state.keywords !== nextState.keywords ||
        this.state.title !== nextState.title) {
            this.buildKeywords();
        }        
    }

    render() {
        const keywords = this.buildKeywords();

        return (
            <KeywordContainerStyle>
                <WraprStyle>
                    <Title onTitleChange={this.onTitleChange}></Title>
                    <KeywordArea onInputChange={this.onKeywordChange}></KeywordArea>
                    <KeywordResult keywords={keywords}></KeywordResult>
                    <Note />
                </WraprStyle>
            </KeywordContainerStyle>
        );
    }

    private onKeywordChange = (e: any) => {
        this.setState({
            keywords: e.target.value,
        });
        this.forceUpdate();
    }

    private onTitleChange = (e:any) => {
        this.setState({
            title: e.target.value,
        });
        this.forceUpdate();
    }

    private buildKeywords = (): string => {
        var titlesFormat = this.state.title.replace(/,/g , ' ');
        var titles = titlesFormat.split(' ');

        const keywords = this.state.keywords.split(',');

        var newKws = titles.concat(keywords);
        newKws = newKws.map(function (e) {
            return e.trim().replace('.','');
            });

        const newKwsLowwerCase = newKws.toLocaleString().toLocaleLowerCase().split(',');
        const uniqueKws = newKwsLowwerCase.filter((val:any, id:any, array:any) => {
            return array.indexOf(val) == id && val !== '';
        });

        const removeBL = this.removeBlackList(uniqueKws);
        const newKwStr = removeBL.join(',').replace(/\,$/, '');
        return newKwStr;
    }

    private removeBlackList = (strArr: string[]): string[] => {
        var newArr = strArr.filter(function(value, index, array) {
            if (BLACKLIST_KEYWORDS.indexOf(value) > -1) {
                return false;
            }
            return true;
        });

        return newArr;
    }
}