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
                <input type="text" onChange={this.props.onTitleChange}>
                </input>
            </div>
        );
    }
}