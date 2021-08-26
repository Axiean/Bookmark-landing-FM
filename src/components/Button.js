import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.111vw;
  padding: 2vh 2vw;
  border: 2px solid;
  border-radius: 5px;
  letter-spacing: 0.09vw;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  ${({ head_foot }) =>
    head_foot
      ? " background-color: hsl(0, 94%, 66%) ; color: white ; border-color: hsl(0, 94%, 66%) "
      : null};
  &:hover {
    border: 2px solid hsl(0, 94%, 66%);
    ${({ head_foot }) =>
      head_foot ? "background-color: inherit ; color: hsl(0, 94%, 66%)" : null}
  }
`;
