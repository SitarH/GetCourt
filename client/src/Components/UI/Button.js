
import styled from 'styled-components';

const Button = styled.button`
    background-color: #F2C67D;
    border: 2px solid #F2C67D;
    padding: ${props=> props.padding};
    border-radius: 15px;
    font-size: 15px;
    width: ${props=> props.width};
    text-align: center;
    cursor: pointer;
    margin-right: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &.clicked{
        background-color: #CCAC76;
        border: 2px solid #CCAC76;
    }

    &.disabled{
        cursor: default;
    }
`;


export default Button;