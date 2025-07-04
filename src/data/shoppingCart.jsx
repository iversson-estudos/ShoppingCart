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


export async function addItemToCart(id,quantity){   
    let cart = await loadCart() || [];
    let index = cart.findIndex(item=>item.ItemId===id);

    if(index>-1){
        cart[index] = {ItemId:id,Quantity:quantity};
    }else{
         cart.push({ItemId:id,Quantity:quantity});
    }
    
    await set(cart);
}





function set(cart){
    return localforage.setItem('cart',cart);
}