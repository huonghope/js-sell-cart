//show cart

(function () {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");
  cartInfo.addEventListener("click", function () {
    //If class exists remove, dont exists add class
    cart.classList.toggle("show-cart");
  });
})()(
  //add items to the cart
(function () {
    //select all class with name store-item-icon
    const cartBtn = document.querySelectorAll(".store-item-icon");
    cartBtn.forEach(function (btn) {
      //add event click to all button
    btn.addEventListener("click", function (event) {
        //check parentElemment contains class
        if (event.target.parentElement.classList.contains("store-item-icon")) {
          // parent of class current click
          // console.log(event.target.parentElement.parentElement)

          // previous class
            let fullPath = event.target.parentElement.previousElementSibling.src;
            let pos = fullPath.indexOf("img") + 3; //return img name
            let partPath = fullPath.slice(pos);

            const item = {};
            item.img = `img-cart${partPath}`;

            // return text of icon
            let name =
            event.target.parentElement.parentElement.nextElementSibling
                .children[0].children[0].textContent;

            let price =
            event.target.parentElement.parentElement.nextElementSibling
                .children[0].children[1].textContent;

            let finalPrice = price.slice(1).trim();
            item.name = name;
            item.price = finalPrice;

            const cartItem = document.createElement("div");
            cartItem.classList.add(
            "cart-item",
            "d-flex",
            "justify-content-between",
            "text-capitalize",
            "my-3"
            );

            cartItem.innerHTML = `
                    <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                        <div class="item-text">
                            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                            <span>$</span>
                            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                        </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </a>
                `;
            const cart = document.getElementById('cart');
            const totalPrice = document.querySelector('.cart-total-container');
            cart.insertBefore(cartItem, totalPrice);
            alert("item added to the cart suceess : " + item.name);
            showTotal();
        }
    });
});
function showTotal()
{
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");
    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
    const count = total.length;
    const totalMoney = total.reduce(function(total, item){
        total += item;
        return total;
    },0)

    document.getElementById('cart-total').textContent = totalMoney;
    document.querySelector('.item-total').textContent = totalMoney;
    document.getElementById('item-count').textContent = count;
}

    })()
);
