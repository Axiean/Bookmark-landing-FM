import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.111vw;
  padding: 1vw 2vw;
  border: 2px solid;
  border-radius: 5px;
  letter-spacing: 0.09vw;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  ${({ head_foot }) =>
    head_foot
      ? " background-color: hsl(0, 94%, 66%) ; color: white ; border-color: hsl(0, 94%, 66%) "
      : null};
  ${({ hero }) =>
    hero
      ? " background-color: hsl(231, 69%, 60%) ; color: white ; border-color:hsl(231, 69%, 60%) "
      : null};

  &:hover {
    /* border: 2px solid hsl(0, 94%, 66%); */
    ${({ head_foot }) =>
      head_foot ? "background-color: inherit ; color: hsl(0, 94%, 66%)" : null}
    ${({ hero }) =>
      hero ? "background-color: inherit ; color: hsl(231, 69%, 60%)" : null}
  }
`;
