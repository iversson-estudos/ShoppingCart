import styles from "./Homepage.module.css"
import { Link } from "react-router-dom"


export default function Homepage(){
    return(
        <div className={styles.homepageContainer}>
            <img src="/src/assets/images/homepageLogo.png"/>
            <button>
                <Link to={'/main'}>Lets Go Shopping</Link>
            </button>
        </div>
    )
}