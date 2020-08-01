import styled from "styled-components";

export const Container = styled.header`
  display: block;

  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.secondary};
  margin: auto;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.67);
`;
export const LogoBox = styled.div`
  display: flex;
  max-width: 1140px;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin: auto;
  padding: 0 16px;
  a {
    color: ${({ theme }) => theme.body};
    text-decoration: none;
  }
`;
