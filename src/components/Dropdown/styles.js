import styled from "styled-components";

export const StyledButton = styled.button`
  height: 50px;
  width: 250px;
  text-align: center;
  background-color: ${(props) => props.active ? "rgba(155,200,200, 0.2)" : "white"};
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
      background-color: gray;
  }
  `;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 250px;
  text-align: center;
  transform: scaleY(${({scale}) => scale});
  transition: all 0.5s ease;
  transform-origin: top;
`;

export const X = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

