import logoImagem from '../../assets/logotipo.png'; // Caminho do seu logotipo
import styles from './PageLoader.module.css';

const PageLoader = () => {
    return (

        <div className="flex flex-col items-center justify-center h-screen w-full bg-[#f8f9ff]">

            <div className={`${styles.loadingContainer} p-6 bg-white rounded-full shadow-lg`}>

                <div className={`${styles.wrapper3d} ${styles.animateSpin3dZ}`}>
                    <img src={logoImagem} alt="Carregando..." className="w-16 h-16 object-contain" />
                </div>

            </div>

            <p className="mt-8 text-xl font-bold text-[#1a1c1e]">
                Carregando suas viagens...
            </p>

        </div>
    );
};

export default PageLoader;