import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import covidImg from '../../assets/covid19.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        /**
         * verifica se o formulário está vazio, se sim, não atualiza a página ao clicar no botão
         * deve ser incluso o onSubmit={handleName}
         */
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('hospital_id', id);
            localStorage.setItem('hospital_name', response.data.name);

            // funcao que envia o usuario para a rota determinada
            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Covid19 - Incidents"/>
            
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={ e => setId(e.target.value) }
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={covidImg} alt="Covid" />
        </div>
    );
}