import React, { useState } from 'react';
import EscopoStyled from '../Agenda/Escopo.tsx';
import AddContato from '../AddContato/NovoContato.tsx';

function Contato() {
    const [todos, setTodos] = useState([
        {
            name: 'Dan',
            email: 'dan@example.com',
            telefone: '123-456-7890'
        },
        {
            name: 'Andie',
            email: 'Andie@example.com',
            telefone: '000-456-7890',
        },
    ]);

    const [editingIndex, setEditingIndex] = useState(null);
    const [editNome, setEditNome] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editTelefone, setEditTelefone] = useState('');

    const novoContato = (nome, email, telefone) => {
        const newTodos = [
            ...todos,
            {
                name: nome,
                email: email,
                telefone: telefone,
            },
        ];

        setTodos(newTodos);
    };

    const handleEditClick = (index) => {
        setEditingIndex(index);
        // Preencha os campos de entrada de texto com os valores atuais
        setEditNome(todos[index].name);
        setEditEmail(todos[index].email);
        setEditTelefone(todos[index].telefone);
    };

    const handleSaveClick = (index) => {
        if (index === editingIndex) {
            // Clone o array de contatos
            const updatedTodos = [...todos];

            // Modifique apenas o contato que está sendo editado
            updatedTodos[index] = {
                name: editNome,
                email: editEmail,
                telefone: editTelefone,
            };

            // Atualize o estado com o novo array modificado
            setTodos(updatedTodos);
            setEditingIndex(null);
        }
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <p>Nome: {editingIndex === index ? <input value={editNome} type="text" onChange={(e) => setEditNome(e.target.value)} /> : todo.name}</p>
                    <p>Email: {editingIndex === index ? <input value={editEmail} type="text" onChange={(e) => setEditEmail(e.target.value)} /> : todo.email}</p>
                    <p>Telefone: {editingIndex === index ? <input value={editTelefone} type="text" onChange={(e) => setEditTelefone(e.target.value)} /> : todo.telefone}</p>
                    {editingIndex === index ? (
                        <button id="salvar" onClick={() => handleSaveClick(index)}>Salvar</button>
                    ) : (
                        <button id="editar" onClick={() => handleEditClick(index)}>Editar</button>
                    )}
                    <button id="remove" onClick={() => removeTodo(index)}>Excluir</button>
                    <br />
                    <br />
                </div>
            ))}

            <AddContato novoContato={novoContato} />
        </div>
    );
}

export default Contato;
