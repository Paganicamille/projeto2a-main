import styles from "./page.module.css";
import Image  from "next/image";
// import album from "../../public/images/"

export default function Home() {
  return (
    <div>
      <h1>Álbuns Favorito</h1>   
      <Image className={styles.img} src='/images/mariliamendonça.jpg' 
      alt="Imagem do Música" width={500} height={500}/>
     
    </div>
  );
}
