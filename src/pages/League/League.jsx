import React from 'react';
import "./League.css";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import api from "../../services/api";

const League = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const leagueData = {
      name: formData.get('league-name'),
      company: formData.get('league-company'),
      members: formData.get('members-name').split(',').map(name => name.trim()),
    };

    const response = await api.post("/league", leagueData);

  };

  return (
    <div>
      <Header />
      <div className="league">
        <Menu vertical="true" />
        <Card border="true">
          <form className="league__form" onSubmit={onSubmit}>
            <h2>Cadastro de ligas</h2>
            <div>
              <label htmlFor="league-name">Nome da liga</label>
              <input
                type="text"
                placeholder="Digite aqui"
                id="league-name"
                name="league-name"
                required
              />
            </div>
            <div>
              <label htmlFor="league-company">Empresa</label>
              <input
                type="text"
                placeholder="Digite aqui"
                id="league-company"
                name="league-company"
                required
              />
            </div>
            <div>
              <label htmlFor="members-name">Participantes</label>
              <input
                type="text"
                placeholder="Digite aqui"
                id="members-name"
                name="members-name"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default League;
