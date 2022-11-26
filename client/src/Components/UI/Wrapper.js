import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-direction: ${props => props.direction};
align-items: center; 
 margin-right: 5%;
 margin-left: 5%;

 &.column{
   flex-direction: column;
 }

 &.column .wrap{
   display: flex;
   flex-wrap: wrap;
 }

 &.column .wrap .court{
   margin: 10px;
   padding: 10px;
   flex: 40%;
 }

 &.column .wrap .court .rowDirection{
   display: flex;
  flex-direction: row;
 }

 & input[type="date" i], [type="time" i], select{
    background-color: #F2C67D;
    border: 2px solid #F2C67D;
    width: ${props => props.width};
 }


 & h2{
    font-weight: 100;
 }
`;

export default Wrapper;