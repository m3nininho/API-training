const container = document.querySelector("#container-itens");

const response = fetch("https://rickandmortyapi.com/api/character")
  .then((responseData) => {
    return responseData.json();
  })
  .then((jsonData) => {
    const lista = jsonData;
    console.log(lista);
    lista.results.filter((name) => {
      const listaDeImagnes = [name.image];
      const nomes = [name.name];
      for (i = 0; i < listaDeImagnes.length; i++) {
        const img1 = document.createElement("img");
        const names = document.createElement("p");
        const status = document.createElement("p");
        img1.classList.add("fotos");
        img1.setAttribute("src", listaDeImagnes[i]);
        status.innerText = `Location: ${name.location.name}`;
        names.innerText = nomes;
        const div = document.createElement("div");
        div.classList.add("item");
        div.appendChild(names);
        div.appendChild(img1);
        div.appendChild(status);
        container.appendChild(div);
      }
    });
  });
