import styled from 'styled-components';


const Input = styled.input`
    padding: 8px;
    margin-top: 4px;

    border: 1px solid gray;    

    :invalid {
        border-bottom: 2px red solid;
    }
`


export default Input;