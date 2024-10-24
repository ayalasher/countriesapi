import earth from '../images/earth image.webp'
import styles  from './styles.module.css'
import { Link } from 'react-router-dom'
export default function Home() {
    return <div>

        <div>
            <h2>Countries API </h2>
            <p className={styles.infotxt} >Your one stop Country encyclopedia</p>

            <div className={styles.btndiv} >
            <Link className={styles.btn} to={"/countries"} >see countries</Link>
            </div>
            
            <div className={styles.footer} >

            </div>
        </div>
      
    </div>
}