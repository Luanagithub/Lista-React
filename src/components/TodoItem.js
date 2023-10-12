// TodoItem.js
import React, { useRef } from "react";
import imgContato from "./img/contato.png";
import imgEmail from "./img/email.png";
import imgTelefone from "./img/telefone.png";
import "../css/main.css";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo } = props;

  const divRef = useRef(null);

  const changeFocus = () => {
    divRef.current.contentEditable = "true";
    divRef.current.focus();
  };

  const update = (id, e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateTodo({ id, item: divRef.current.textContent });
      divRef.current.contentEditable = "false";
    }
  };

  return (
    <div className="divLista">
      <div
        className="divContato"
        ref={divRef}
        onKeyPress={(e) => update(item.id, e)}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        
        <ul >
          <li >
            <div className="divImg"><img
              src={imgContato}
              alt="Contato"
              style={{ width: "50px", height: "fit-content", margin: "10px 0px 0px 0px" }}
            /></div>
            
            Nome: {item.itemnome}
          </li>
          <li>
          <div className="divImg"><img
              src={imgEmail}
              alt="E-mail"
              style={{ width: "50px", height: "fit-content", margin: "10px 0px 0px 0px" }}
            /></div>
            
            E-mail: {item.itememail}
          </li>
          <li>
          <div className="divImg"><img
              src={imgTelefone}
              alt="Telefone"
              style={{ width: "50px", height: "fit-content", margin: "10px 0px 0px 0px" }}
            /></div>
            Telefone: {item.itemtelefone}
          </li>
        </ul>
  
      </div>
      <div className="btns">
        <button className="btn" onClick={() => changeFocus()}>
          Edit
        </button>
        <button className="btn" onClick={() => removeTodo(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
