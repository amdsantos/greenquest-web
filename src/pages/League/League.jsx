import "./League.css";

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

const League = () => {
  return (
    <div>
      <Header />
      <div className="league">
        <Menu vertical="true" />
        <Card border="true">
          <form className="league__form">
            <h2>Cadastro de ligas</h2>
            <div>
              <label htmlFor="league-name">Nome da liga</label>
              <input
                type="text"
                placeholder="Digite aqui"
                id="league-name"
                required
              />
            </div>
            <div>
              <label htmlFor="league-company">Empresa</label>
              <input
                type="text"
                placeholder="Digite aqui"
                id="league-company"
                required
              />
            </div>
            <div>
              <label htmlFor="members-name">Participantes</label>
              <input
                type="text"
                placeholder="Digite aqui"
                id="members-name"
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
