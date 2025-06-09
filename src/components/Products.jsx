import { productLoader } from "../data/productLoader"
import { useLoaderData } from "react-router-dom";





export async function loader(){
    const products = await productLoader();
    return  {products};
}

export default function Products(){
    const {products} = useLoaderData();
    console.log({products});

    return(
    <ul>
        {products.map((product)=>(
          <li key={product.id}>
            <img src={product.image}/>
          </li>
        ))}
    </ul>
    )
}