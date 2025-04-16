import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%; /* span entire container */
  background-color: #1d1836;
  border: 2px solid rgba(148, 84, 255, 0.3); /* subtle purple border */
  box-shadow: 0 0 20px rgba(148, 84, 255, 0.1);
  border-radius: 12px;
  padding: 2.5rem;

  @media (min-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 0.8rem;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-size: 3rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 10px;
  background-color: #1c1535;
  color: #fff;
  border: none;
  outline: none;
  font-size: 2rem;
  width: 100%;
  &::placeholder {
    color: #aaa;
  }
`;

export const Textarea = styled.textarea`
  padding: 1rem;
  border-radius: 10px;
  background-color: #1c1535;
  color: #fff;
  border: none;
  outline: none;
  font-size: 2rem;
  resize: none;
  width: 100%;
  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  background-color: #5c1b8d;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: background 0.3s;
  align-self: flex-start;

  &:hover {
    background-color: #7721b3;
  }
`;
