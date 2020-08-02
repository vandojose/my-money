/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Open Sans", sans-serif;
    font-size: 14px;    
    a {
      text-decoration: none;
      font-weight: 600;
      color: ${({ theme }) => theme.text};
      transition: color 0.2s ease-in-out;
      &:hover{
        color: ${({ theme }) => theme.secondary}; 
      }
    }
    }

    table {
    width: 100%;
    text-align: left;
    border-spacing: 0;
    border: 0;
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    th,

    td {
      padding: 15px;
      text-align: left;
      white-space: nowrap;
      text-align: center;
    }

    th {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.body};
      
    }

    button {
      height: 30px;
      min-width: 30px;
      border: 0.5px solid ${({ theme }) => theme.primary};
      border-radius: 0;
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      font-weight: 600;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      &:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.body};
      }
    }


    a {
      color: ${({ theme }) => theme.text};
      transition: color 0.2s ease-in-out;
      text-decoration: underline;
      font-weight: 400;
      &:hover{
        color: ${({ theme }) => theme.secondary}; 
      }
    }

  }

`;
