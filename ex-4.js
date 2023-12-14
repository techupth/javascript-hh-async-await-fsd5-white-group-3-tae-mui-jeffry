// Exercise #4
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

async function getUserProfile() {
  console.log(await getJohnProfile())
}
getUserProfile()