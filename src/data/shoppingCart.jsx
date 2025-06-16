import localforage from "localforage";

export  async function loadCart(){
try{    
    const cart = await localforage.getItem('cart');
    return cart;
}catch(err){
    console.log(err);
}}


export  async function addItemToCart(itemId,quantity){
    let cart = await loadCart();
    let index = cart.findIndex(item=>item.id===itemId);
    if(index>-1){
        cart[index] = {itemId,quantity};
    }else{
        cart.push({itemId,quantity});
    }
    await set(cart);
    return true;
}





function set(cart){
    return localforage.setItem('cart',cart);
}