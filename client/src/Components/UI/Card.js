
import styled from 'styled-components';

const Card = styled.div`

    background-color: ${props=> props.backgroundColor};
    height: ${props=> props.height};
    width: ${props=> props.width};
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    flex-direction: ${props=> props.direction};
    padding: ${props=> props.padding};
    flex-wrap: wrap;
    

   & p{
      line-height:0 ;
   }
    & h2{
        font-weight: 100;
        line-height: 0;
    }

    & select{
        background-color: transparent;
        border: 0;
        border-bottom: 3px solid #4EB69F;
        margin-bottom: 60px;
        width: 200px;
        outline: 0;
        font-size:15px;
     }
    
     
     & input::placeholder{
        font-size:15px;
        color: black;
     }
    
     [placeholder]:focus::-webkit-input-placeholder {
        transition: text-indent 0.3s 0.3s ease; 
        text-indent: -100%;
        opacity: 1;
     }
}

`;


export default Card;