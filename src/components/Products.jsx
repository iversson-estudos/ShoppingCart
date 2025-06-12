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
            {ProductRating(product)}
            <p>--------------------------------------------------</p>
            <div className={styles.productBuyDiv}>
               <p className={styles.productPrice}>${product.price}</p>
               <button>
                  <span className="material-symbols-outlined">add_shopping_cart</span>
               </button>
            </div>
          </li>
        ))}
    </ul>
    )
}

function ProductRating(product){
  const rating = Math.floor(product.rating.rate);
  let stars = [];

  for(let i=1;i<=5;i++){
    if(i<=rating){
      stars.push(
      <span className={`material-symbols-outlined ${styles.colored}`}>
        star
      </span>
      );
    }else{
      stars.push(
      <span className="material-symbols-outlined">
        star
      </span>)
    }
  }
  
  return(
    <div className={styles.productRating}>
     {stars}
    </div>
  )
}