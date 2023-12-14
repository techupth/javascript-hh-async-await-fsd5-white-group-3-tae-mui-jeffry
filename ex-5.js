// Exercise #5
let getJohnProfile = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({
        errorCode: 500,
        message: "👿 Failed to request data from server",
      })
    }, 2000);
  })
}
getJohnProfile().then((result) => {
  console.log(result)
})