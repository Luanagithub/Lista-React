import React, { useState } from "react";
import EscopoInput from '../Agenda/EscopoInput.tsx';


const NovoContato = ({novoContato}) =>{
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        novoContato(nome,email,telefone);
        alert("Contato salvo!")

        setNome("");
        setEmail("");
        setTelefone("");
    }

    const limparCampos = (e)=> {
        input.target.value=''
    }

    return (
    <div className="todo-form">
        <h2>Novo Contato</h2>

        <form onSubmit={handleSubmit}>
            <EscopoInput>
            <input className="input" type="text" value={nome}  placeholder="Digite o título" onChange={(e)=> setNome(e.target.value)} ></input>
            <input className="input" type="text" value={telefone} placeholder="Digite o título" onChange={(e)=> setTelefone(e.target.value)}></input>
            <input className="input" type="text" value={email} placeholder="Digite o título" onChange={(e)=> setEmail(e.target.value)}></input>
            <button type="submit" onClick={limparCampos}>Salvar</button>
            </EscopoInput>
        </form>
    </div>
    )
}

export default NovoContato;
