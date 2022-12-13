import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: rgb(34 60 80 / 20%) 0px 5px 10px 2px;
`;

export const Label = styled.label`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 340px;
  padding: 12px;

  input {
    width: 75%;

    height: 20px;
    padding-left: 10px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    outline: none;
    :hover,
    :focus {
      box-shadow: rgb(38, 57, 77) 0px 5px 30px -7px;
    }
  }
`;

export const Button = styled.button`
  transition: all 200ms linear 0s;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  font-size: 15px;

  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: rgb(169, 219, 216);
  }
`;
