
function delay(t: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, t);
  })
}

export async function fetchLogin() {
  await delay(200 + Math.floor(Math.random() * 2000));

  return 'fetchLogin'
}