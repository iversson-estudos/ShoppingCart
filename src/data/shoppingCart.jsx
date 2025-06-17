import localforage from "localforage";

export async function loadCart(){

try{    
    const cart = await localforage.getItem('cart');
    if(cart){
        return cart;
    }else{
        return false;
    }
}catch(err){
    console.log(err);
}}


export async function addItemToCart(itemId,quantity){   
    let cart = await loadCart() || [];
    let index = cart.findIndex(item=>item.itemId===itemId);

    if(index>-1){
        cart[index] = {itemId,quantity};
    }else{
         cart.push({itemId,quantity});
    }
    
    await set(cart);
}





function set(cart){
    return localforage.setItem('cart',cart);
}