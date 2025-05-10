import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>AI</h1>
          <h1>ENTTHUSIAST</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Álvaro Alonso</h1>
            <h6 className={styles.bio}>Senior Data Scientist / AI Engineer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Python' className='Python'>
                      Python
                    </span>
                    <span key='LLMOps' className='LLMOps'>
                      LLMOps
                    </span>
                    <span key='GenAI' className='GenAI'>
                      GenAI
                    </span>
                    <span key='RAG' className='RAG'>
                      RAG
                    </span>
                    <span key='AWS' className='AWS'>
                      AWS
                    </span>
                    <span key='NLP' className='NLP'>
                      NLP
                    </span>
                    <span key='LLM' className='LLM'>
                      LLM
                    </span>
                    <span key='LangChain' className='LangChain'>
                      LangChain
                    </span>
                    <span key='HuggingFace' className='HuggingFace'>
                      HuggingFace
                    </span>
                    <span key='GCP' className='GCP'>
                      GCP
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      PyTorch
                    </span>
                    <span key='Keras' className='Keras'>
                      Keras
                    </span>
                    <span key='MLOps' className='MLOps'>
                      MLOps
                    </span>
                    <span key='Kubernetes' className='Kubernetes'>
                      Kubernetes
                    </span>
                    <span key='Docker' className='Docker'>
                      Docker
                    </span>

                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
