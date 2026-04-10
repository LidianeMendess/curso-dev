import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>

      <nav className={styles.navbar}>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>


      <section id="inicio" className={styles.hero}>
        <img 
          src="/foto.jpg" 
          alt="Foto de Lidiane"
          className={styles.foto}
        />

        <h1 className={styles.nome}>Lidiane Mendes</h1>

        <p className={styles.profissao}>
          Desenvolvedora 
        </p>

        <div className={styles.links}>
          <a href="https://github.com/LidianeMendess" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/lidiane-mendess/" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>


      <section id="sobre" className={styles.sobre}>
        <h2>Sobre</h2>
        <p>
          Sou desenvolvedora em formação. Atualmente atuo na IntelexIA (Grupo DPG), trabalhando com desenvolvimento e manutenção de automações, além de contribuir com melhorias em sistemas internos.
Tenho experiência na construção de APIs REST e aplicação de boas práticas de desenvolvimento, como organização de código e versionamento com GitHub.
        </p>
      </section>

  
      <section id="projetos" className={styles.projetos}>
        <h2>Meus Projetos</h2>

        <div className={styles.cards}>

    
          <div className={styles.card}>
            <img src="/catalogo.jpg" alt="API Catálogo de Produtos" />
            <h3>API Catálogo de Produtos</h3>
            <p>
              API REST desenvolvida com Java e Spring Boot, com funcionalidades
              de cadastro, listagem, atualização e remoção de produtos.
            </p>

            <a 
              href="https://github.com/LidianeMendess/catalogo-de-produtos"
              target="_blank"
            >
              Ver no GitHub
            </a>
          </div>

        </div>
      </section>

      <section id="contato" className={styles.contato}>
        <h2>Contato</h2>
        <p>Email: lidyaraujo64@gmail.com</p>
      </section>

    </main>
  );
}