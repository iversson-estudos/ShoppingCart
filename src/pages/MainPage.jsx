import styles from "./MainPage.module.css"
import { Link } from "react-router-dom"


export default function MainPage(){
    return(
        <div className={styles.sidebar}>
            <Link className={styles.homepageButton} to='/'>
                <img src="/src/assets/images/homepageButton.png"/>
            </Link>
        </div>
    )
}