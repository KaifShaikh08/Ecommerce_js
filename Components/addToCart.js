import getCartProductFromLS from "./getCartProductFromLS";

let cartProductFromLS = getCartProductFromLS();
getCartProductFromLS();

const addToCart = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  let quantiy = currentCardElement.querySelector(".productQuantity").innerText;
  let price = currentCardElement.querySelector(".productPrice").innerText;

  let totalPrice = price.replace("$", "") * quantiy;
  quantiy = Number(quantiy);

  let existingProduct = cartProductFromLS.find(
    (currElem) => currElem.id === id
  );

  if (existingProduct && quantiy > 1) {
    quantiy = Number(existingProduct.quantiy) + Number(quantiy);
    price = Number(totalPrice * quantiy);

    let updatedCart = { id,quantiy,price };
    updatedCart = cartProductFromLS.map((currProd) => {
      return (currProd.id === id) ? updatedCart : currProd
    });

    localStorage.setItem("cartProducts",JSON.stringify(updatedCart))
  }

  console.log(existingProduct)
//   if (existingProduct) {
//     alert("Duplicate Product");
//     return false;
//   }

  let ProductCartData = {
    id,
    quantiy,
    price: totalPrice,
  };
  cartProductFromLS.push(ProductCartData);
  localStorage.setItem("cartProducts", JSON.stringify(cartProductFromLS));
};

export default addToCart;
