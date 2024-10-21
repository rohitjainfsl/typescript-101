fetch("https://randomuser.me/api")
  .then((res) => res.json())
  .then((data) => {
    const image = data.results[0].picture.large;
    const name = `${data.results[0].name.first} ${data.results[0].name.last}`;
    const email = data.results[0].email;
    putInDom({ image, name, email });
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("task completed"));
function putInDom({ image, name, email }) {
  const img = document.querySelector("img");
  const h2 = document.querySelector("h2");
  const p = document.querySelector("p");
  img.src = image;
  h2.textContent = name;
  p.innerText = email;
}
