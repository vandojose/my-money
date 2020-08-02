import styled from "styled-components";
import { Plus } from "styled-icons/icomoon/";

export const Container = styled.div`
  padding: 10px 0;
  width: 100%;
`;

export const Select = styled.select`
  margin-right: 10px;
  height: 30px;
  min-width: 70px;
  text-align: center;
  border: 0.5px solid ${({ theme }) => theme.primary};
  border-radius: 0;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Add = styled.button`
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
`;

export const PlusIcon = styled(Plus)`
  width: 13px;
  height: 13px;
`;
