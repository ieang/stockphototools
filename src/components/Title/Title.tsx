import * as React from 'react';
import './Title.scss';

export interface Props {
    onTitleChange(e:any): void,
}

export interface State {
    title: string,
}

export class Title extends React.Component<Props, State> {
    constructor() {
        super(null);
        this.state = {
            title: '',
        };
    }

    render() {
        return (
            <div className="TitleText">
                <div className="title-count">{this.state.title.split(' ').length}</div>
                <input type="text" onChange={this.onChange}>
                </input>
            </div>
        );
    }

    private onChange = (e: any) => {
        this.setState({
            title: e.target.value,
        });
        this.forceUpdate();
        this.props.onTitleChange;
    }
}