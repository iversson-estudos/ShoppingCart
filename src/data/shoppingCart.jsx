import localforage from "localforage";

export default async function loadCart(){

try{    
    const cart = await localforage.getItem('cart');
    return cart;
}catch(err){
    console.log(err);
}
}