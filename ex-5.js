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
async function getUserProfile() {
  console.log(await getJohnProfile())
}
getUserProfile()