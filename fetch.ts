interface UserData {
  results: [
    {
      picture: { large: string };
      name: { first: string; last: string };
      email: string;
    }
  ];
}

interface DisplayData {
  image: string;
  name: string;
  email: string;
}

fetch("https://randomuser.me/api")
  .then((res) => res.json())
  .then((data: UserData) => {
    const image = data.results[0].picture.large;
    const name = `${data.results[0].name.first} ${data.results[0].name.last}`;
    const email = data.results[0].email;
    putInDom({ image, name, email });
  })
  .catch((err: object) => console.log(err))
  .finally(() => console.log("task completed"));

function putInDom({ image, name, email }: DisplayData): void {
  const img = document.querySelector("img") as HTMLImageElement;
  const h2 = document.querySelector("h2") as HTMLHeadingElement;
  const p = document.querySelector("p") as HTMLParagraphElement;

  img.src = image;
  h2.textContent = name;
  p.innerText = email;
}
