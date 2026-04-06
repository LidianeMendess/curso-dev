import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      
        <img 
        src="/foto.jpg" 
        alt="Foto de Lidiane Mendes"
        style={{ width: "150px", borderRadius:     "50%" }}
      />

      <h1>Lidiane Mendes</h1>

      <p className={styles.descricao}>
        Desenvolvedora
      </p>

      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/lidiane-mendess" target="_blank">
          LinkedIn
        </a>
      </div>

    </main>
  );
}