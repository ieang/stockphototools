import * as React from 'react';
import styled from 'styled-components';

export interface Props {
    onTitleChange(e:any): void,
}

export interface State {
    title: string,
}

const Wrapper = styled.input`
    height: 30px;
    margin-bottom: 10px;
    width: 100%;
`;

export class Title extends React.Component<Props, State> {
    constructor() {
        super(null);
        this.state = {
            title: '',
        };
    }

    render() {
        return (
            <Wrapper type="text" onChange={this.props.onTitleChange}>
            </Wrapper>
        );
    }
}