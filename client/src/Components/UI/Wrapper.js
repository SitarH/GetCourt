import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center; 
 margin-right: 5%;
 margin-left: 5%;

 &.column{
   flex-direction:column;
 }

 & input[type="date" i]{
    padding: 15px;
    background-color: #F2C67D;
    border: 2px solid #F2C67D;
    border-radius: 15px;
    width: 150px;
 }

 & h2{
    font-weight: 100;
 }
`;

export default Wrapper;