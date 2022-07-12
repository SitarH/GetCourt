
import styled from 'styled-components';

const Card = styled.div`
    background-color: #F5D28E;
    height: ${props=> props.height};
    width: 400px;
    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    flex-direction: column;


    & h2{
        font-weight: 100;
        line-height: 0;
    }
}

`;


export default Card;