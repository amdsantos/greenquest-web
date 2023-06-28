import "./Learn.css";

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

const Learn = () => {
  return (
    <div>
      <Header />
      <div className="learn">
        <Menu vertical="true" />
        <Card border="true">
          <h2>O que é ESG?</h2>
          <div>
            <p>
              ESG significa Environmental, Social and Governance (ambiental,
              social e governança). São práticas relacionadas ao meio ambiente,
              responsabilidade social e governança de uma organização. O termo
              foi criado em 2004 e está relacionado aos 17 Objetivos de
              Desenvolvimento Sustentável estabelecidos pelo Pacto Global,
              envolvendo a ONU e várias entidades internacionais.
            </p>
            <p>
              A jornada do ESG envolve transformar os negócios para construir um
              mundo inclusivo, ético e sustentável, buscando o alinhamento entre
              lucro, propósito e transparência. As ideias que sustentam os
              investimentos ESG têm raízes antigas e foram reforçadas ao longo
              do tempo por preocupações ambientais e sociais.
            </p>
            <p>
              Desde 2004 o ESG cresceu significativamente tendo milhares de
              signatários e trilhões de dólares em ativos comprometidos com
              esses princípios. Os Objetivos de Desenvolvimento Sustentável da
              ONU também apoiam os critérios ESG e podem gerar oportunidades
              econômicas estimadas em trilhões de dólares.
            </p>
            <p>
              O ESG é importante para as empresas e investidores, não apenas
              como uma estrutura de relatórios, mas também para atender às
              demandas dos funcionários, reguladores e sociedade em geral. O
              conceito está cada vez mais presente no mundo dos negócios,
              mostrando que o valor de uma empresa não se baseia apenas em
              resultados financeiros, mas também em suas conquistas não
              materiais e contribuição para a sociedade.
            </p>
            <p>
              No Brasil, o conceito de ESG tem ganhado relevância nos últimos
              anos, impulsionado pela mobilização do mercado e a pandemia da
              Covid-19. Empresas estão sendo estimuladas a repensar e criar
              soluções que atendam aos critérios ESG.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Learn;
