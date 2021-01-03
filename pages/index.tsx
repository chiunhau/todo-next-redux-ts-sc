import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head'
import styled from 'styled-components';
import TodoCard from '../components/todoCard';
import { RootState}  from '../store';
import { Todo } from '../store/todoList/types';
import { addTodo, checkTodo, deleteTodo } from '../store/todoList/actions';
import TodoInput from '../components/todoInput';

const SCContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding-top: 100px;
`;

const SCTodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SCTodoListItem = styled.li`
  margin-bottom: 12px;
`;

const Index: React.FC = props => {
  const todos = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();
  
  const handleToggle = (i: number) => {
    dispatch(checkTodo(i));
  }

  const handleDelete = (i: number) => {
    dispatch(deleteTodo(i));
  }

  const handleSubmit = (title: string): void => {
    dispatch(addTodo(title));
  }

  return (
    <div>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SCContainer>
        <h1>Todo App</h1>
        <h3>Next.js + React + Redux + Typescript + Styled Components</h3>
        
        <SCTodoList>
          {
            todos.map((todo: Todo, i: number) => {
              return (
                <SCTodoListItem key={`${todo.title}_${i}`}>
                  <TodoCard 
                    title={todo.title}
                    checked={todo.checked} 
                    onToggle={() => handleToggle(i)}
                    onDelete={() => handleDelete(i)}
                  />
                </SCTodoListItem>
              )
            })
          }
        </SCTodoList>
        <TodoInput onSubmit={handleSubmit}/>
      </SCContainer>
    </div>
  )
}

export default Index;