import styled from 'styled-components';
import { ReactNode } from 'react'

export const EscopoStyled= styled.form<{ children: ReactNode }>`
    border:5px solid #f3f3f3;
    border-inline-end:5px solid #6a6e84;
    border-inline-start-style:5px solid #373b53;
    padding:10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    min-height: 200px;
    max-height: 300px;
    overflow-y: scroll;
    min-width: 300px;
    max-width: fit-content;
    border-radius: 20px;
    font-size: 15px;
`

interface EscopoComponentProps {
    children: ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EscopoComponent: React.FC<EscopoComponentProps> = (props) => {
    return (
    <EscopoStyled onSubmit={props.onSubmit}>
        {props.children}
    </EscopoStyled>
    );
}

export default EscopoComponent;



