import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
flex-wrap: wrap;
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