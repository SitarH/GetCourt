
import styled from 'styled-components';

const GameDetsCard = styled.div`

    background-color: ${props=> props.backgroundColor};
    height: ${props=> props.height};
    width: ${props=> props.width};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    flex-direction: row;
    padding: ${props=> props.padding};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

   & p{
      
      margin-right: 25px;
      width: 80px;
   }

}

`;


export default GameDetsCard;