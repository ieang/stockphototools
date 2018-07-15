import * as React from "react";
import * as  CopyToClipboard from 'react-copy-to-clipboard';
import { Title } from '../Title/Title';
import { BLACKLIST_KEYWORDS } from '../Constants/Constants';
import './KeywordText.scss';

export interface Props {
}

export interface State {
    title: string,
    keywords: string,
    newKeywords: string,
    copied: boolean,
}

export class KeywordText extends React.Component<Props, State> {
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
        const kws = this.buildKeywords();

        return (
            <div className="KeywordText">
                <Title onTitleChange={this.onTitleChange}></Title>
                <textarea className="kw-input" onInput={this.onChange}></textarea>
                <div className="kws">{kws}</div>
                <div className="kw-count">{kws.split(',').length}</div>
                <span className="copy-to-kb">
                    <CopyToClipboard text={kws} onCopy={() => this.setState({copied: true})}>
                        <button>Copy keywords</button>
                    </CopyToClipboard>                 
                </span>
                <textarea className="kw-input"></textarea>
            </div>
        );
    }

    private onChange = (e: any) => {
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
        const uniqueKws = newKws.filter((val:any, id:any, array:any) => {
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