import styled from "styled-components";

const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  background-color: #000000;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  transition: 0.4s background ease-in;
  border: 1px solid transparent;
  &:hover {
    background: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
    cursor: pointer;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background: black;
    border: 1px solid transparent;
    color: white;
    cursor: pointer;
  }
`;

export default Button;
