 
export async function productLoader(){

    const url = 'https://fakestoreapi.com/products/';
    const options = {method: 'GET'};

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
   
}