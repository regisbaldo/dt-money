import styled from "styled-components";
import { darken, transparentize } from "polished";
export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    border: 1px solid #d7d7d7;
    background: #e9e9ee;
    height: 4rem;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 0.25rem;
    padding: 0 1.5rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;
    height: 4rem;
    padding: 0 1.5rem;
    color: #fff;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.25s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
export const TransactionTypeContainer = styled.div`
  margin: 1rem 0rem;
  gap: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#e52e4d",
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d7d7d7;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  height: 4rem;
  font-weight: 400;

  border-radius: 0.25rem;
  padding: 0 1.5rem;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  span {
    display: inline;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
