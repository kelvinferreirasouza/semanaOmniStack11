import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescrition] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const hospital_id = localStorage.getItem('hospital_id');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
         };

         try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: hospital_id,
                }
            })

            history.push('/profile');
         } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.')
         }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="COVID19 Incidents"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para que possamos resolver logo isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescrition(e.target.value)}
                    />
                    <input 
                        placeholder="Quantidade"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}