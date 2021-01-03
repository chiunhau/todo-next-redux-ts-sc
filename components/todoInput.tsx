import * as React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 60px;
  padding: 8px;
`;

const SCForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SCInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  font-size: 20px;
  background-color: transparent;
`;

const SCButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  color: #000;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  onSubmit: (title: string) => void
}

const TodoInput: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = React.useState<string>('');
  
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (value.length > 0) {
      setValue('');
      onSubmit(value);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  return (
    <Card>
      <SCForm onSubmit={handleSubmit}>
        <SCInput
          type="text" 
          placeholder="Add new todo" 
          onChange={handleChange} 
          value={value}
        />
        <SCButton type="submit">
          Add
        </SCButton>
      </SCForm>
    </Card>
  )
}

export default TodoInput;