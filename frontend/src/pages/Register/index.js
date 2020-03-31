import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
    async function handleRegister(e){
        
        /**
         * verifica se o formulário está vazio, se sim, não atualiza a página ao clicar no botão
         * deve ser incluso o onSubmit={handleName}
         */
        e.preventDefault();

        const data = {
            name,
            email,
            contact,
            city,
            uf,
        };

        try {
            const response = await api.post('hospitals', data);
            alert(`Seu ID de acesso: ${ response.data.id } `);
            
            // funcao que envia o usuario para a rota determinada
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="COVID19 Incidents"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de Corona Virus no Brasil.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>

                    <input 
                        placeholder="Nome do Hospital"
                        value={name}
                        onChange={ e => setName(e.target.value) }
                    />

                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                    />

                    <input 
                        placeholder="Contato"
                        value={contact}
                        onChange={ e => setContact(e.target.value) }
                    />

                    <div className="input-group">

                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={ e => setCity(e.target.value) }
                        />

                        <input 
                            placeholder="UF"
                            value={uf}
                            onChange={ e => setUf(e.target.value) }
                            style={{ width: 80 }}
                        />

                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}