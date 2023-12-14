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

getJohnProfile().then((result) => {
  console.log(result)
})