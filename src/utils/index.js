/**
 * This function returns the new order's total price
 * @param {Array} productShoppingCart cartProduct: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (productShoppingCart) => {
    let sum = 0;
    productShoppingCart.forEach(product => {
        sum += product.price;
    });
    return sum;
}

// Another way
// export const totalPrice = (products) => {
//     return products.reduce((sum, product) => sum + product.price, 0)
// } 

// Largest way
// let sum = 0
//    for(let i = 0; i < products.length; i++){
//         const product = products[i]
//         const suma = sum += product.price
//     }