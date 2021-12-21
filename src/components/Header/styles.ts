import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem 12rem;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0rem 2rem;
  background: var(--blue-light);
  color: var(--text-body);
  border: 0;
  border-radius: 0.25rem;
  height: 3rem;
  font-size: 1rem;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;
