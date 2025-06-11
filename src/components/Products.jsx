import { productLoader } from "../data/productLoader"
import { useLoaderData } from "react-router-dom";
import styles  from "./Products.module.css"





export async function loader(){
    const products = await productLoader();
    return  {products};
}

export default function Products(){
    const {products} = useLoaderData();
    console.log({products});

    return(
    <ul className={styles.productContainer}>
        {products.map((product)=>(
          <li className={styles.product} key={product.id}>
            <img className={styles.productImage} src={product.image}/>
            <p className={styles.productTitle}>{product.title}</p>
            <p>PRICE: ${product.price}</p>
          </li>
        ))}
    </ul>
    )
}