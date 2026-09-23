import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowDown,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Gamepad2,
  Mail,
  Network,
} from "lucide-react";

import {
  FaJava,
  FaLinkedinIn,
  FaPython,
  FaReact,
} from "react-icons/fa";

import "./App.css";


/* =========================================================
   CALOPSITA
========================================================= */

function CockatielMascot() {
  return (
    <img
      src="/calopsita.jpg"
      alt="Calopsita mascote do portfólio"
      className="cockatiel-image"
    />
  );
}


/* =========================================================
   CARD DE CONHECIMENTO
========================================================= */

function KnowledgeCard({
  grupo,
  aberto,
  onClick,
}) {
  return (
    <article
      className={`knowledge-card ${aberto ? "knowledge-card-open" : ""
        }`}
    >
      <button
        type="button"
        className="knowledge-button"
        onClick={onClick}
      >
        <div className="knowledge-icon">
          {grupo.icone}
        </div>

        <div className="knowledge-title">
          <h3>{grupo.titulo}</h3>
          <span>{grupo.subtitulo}</span>
        </div>

        <div
          className={`knowledge-chevron ${aberto ? "knowledge-chevron-open" : ""
            }`}
        >
          <ChevronDown size={19} />
        </div>
      </button>

      <div
        className={`knowledge-expand ${aberto ? "knowledge-expand-open" : ""
          }`}
      >
        <div className="knowledge-expand-inner">
          <div className="knowledge-content">
            <p>
              Conhecimentos e experiências:
            </p>

            <ul>
              {grupo.itens.map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  const [openKnowledge, setOpenKnowledge] =
    useState(null);

  const [activeSection, setActiveSection] =
    useState("inicio");


  /* =======================================================
     CONHECIMENTOS
  ======================================================= */

  const conhecimentos = [
    {
      titulo: "Java & Spring",
      subtitulo: "Backend e aplicações web",
      icone: <FaJava />,
      itens: [
        "Java",
        "Spring Boot",
        "APIs REST",
        "Aplicações Web",
        "Programação Orientada a Objetos",
        "Integração com Banco de Dados",
      ],
    },

    {
      titulo: "Python & Dados",
      subtitulo: "Processamento, dados e APIs",
      icone: <FaPython />,
      itens: [
        "Python",
        "Pandas",
        "GeoPandas",
        "FastAPI",
        "ETL",
        "Processamento de Dados",
        "Integração com PostgreSQL",
      ],
    },

    {
      titulo: "Banco de Dados",
      subtitulo: "Dados relacionais e geográficos",
      icone: <Database />,
      itens: [
        "PostgreSQL",
        "PostGIS",
        "Oracle SQL",
        "PL/SQL",
        "Modelagem Relacional",
        "Consultas SQL",
      ],
    },

    {
      titulo: "Frontend",
      subtitulo: "Interfaces e aplicações web",
      icone: <FaReact />,
      itens: [
        "React",
        "JavaScript",
        "Angular",
        "Consumo de APIs",
        "Interfaces Responsivas",
      ],
    },

    {
      titulo: "C# & Desktop",
      subtitulo: "Aplicações desktop",
      icone: <Code2 />,
      itens: [
        "C#",
        "Windows Forms",
        "Aplicações Desktop",
        "Programação Orientada a Objetos",
      ],
    },

    {
      titulo: "Game Development",
      subtitulo: "Programação e criatividade",
      icone: <Gamepad2 />,
      itens: [
        "Godot",
        "Lógica de Jogos",
        "Criação de Mecânicas",
        "Projeto Autoral Última Virtude",
      ],
    },

    {
      titulo: "Infraestrutura",
      subtitulo: "Redes e suporte",
      icone: <Network />,
      itens: [
        "Suporte de Redes",
        "Infraestrutura",
        "DHCP",
        "Suporte Técnico",
        "Ambiente Corporativo",
      ],
    },

    {
      titulo: "Idiomas",
      subtitulo: "Comunicação",
      icone: (
        <span className="text-icon">
          EN
        </span>
      ),
      itens: [
        "Inglês intermediário",
      ],
    },
  ];


  /*
    Duas colunas independentes.

    Isso evita que abrir um card
    aumente a altura do card vizinho.
  */

  const colunaEsquerda =
    conhecimentos.filter(
      (_, index) => index % 2 === 0
    );

  const colunaDireita =
    conhecimentos.filter(
      (_, index) => index % 2 !== 0
    );


  /* =======================================================
     FALAS DA CALOPSITA
  ======================================================= */

  const falas = {
    inicio: {
      titulo:
        "Oi! Eu sou sua guia por aqui 💕",

      texto:
        "Vou te mostrar um pouco sobre a Julia, os projetos dela e tudo que ela vem construindo.",

      link:
        "#conhecimentos",

      linkTexto:
        "Vamos começar ↓",
    },


    conhecimentos: {
      titulo:
        "Clique nos cards! 👀",

      texto:
        "Tem mais coisas escondidas aí. Cada bloco mostra experiências da Julia naquela área.",

      link:
        "#veltis-intro",

      linkTexto:
        "Agora vem o projeto principal ↓",
    },


    "veltis-intro": {
      titulo:
        "Esse é o principal projeto! ✨",

      texto:
        "O Veltis é uma plataforma orientada a dados criada para reunir e organizar informações da Região Metropolitana de Sorocaba.",

      link:
        "#veltis-fontes",

      linkTexto:
        "De onde vêm os dados? ↓",
    },


    "veltis-fontes": {
      titulo:
        "Os dados são públicos 📊",

      texto:
        "O projeto utiliza fontes como IBGE, SIDRA e INEP. Antes de entrar no sistema, os dados passam por pesquisa, organização e validação.",

      link:
        "#veltis-fluxo",

      linkTexto:
        "Ver como são processados ↓",
    },


    "veltis-fluxo": {
      titulo:
        "Aqui entra bastante Python 🐍",

      texto:
        "Pandas e GeoPandas ajudam no tratamento dos dados. Depois, as informações seguem para PostgreSQL e PostGIS.",

      link:
        "#veltis-implementacao",

      linkTexto:
        "Ver uma etapa real ↓",
    },


    "veltis-implementacao": {
      titulo:
        "Essa parte já funciona! 💻",

      texto:
        "A malha municipal de São Paulo foi processada, filtrada para os 27 municípios da RMS, validada e inserida no PostGIS.",

      link:
        "#veltis-status",

      linkTexto:
        "E como está o projeto? ↓",
    },


    "veltis-status": {
      titulo:
        "O Veltis ainda está crescendo 🌱",

      texto:
        "A estrutura inicial, o banco e a primeira carga territorial já existem. Agora outras bases estão sendo integradas.",

      link:
        "#portfolio",

      linkTexto:
        "Conhecer outro projeto ↓",
    },


    portfolio: {
      titulo:
        "Esse site também é um projeto 💻",

      texto:
        "A Julia também ama jornalismo e quer transformar este espaço futuramente em blog, notícias e conteúdo autoral.",

      link:
        "#ultima-virtude",

      linkTexto:
        "Tem mais um projeto ↓",
    },


    "ultima-virtude": {
      titulo:
        "Sim... ela também fez jogo 🎮",

      texto:
        "Última Virtude é um projeto autoral desenvolvido com Godot para explorar programação, criatividade e mecânicas.",

      link:
        "#trajetoria",

      linkTexto:
        "Conhecer a trajetória ↓",
    },


    trajetoria: {
      titulo:
        "Agora a história dela 📚",

      texto:
        "A trajetória começou na formação técnica, continua na FATEC e já está sendo colocada em prática profissionalmente.",

      link:
        "#contato",

      linkTexto:
        "Chegar ao final ↓",
    },


    contato: {
      titulo:
        "Você chegou até o fim! 💕",

      texto:
        "Se quiser conversar sobre tecnologia, projetos ou oportunidades, é só entrar em contato com a Julia.",

      link:
        "#inicio",

      linkTexto:
        "Voltar ao início ↑",
    },
  };


  /* =======================================================
     OBSERVAR SCROLL
  ======================================================= */

  useEffect(() => {
    const ids = [
      "inicio",
      "conhecimentos",
      "veltis-intro",
      "veltis-fontes",
      "veltis-fluxo",
      "veltis-implementacao",
      "veltis-status",
      "portfolio",
      "ultima-virtude",
      "trajetoria",
      "contato",
    ];

    const elements = ids
      .map((id) =>
        document.getElementById(id)
      )
      .filter(Boolean);


    const observer =
      new IntersectionObserver(
        (entries) => {
          const visiveis =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (visiveis.length > 0) {
            setActiveSection(
              visiveis[0].target.id
            );
          }
        },
        {
          threshold: [
            0.12,
            0.25,
            0.4,
          ],

          rootMargin:
            "-10% 0px -45% 0px",
        }
      );


    elements.forEach((element) =>
      observer.observe(element)
    );


    return () => {
      observer.disconnect();
    };
  }, []);


  const falaAtual =
    falas[activeSection] ||
    falas.inicio;


  return (
    <div className="site">


      {/* ===================================================
          FUNDO DECORATIVO
      =================================================== */}

      <div className="background-decoration">
        <div className="bg-orb orb-one"></div>
        <div className="bg-orb orb-two"></div>
        <div className="bg-orb orb-three"></div>
        <div className="bg-orb orb-four"></div>
      </div>


      {/* ===================================================
          ÚNICA CALOPSITA DO SITE
      =================================================== */}

      <aside className="mascot-guide">

        <motion.div
          className="mascot-character"
          animate={{
            y: [0, -7, 0],
            rotate: [0, -1, 1, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <CockatielMascot />
        </motion.div>


        <AnimatePresence mode="wait">

          <motion.div
            key={activeSection}
            className="mascot-message"

            initial={{
              opacity: 0,
              x: -10,
              y: 7,
            }}

            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}

            exit={{
              opacity: 0,
              x: -8,
            }}

            transition={{
              duration: 0.23,
            }}
          >

            <strong>
              {falaAtual.titulo}
            </strong>

            <p>
              {falaAtual.texto}
            </p>

            <a href={falaAtual.link}>
              {falaAtual.linkTexto}
            </a>

          </motion.div>

        </AnimatePresence>

      </aside>


      {/* ===================================================
          NAVBAR
      =================================================== */}

      <header className="navbar">

        <a
          href="#inicio"
          className="logo"
        >
          Julia<span>.</span>
        </a>


        <nav>

          <a href="#conhecimentos">
            Conhecimentos
          </a>

          <a href="#veltis">
            Veltis
          </a>

          <a href="#portfolio">
            Projetos
          </a>

          <a href="#trajetoria">
            Trajetória
          </a>

        </nav>


        <a
          href="#contato"
          className="nav-contact"
        >
          Contato
        </a>

      </header>


      {/* ===================================================
          HOME
      =================================================== */}

      <section
        id="inicio"
        className="section hero-section"
      >

        <motion.div
          className="hero-center"

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <span className="hero-tag">
            ✦ Desenvolvimento • Dados • Tecnologia
          </span>


          <h1>
            Oi, eu sou
            <span>Julia.</span>
          </h1>


          <h2>
            Transformo ideias em aplicações,
            dados em informação e projetos
            em experiências.
          </h2>


          <p className="hero-description">
            Sou estudante de Análise e Desenvolvimento
            de Sistemas, desenvolvedora em formação e
            apaixonada por tecnologia, dados, criação
            de software e jornalismo.
          </p>


          <div className="hero-actions">

            <a
              href="#conhecimentos"
              className="primary-button"
            >
              Conhecer meu trabalho

              <ArrowDown size={17} />
            </a>


            <a
              href="#veltis"
              className="secondary-button"
            >
              Ver projeto principal
            </a>

          </div>

        </motion.div>

      </section>


      {/* ===================================================
          CONHECIMENTOS
      =================================================== */}

      <section
        id="conhecimentos"
        className="section knowledge-section"
      >

        <div className="section-header">

          <span>
            Conhecimentos
          </span>


          <h2>
            O que eu já explorei
            na tecnologia
          </h2>


          <p>
            Linguagens, ferramentas e áreas que
            fizeram parte dos meus projetos,
            estudos e experiências.
            Clique nos blocos para conhecer mais.
          </p>

        </div>


        <div className="knowledge-columns">


          {/* COLUNA ESQUERDA */}

          <div className="knowledge-column">

            {colunaEsquerda.map(
              (grupo) => {

                const index =
                  conhecimentos.indexOf(grupo);

                return (
                  <KnowledgeCard
                    key={grupo.titulo}

                    grupo={grupo}

                    aberto={
                      openKnowledge === index
                    }

                    onClick={() =>
                      setOpenKnowledge(
                        openKnowledge === index
                          ? null
                          : index
                      )
                    }
                  />
                );
              }
            )}

          </div>


          {/* COLUNA DIREITA */}

          <div className="knowledge-column">

            {colunaDireita.map(
              (grupo) => {

                const index =
                  conhecimentos.indexOf(grupo);

                return (
                  <KnowledgeCard
                    key={grupo.titulo}

                    grupo={grupo}

                    aberto={
                      openKnowledge === index
                    }

                    onClick={() =>
                      setOpenKnowledge(
                        openKnowledge === index
                          ? null
                          : index
                      )
                    }
                  />
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          VELTIS
      =================================================== */}

      <section
        id="veltis"
        className="section veltis-section"
      >

        <div className="veltis-glow"></div>


        <div className="section-header veltis-header">

          <span>
            Projeto em destaque
          </span>


          <h2>
            Veltis
          </h2>


          <p>
            Plataforma web orientada a dados para
            integrar, organizar e futuramente
            visualizar informações da Região
            Metropolitana de Sorocaba.
          </p>

        </div>


        {/* ===============================
            INTRODUÇÃO
        =============================== */}

        <motion.article
          id="veltis-intro"
          className="veltis-feature"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <div>

            <span className="card-label">
              Sobre o projeto
            </span>


            <h3>
              Dados públicos transformados
              em informação acessível
            </h3>


            <p>
              O Veltis nasceu como Projeto Integrador
              com a proposta de reunir informações
              provenientes de diferentes bases públicas
              em uma única estrutura.
            </p>


            <p>
              O projeto trabalha com informações
              territoriais, demográficas e educacionais,
              permitindo relacionar municípios,
              escolas, cursos técnicos, instituições
              de ensino superior e cursos.
            </p>

          </div>


          <div className="veltis-number">

            <strong>
              27
            </strong>

            <span>
              municípios da Região Metropolitana
              de Sorocaba
            </span>

          </div>

        </motion.article>


        {/* ===============================
            PROBLEMA E SOLUÇÃO
        =============================== */}

        <div className="veltis-grid">

          <article className="project-card">

            <span className="card-label">
              O problema
            </span>


            <h3>
              Dados espalhados
              em diferentes fontes
            </h3>


            <p>
              As informações utilizadas pelo projeto
              são disponibilizadas por diferentes
              órgãos públicos, em formatos e
              estruturas distintas.
            </p>


            <p>
              Antes de serem utilizadas em conjunto,
              precisam passar por pesquisa,
              filtragem, validação e transformação.
            </p>

          </article>


          <article className="project-card">

            <span className="card-label">
              A solução
            </span>


            <h3>
              Criar uma estrutura integrada
            </h3>


            <p>
              O Veltis utiliza rotinas em Python
              para preparar e organizar informações
              provenientes das diferentes fontes.
            </p>


            <p>
              Depois do tratamento, os dados são
              enviados ao PostgreSQL/PostGIS,
              preparando a estrutura para consultas,
              filtros e futuras visualizações.
            </p>

          </article>

        </div>


        {/* ===============================
            FONTES
        =============================== */}

        <div
          id="veltis-fontes"
          className="veltis-block"
        >

          <div className="section-mini-header">

            <span>
              Fontes oficiais
            </span>


            <h3>
              De onde vêm os dados?
            </h3>

          </div>


          <div className="source-grid">

            <div className="source-card">

              <div className="source-icon">
                01
              </div>

              <strong>
                IBGE
              </strong>

              <p>
                Malha Municipal e informações
                territoriais.
              </p>

            </div>


            <div className="source-card">

              <div className="source-icon">
                02
              </div>

              <strong>
                SIDRA / IBGE
              </strong>

              <p>
                Indicadores e informações
                demográficas municipais.
              </p>

            </div>


            <div className="source-card">

              <div className="source-icon">
                03
              </div>

              <strong>
                INEP
              </strong>

              <p>
                Censo Escolar,
                escolas e cursos técnicos.
              </p>

            </div>


            <div className="source-card">

              <div className="source-icon">
                04
              </div>

              <strong>
                Educação Superior
              </strong>

              <p>
                Instituições e cursos
                de ensino superior.
              </p>

            </div>

          </div>

        </div>


        {/* ===============================
            FLUXO DOS DADOS
        =============================== */}

        <div
          id="veltis-fluxo"
          className="veltis-block"
        >

          <div className="section-mini-header">

            <span>
              Arquitetura
            </span>


            <h3>
              Como os dados passam
              pelo projeto
            </h3>

          </div>


          <div className="data-flow">

            <div>

              <strong>
                Fontes públicas
              </strong>

              <span>
                IBGE • INEP • SIDRA
              </span>

            </div>


            <span className="flow-arrow">
              →
            </span>


            <div>

              <strong>
                Python
              </strong>

              <span>
                Leitura e processamento
              </span>

            </div>


            <span className="flow-arrow">
              →
            </span>


            <div>

              <strong>
                Pandas / GeoPandas
              </strong>

              <span>
                Validação e transformação
              </span>

            </div>


            <span className="flow-arrow">
              →
            </span>


            <div>

              <strong>
                PostgreSQL
              </strong>

              <span>
                Estrutura relacional
              </span>

            </div>


            <span className="flow-arrow">
              →
            </span>


            <div>

              <strong>
                PostGIS
              </strong>

              <span>
                Dados geográficos
              </span>

            </div>

          </div>

        </div>


        {/* ===============================
            TECNOLOGIAS
        =============================== */}

        <div className="veltis-block">

          <div className="section-mini-header">

            <span>
              Stack
            </span>


            <h3>
              Tecnologias utilizadas
            </h3>

          </div>


          <div className="project-tech-groups">

            <div>

              <h4>
                Processamento
              </h4>

              <p>
                Python
                <br />
                Pandas
                <br />
                GeoPandas
              </p>

            </div>


            <div>

              <h4>
                Banco de Dados
              </h4>

              <p>
                PostgreSQL
                <br />
                PostGIS
                <br />
                SQL
              </p>

            </div>


            <div>

              <h4>
                Integração
              </h4>

              <p>
                SQLAlchemy
                <br />
                Psycopg
                <br />
                APIs
              </p>

            </div>


            <div>

              <h4>
                Desenvolvimento
              </h4>

              <p>
                Git
                <br />
                GitHub
                <br />
                VS Code
              </p>

            </div>

          </div>

        </div>


        {/* ===============================
            IMPLEMENTAÇÃO REAL
        =============================== */}

        <motion.div
          id="veltis-implementacao"
          className="implemented-card"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <span className="card-label">
            Implementação real
          </span>


          <h3>
            Primeira carga territorial concluída
          </h3>


          <p>
            Uma das primeiras etapas implementadas
            foi o processamento da Malha Municipal
            do IBGE utilizando GeoPandas.
          </p>


          <div className="implementation-flow">

            <span>
              645 municípios de SP
            </span>

            <strong>
              →
            </strong>

            <span>
              filtro RMS
            </span>

            <strong>
              →
            </strong>

            <span>
              27 municípios
            </span>

            <strong>
              →
            </strong>

            <span>
              validação
            </span>

            <strong>
              →
            </strong>

            <span>
              PostGIS
            </span>

          </div>


          <p>
            Antes da inserção, são verificadas
            quantidade de registros, valores nulos,
            sistema de coordenadas e integridade
            das geometrias.
          </p>

        </motion.div>


        {/* ===============================
            STATUS
        =============================== */}

        <div
          id="veltis-status"
          className="status-title"
        >

          <span>
            Evolução
          </span>


          <h3>
            Onde o Veltis está agora
          </h3>

        </div>


        <div className="status-grid">

          <div className="status-card done">

            <h3>
              ✓ Concluído
            </h3>

            <ul>
              <li>
                Estrutura inicial do banco
              </li>

              <li>
                PostgreSQL e PostGIS configurados
              </li>

              <li>
                Conexão Python com PostgreSQL
              </li>

              <li>
                Leitura da malha do IBGE
              </li>

              <li>
                Filtro dos 27 municípios
              </li>

              <li>
                Validação das geometrias
              </li>

              <li>
                Primeira carga territorial
              </li>
            </ul>

          </div>


          <div className="status-card progress">

            <h3>
              ◌ Em andamento
            </h3>

            <ul>

              <li>
                Organização das fontes
              </li>

              <li>
                Documentação e metadados
              </li>

              <li>
                Dados demográficos
              </li>

              <li>
                Censo Escolar
              </li>

              <li>
                Cursos técnicos
              </li>

              <li>
                IES e cursos superiores
              </li>

            </ul>

          </div>


          <div className="status-card future">

            <h3>
              ○ Próximas etapas
            </h3>

            <ul>

              <li>
                API da aplicação
              </li>

              <li>
                Frontend
              </li>

              <li>
                Filtros
              </li>

              <li>
                Mapa interativo
              </li>

              <li>
                Indicadores
              </li>

              <li>
                Dashboards
              </li>

            </ul>

          </div>

        </div>


        {/* ===============================
            MINHA ATUAÇÃO
        =============================== */}

        <div className="my-role-card">

          <span className="card-label">
            Minha atuação
          </span>


          <h3>
            O que estou desenvolvendo no Veltis
          </h3>


          <p>
            Participo da modelagem e organização
            dos dados, pesquisa e validação das
            fontes públicas, desenvolvimento das
            rotinas de processamento em Python,
            integração com PostgreSQL/PostGIS e
            documentação técnica das bases utilizadas.
          </p>

        </div>

      </section>


      {/* ===================================================
          PORTFÓLIO
      =================================================== */}

      <section
        id="portfolio"
        className="section projects-section"
      >

        <motion.div
          className="personal-project-card"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <div>

            <span className="card-label">
              Projeto pessoal
            </span>


            <h2>
              Meu Portfólio
            </h2>


            <p>
              Este site nasceu como uma aplicação
              web para reunir minha trajetória,
              conhecimentos e projetos de uma
              forma mais pessoal e interativa.
            </p>


            <p>
              Mas a ideia não termina aqui.
              Além de tecnologia, também sou
              apaixonada por jornalismo.
            </p>


            <p>
              Quero futuramente transformar este
              espaço em uma plataforma pessoal com
              blog, textos, notícias e conteúdos
              autorais, unindo tecnologia
              e comunicação.
            </p>

          </div>


          <div className="portfolio-tech">

            <span className="mini-label">
              Stack do projeto
            </span>


            <h3>
              Desenvolvido com
            </h3>


            <div className="portfolio-tags">

              <span>
                React
              </span>

              <span>
                JavaScript
              </span>

              <span>
                FastAPI
              </span>

              <span>
                Python
              </span>

              <span>
                APIs REST
              </span>

              <span>
                Git
              </span>

            </div>


            <div className="future-blog">

              <strong>
                Visão futura
              </strong>


              <p>
                Portfólio + blog +
                conteúdo autoral + jornalismo.
              </p>

            </div>

          </div>

        </motion.div>

      </section>


      {/* ===================================================
          ÚLTIMA VIRTUDE
      =================================================== */}

      <section
        id="ultima-virtude"
        className="section game-project-section"
      >

        <div className="section-header">

          <span>
            Projeto autoral
          </span>


          <h2>
            Última Virtude
          </h2>


          <p>
            Projeto pessoal de desenvolvimento
            de jogo criado para explorar programação,
            criatividade, narrativa e mecânicas.
          </p>

        </div>


        <motion.div
          className="game-card"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <div className="game-icon">
            <Gamepad2 size={42} />
          </div>


          <div>

            <span className="mini-label">
              Game Development
            </span>


            <h3>
              Desenvolvido com Godot
            </h3>


            <p>
              Projeto autoral voltado para lógica
              de programação, criação de mecânicas
              e desenvolvimento de uma experiência própria.
            </p>

          </div>


          <a
            href="https://github.com/Leandr0-Goncalves/aultimavirtude"
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto

            <ExternalLink size={16} />
          </a>

        </motion.div>

      </section>


      {/* ===================================================
          TRAJETÓRIA
      =================================================== */}

      <section
        id="trajetoria"
        className="section experience-section"
      >

        <div className="section-header">

          <span>
            Minha trajetória
          </span>


          <h2>
            Formação & Experiência
          </h2>


          <p>
            Da formação técnica às experiências
            que hoje fazem parte do meu
            desenvolvimento acadêmico e profissional.
          </p>

        </div>


        <div className="trajectory-groups">


          {/* ===============================
              FORMAÇÃO
          =============================== */}

          <div className="trajectory-group">

            <div className="trajectory-group-title">

              <span>
                01
              </span>


              <div>

                <small>
                  Formação
                </small>


                <h3>
                  Minha base acadêmica
                </h3>

              </div>

            </div>


            <div className="timeline">


              {/* ETEC */}

              <div className="timeline-item">

                <div className="timeline-dot"></div>


                <div className="timeline-card">

                  <span>
                    Formação técnica
                  </span>


                  <h3>
                    ETEC Fernando Prestes
                  </h3>


                  <strong>
                    Técnico em Desenvolvimento de Sistemas
                  </strong>


                  <p>
                    Formação técnica voltada ao
                    desenvolvimento de software,
                    lógica de programação,
                    banco de dados e criação de aplicações.
                  </p>

                </div>

              </div>


              {/* FATEC */}

              <div className="timeline-item">

                <div className="timeline-dot current-dot"></div>


                <div className="timeline-card current-card">

                  <span>
                    Cursando atualmente
                  </span>


                  <h3>
                    FATEC Sorocaba
                  </h3>


                  <strong>
                    Análise e Desenvolvimento de Sistemas
                  </strong>


                  <p>
                    Graduação em andamento com experiências
                    em desenvolvimento de software,
                    programação, banco de dados,
                    aplicações web e projetos integradores.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ===============================
              EXPERIÊNCIA
          =============================== */}

          <div className="trajectory-group">

            <div className="trajectory-group-title">

              <span>
                02
              </span>


              <div>

                <small>
                  Experiência
                </small>


                <h3>
                  Atuação profissional
                </h3>

              </div>

            </div>


            <div className="work-card">

              <div className="work-top">

                <div>

                  <span className="current-badge">
                    Experiência atual
                  </span>


                  <h3>
                    Prefeitura de Sorocaba
                  </h3>


                  <strong>
                    Estagiária em Suporte de Redes
                  </strong>

                </div>


                <Network size={36} />

              </div>


              <p>
                Atuação com suporte técnico e
                infraestrutura de redes, incluindo
                conectividade, DHCP e suporte
                em ambiente corporativo.
              </p>


              <p>
                Também participo de um projeto interno
                de desenvolvimento de sistema da
                Prefeitura utilizando Angular.
              </p>


              <div className="experience-tags">

                <span>
                  Infraestrutura
                </span>

                <span>
                  Redes
                </span>

                <span>
                  DHCP
                </span>

                <span>
                  Suporte
                </span>

                <span>
                  Angular
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          CONTATO
      =================================================== */}

      <section
        id="contato"
        className="section contact-section"
      >

        <motion.div
          className="contact-card"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}
        >

          <div className="contact-glow"></div>


          <span className="contact-label">
            Chegamos ao final ✦
          </span>


          <h2>
            Vamos construir algo juntos?
          </h2>


          <p>
            Estou sempre aberta a oportunidades,
            novos projetos, aprendizados e
            experiências na área de tecnologia.
          </p>


          <div className="contact-links">

            <a href="mailto:jmr94424@gmail.com">

              <Mail size={20} />

              E-mail

            </a>


            <a
              href="https://www.linkedin.com/in/julia-martins-04090027b/"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedinIn size={20} />

              LinkedIn

            </a>


            <a
              href="/curriculo-julia.pdf"
              target="_blank"
              rel="noreferrer"
            >

              <ExternalLink size={19} />

              Currículo

            </a>

          </div>

        </motion.div>

      </section>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="footer">

        <div className="footer-content">

          <div>

            <a
              href="#inicio"
              className="footer-logo"
            >
              Julia<span>.</span>
            </a>


            <p>
              Desenvolvimento, dados,
              criatividade e curiosidade.
            </p>

          </div>


          <div className="footer-center">

            <span>
              Feito com React + muita curiosidade
            </span>


            <span className="footer-heart">
              ♡
            </span>

          </div>


          <div className="footer-links">

            <a href="mailto:jmr94424@gmail.com">
              E-mail
            </a>


            <a
              href="https://www.linkedin.com/in/julia-martins-04090027b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>


            <a
              href="/curriculo-julia.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Currículo
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Julia
          </span>


          <span>
            Portfólio em constante evolução.
          </span>

        </div>

      </footer>

    </div>
  );
}


export default App;