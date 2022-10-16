
import styled from 'styled-components';

const PurchseButton = styled.button`
    background-color: #F2C67D;
    border: 5px solid #4EB69F;
    padding: 10px;
    border-radius: 15px;
    font-size: ${props=> props.size};
    font-weight: bold;
    letter-spacing: 3px;
    width: ${props=> props.width};
    text-align: center;
    cursor: ${props=> props.valid};
   
`;


export default PurchseButton;