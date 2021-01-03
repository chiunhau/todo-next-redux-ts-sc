import * as React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 60px;
  padding: 12px;
  border-radius: 12px;
  background-color: #eee;
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
  margin-left: 1rem;
  width: 100%;
  font-size: 20px;
`;


type CheckBoxProps = {
  checked: boolean
}
const CheckBox = styled.div<CheckBoxProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #aaa;
  background-color: ${props => props.checked ? '#333' : '#fff'};

  &:hover {
    cursor: pointer;
  }
`;

const SCDelete = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  title: string,
  checked: boolean,
  onToggle: () => void,
  onDelete: () => void
}

const TodoCard: React.FC<Props> = ({title, checked, onToggle, onDelete}) => {
  return (
    <Card>
      <CheckBox checked={checked} onClick={onToggle}/>
      <Title>{title}</Title>
      <SCDelete onClick={onDelete}>X</SCDelete>
    </Card>
  )
}

export default TodoCard;