// Todos.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefone = (e) => {
    setTelefone(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Preencha o Nome");
    } else {
      const itemNome = todo;
      const itemEmail = email;
      const itemTelefone = telefone;

      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        itemnome: itemNome,
        itememail: itemEmail,
        itemtelefone: itemTelefone,
        completed: false,
      });

      setTodo("");
      setEmail("");
      setTelefone("");
    }
  };

  return (
    <div className="addTodos">
      <input
        placeholder="Nome"
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <input
        placeholder="E-mail"
        type="text"
        onChange={(e) => handleEmail(e)}
        className="todo-input"
        value={email}
      />

      <input
        placeholder="Telefone"
        type="text"
        onChange={(e) => handleTelefone(e)}
        className="todo-input"
        value={telefone}
      />

      <button className="add-btn" onClick={() => add()}>
        +
      </button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
