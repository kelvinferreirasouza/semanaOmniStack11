import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const hospital_id = localStorage.getItem('hospital_id');
    const hospital_name = localStorage.getItem('hospital_name');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: hospital_id,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [hospital_id]);

    async function handleDeleteIncident(id) {
        
        //realiza o delete
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: hospital_id,
                }
            });
        } catch (erro) {
            alert('Erro ao deletar, tente novamente');
        }

        //realiza a varredura na listagem para remover o elemento excluido
        setIncidents(incidents.filter(incident => incident.id != id));
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }


    /**
     * Para formatar um valor em moeda R$
     * <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
     */

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="COVID19 Incidents" />
                <span>Bem vinda, { hospital_name }</span>

                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size="18" color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>QUANTIDADE:</strong>
                        <p>{incident.value}</p>

                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}