import styled from 'styled-components';

const Form = styled.form`
display: flex;
background-color: ${props=> props.backgroundColor};
flex-direction: column;
flex-wrap: wrap;
height: ${props=> props.formHeight};
border-radius: 30px;
justify-content: space-between;
align-items: center; 
 margin-right: 10%;
 margin-left: 10%;

 & input{
    background-color: transparent;
    border: 0;
    border-bottom: 3px solid #4EB69F;
    margin-bottom: 35px;
    width: 200px;
    outline: 0;
 }

 & input[type="date" i]{
   border: 3px solid #4EB69F;
   padding: 3px;
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
`;

export default Form;