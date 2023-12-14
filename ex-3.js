//Exercise #3
let getJohnProfile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John",
        age: 20,
        hobbies: ["Coding", "Football"],
      })
    }, 1000);
  })
}

let getJohnOrders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{
          orderId: "001",
          items: ["apple", "banana"],
        },
        {
          orderId: "002",
          items: ["orange", "itim"],
        },
      ])
    }, 1500);
  }) 
}

getJohnProfile().then((result) => {
  console.log(result)
})

getJohnOrders().then((result) => {
  console.log(result)
})