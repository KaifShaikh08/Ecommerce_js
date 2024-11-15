import updateCartValue from "./updateCartItems"

const getCartProductFromLS = () => {
    let cartsProduct = localStorage.getItem("cartProducts")
    if(!cartsProduct) return []
    cartsProduct = JSON.parse(cartsProduct)

    updateCartValue(cartsProduct)

    return cartsProduct
}

export default getCartProductFromLS