let cartValue = document.querySelector("#cartValue")

const updateCartValue = (CartsProd) => {
    return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping">${CartsProd.length}</i>`)
}

export default updateCartValue