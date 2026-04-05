import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>

      <img 
        src="foto.jpg" 
        alt="Foto de Lidiane"
        className={styles.foto}
      />

     <h1 style>Lidiane Mendes</h1>

      <p className={styles.descricao}>
        Desenvolvedora Java em formação
      </p>

      <div className={styles.links}>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>

    </main>
  );
}