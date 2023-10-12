import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, removeTodos, updateTodos } from '../redux/reducer'; // Corrected the import path
import TodoItem from './TodoItem';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)), // Corrected the action function
    removeTodo: (id) => dispatch(removeTodos(id)), // Corrected the action function
    updateTodo: (obj) => dispatch(updateTodos(obj)), // Corrected the action function
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState('active');
  return (
    <div className="displaytodos">
      <div className="buttons">
        <button className="btn" onClick={() => setSort('active')}>Exibir</button>
        <button className="btn" onClick={() => setSort('completed')}>Ocultar</button>
      </div>
      <ul>
        {props.todos.length > 0 && sort === 'active'
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                  />
                )
              );
            })
          : null}
        {/* for completed items */}
        {props.todos.length > 0 && sort === 'completed'
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                  />
                )
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
