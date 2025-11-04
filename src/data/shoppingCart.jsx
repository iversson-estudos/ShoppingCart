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
         cart.push(
            {   ItemId:id,Quantity:quantity});
    }
    
    await set(cart);
}

export async function removeItemFromCartTotally (id){
    let cart = await loadCart() || [];
    let index = cart.findIndex(item=>item.ItemId===id);
    cart.splice(index,1);
}



function set(cart){
    return localforage.setItem('cart',cart);
}