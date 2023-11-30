
export function Addtocart(cartArg,product){
    console.log(cartArg);
    let cart = {...cartArg}
    if (cart.products.length) {
        const productIndex = cart.products.findIndex(e => e.id == product.id);
        if (productIndex == -1) {
            cart.products.push({
                ...product,
                productQty: 1
            });
            cart.totalPrice +=  product.price
        }
        else 
        {
            cart.products[productIndex] = {
                ...cart.products[productIndex],
                productQty : cart.products[productIndex].productQty + 1
            }
            cart.totalPrice += product.price
        }
    }
    else {
        cart.products.push({
            ...product,
            productQty: 1
        });
        cart.totalPrice += product.price
    };
    return cart;
}
    
export  function deletecart(){
    return{
        product:[],
        totolprice:0
    }
}     


export function deleteproduct(cartArg,product){
    let cart = {...cartArg}
    let price = product.price;
    if(product.discount) price -= product.discount;
    cart.products = cart.products.filter(e => e.id !== product.id);
    cart.totalPrice -= price*product.productQty;
    return cart;
}

export const removeFromCart=(cartArg,product)=>{
    const cart={...cartArg};
    let price = product.price;
     if(product.discount) price-=product.discount;
    if(price==0){
        return deleteproduct();
    }
    if(cart?.products?.length){
        const productIndex=cart.products.findIndex(e=> e.id == product.id);
        if (productIndex!==-1){
            if(cart.products[productIndex].productQty==1){

            }else {
                cart.products[productIndex].productQty-=1;
                cart.price-=product.price
            }
        }
    }
    return cart;
}
export const cartReducer=(state,action)=>{
    switch(action.type){
      case "addToCart":return AddToCart
    }
  }