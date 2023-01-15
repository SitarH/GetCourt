import styled from 'styled-components';

const EditForm = styled.form`
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 200px;
justify-content: space-between;
align-items: center; 
 margin-right: 10%;
 margin-left: 10%;
 color: grey;

 & input{
    background-color: transparent;
    border: 0;
    border-bottom: 3px solid #4EB69F;
    outline: 0;
 }

 & .edit{
   
    font-size: 18px;
    letter-spacing: 1px;
    margin-right: 50px
 }

 & select{
    background-color: transparent;
    border: 0;
    border-bottom: 3px solid #4EB69F;
    margin-bottom: 60px;
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

export default EditForm;