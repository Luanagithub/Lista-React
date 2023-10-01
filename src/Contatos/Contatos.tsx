import { useState } from 'react';
import AddContato from '../AddContato/NovoContato.tsx';

interface Todo {
    name: string;
    email: string;
    telefone: string;
}

function Contato() {
    const [todos, setTodos] = useState<Todo[]>([
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

    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editNome, setEditNome] = useState<string>('');
    const [editEmail, setEditEmail] = useState<string>('');
    const [editTelefone, setEditTelefone] = useState<string>('');

    const novoContato = (nome: string, email: string, telefone: string) => {
        const newTodos: Todo[] = [
            ...todos,
            {
                name: nome,
                email: email,
                telefone: telefone,
            },
        ];

        setTodos(newTodos);
    };

    const handleEditClick = (index: number | null) => {
        if (index !== null) {
            setEditingIndex(index);
            // Preencha os campos de entrada de texto com os valores atuais
            setEditNome(todos[index].name);
            setEditEmail(todos[index].email);
            setEditTelefone(todos[index].telefone);
        }
    };

    const handleSaveClick = (index: number | null) => {
        if (index !== null) {
            // Clone o array de contatos
            const updatedTodos: Todo[] = [...todos];

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

    const removeTodo = (index: number) => {
        const newTodos: Todo[] = [...todos];
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
