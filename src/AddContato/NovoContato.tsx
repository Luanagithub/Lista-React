import React, { useState, ChangeEvent, FormEvent } from "react";
import EscopoComponent from "../Agenda/Escopo";

interface ContatoProps {
    novoContato: (nome: string, email: string, telefone: string) => void;
}

const NovoContato: React.FC<ContatoProps>= ({ novoContato }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        novoContato(nome, email, telefone);
        alert("Contato salvo!");

        setNome("");
        setEmail("");
        setTelefone("");
    }

    return (
            <EscopoComponent onSubmit={handleSubmit} >
                    <input className="input" type="text" value={nome} placeholder="Nome" onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
                    <input className="input" type="text" value={telefone} placeholder="Telefone" onChange={(e: ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value)} />
                    <input className="input" type="text" value={email} placeholder="Email" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                    <button type="submit">Salvar</button>
            </EscopoComponent>
    )
}

export default NovoContato;
