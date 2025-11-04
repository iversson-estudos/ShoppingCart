import { expect,test, vitest } from "vitest";
import {set,loadCart,addItemToCart} from "./shoppingCart"


await addItemToCart(1,16);
await addItemToCart(3,4);
await addItemToCart(4,1);

const cart = await loadCart();

test('should load cart',()=>{
    expect(cart).toBeInstanceOf(Array);
    expect(cart.length).toBe(3);
    expect(cart[0]).toEqual({ItemId:1, Quantity:16});
    expect(cart[1]).toEqual({ItemId:3, Quantity:4});
    expect(cart[2]).toEqual({ItemId:4, Quantity:1});
})