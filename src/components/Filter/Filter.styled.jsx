import styled from 'styled-components';
import { Field as FormikFild } from 'formik';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Field = styled(FormikFild)`
  display: block;
  margin-top: 10px;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 1.2rem;
  color: #6a666b;
`;
