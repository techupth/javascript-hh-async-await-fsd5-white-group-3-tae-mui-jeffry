// Exercise #6
let getJohnProfile = (resolve) => {
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
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
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

async function getUserProfile() {
  console.log(await getJohnProfile())
  console.log(await getJohnOrders())
}
getUserProfile()