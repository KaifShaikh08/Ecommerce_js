import addToCart from "./addToCart.js";
import quantityToggle from "./quantityToggle.js"
const productTemplate = document.querySelector("#productTemplate");
const productContainer = document.querySelector("#productContainer");

const showProductsContainer = (products) => {
  if (!products) return false;

  products.forEach((elem) => {
      const { id, name, category, description, price, stock, image, brand } =
      elem;

      const productClone = document.importNode(productTemplate.content,true)
      productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
    
      productClone.querySelector(".productName").innerText = name;
      productClone.querySelector(".category").innerText = category;
      productClone.querySelector(".productImage").src = image;
      productClone.querySelector(".productStock").innerText = stock;
      productClone.querySelector(".productDescription").innerText = description;
      productClone.querySelector(".productPrice").innerText = `$${price}`
      productClone.querySelector(".productActualPrice").innerText = `$${price * 4}`

      productClone.querySelector(".productQuantityElement").addEventListener("click",(event) => {
        return quantityToggle(event,id,stock)
      })

      productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
       return addToCart(event,id,stock)
      })

      productContainer.append(productClone)
    })

}
export default showProductsContainer;
