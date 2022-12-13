import styled from 'styled-components';

export const Box = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px teal;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
  max-width: 500px;

  h1,
  h2 {
    color: teal;
  }

  div {
    box-shadow: rgb(34 60 80 / 20%) 0px 5px 10px 2px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
