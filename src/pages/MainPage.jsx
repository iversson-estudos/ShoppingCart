import styles from "./MainPage.module.css"
import { Link,Outlet } from "react-router-dom"


export default function MainPage(){
    return(
    <div className={styles.app}> 
        <div className={styles.sidebar}>
            <Link className={styles.homepageButton} to='/'>
                <span class="material-symbols-outlined">home</span>
            </Link>
            <Link className={styles.shoppingButton} to='products/'>
                <span class="material-symbols-outlined">search</span>
            </Link>
            <Link className={styles.homepageButton} to='/'>
                <span class="material-symbols-outlined">shopping_cart</span>
            </Link>
        </div>
        <div className={styles.mainContainer}>
            <Outlet/>
        </div>
    </div>
    )
}