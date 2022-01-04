import styled from "styled-components";
export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -4rem;
  gap: 2rem;

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      padding-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }
    &.highlight-background {
      background: var(--green);
      color: var(--text-body);
    }
  }
`;
