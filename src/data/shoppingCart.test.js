import { expect,test } from "vitest";
import {set,loadCart,addItemToCart} from "./shoppingCart"


await addItemToCart(1,16);
await addItemToCart(3,4);
await addItemToCart(4,1);

const cart = await loadCart();

test('should load cart',()=>{
    expect(cart).toBeInstanceOf(Array);
    expect(cart.length).toBe(3);
    expect(cart[0]).toBe({1,16});
})