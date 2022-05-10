import styled from "styled-components";

export const StyledButton = styled.button`
  min-height: 50px;
  min-width: 250px;
  text-align: center;
  font-size: 16px;
  color: ${(props) => (props.active ? "white" : "black")};
  background-color: ${(props) => (props.active ? "rgb(128,128,128)" : "white")};
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: rgb(188, 188, 188);
    color: black;
  }
`;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  text-align: center;
  transform: scaleY(${({ scale }) => scale});
  transition: all 0.5s ease;
  transform-origin: top;
  overflow: scroll;
`;

export const X = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
