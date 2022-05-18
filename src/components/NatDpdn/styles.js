import styled from "styled-components";

export const StyledButton = styled.button`
  min-height: 50px;
  min-width: 250px;
  text-align: center;
  font-size: 22px;
  color: ${(props) => (props.active ? "white" : "black")};
  background-color: ${(props) =>
    props.active === true ? "rgb(148,148,148)" : "rgb(31,31,31)"};
  border-radius: 5px;
  color: rgb(151, 151, 151);
  border: 0px;
  font-family: "Lato", sans-serif;
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
  position: absolute;
  top: 50px;
`;

export const X = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
