// frontend.js or app.js

const newProduct = {
  // Product data here
};
const newPayment ={

};
const newOrders ={

};
const newProfile ={

};
const newCartItem = {

};
const newDeal = {

}

fetch("/swetha/app/product-list", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newProduct),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Product added:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  fetch("/swetha/app/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPayment),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Payment done:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    fetch("/app/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrders),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Orders added:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      fetch("/app/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProfile),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Profile added:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

        fetch("/swetha/app/cart-item", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCartItem),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Item added:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          fetch("/swetha/app/todays-deal", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newDeal),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Items added:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });