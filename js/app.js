// Pb6JlnihpP9By7V-kM4KWRP7CI75xb5VyVI-H5UyCOM
// https://api.unsplash.com/photos/?client_id=Pb6JlnihpP9By7V-kM4KWRP7CI75xb5VyVI-H5UyCOM

const container = document.querySelector(".container");
const next = document.querySelector('#next');
const prev = document.querySelector('#prev')
const grid = document.querySelector('.grid')

let count = 2;
document.addEventListener('DOMContentLoaded', getPhotos())


next.addEventListener('click', () => {
  LimpiarHtml()
  getPhotos(count++)
})
prev.addEventListener('click', ()=> {
  if(count < 1) return 1;
  LimpiarHtml()
  getPhotos(count--)
})

function LimpiarHtml() {
  while (grid.firstChild.nextElementSibling) {
    grid.firstChild.nextElementSibling.remove()
  }
}

function createElement(data) {
  let first_name;
  let last_name = "";
  const div = document.createElement("div");
  const img = document.createElement("img");

  const grid = document.querySelector(".grid");

  div.classList.add("grid-item");
  img.classList.add("img");

  if (data.user.first_name !== null && data.user.last_name !== null) {
    first_name = data.user.first_name;
    last_name = data.user.last_name;
  } else {
    first_name = data.user.first_name;
  }
  div.innerHTML = `
    <div class="content">
      <h1>Author: ${first_name} ${last_name}</h1>
    </div>
    <img src="${data.urls.regular}"alt="${data.alt_description}" />
    `;

  // Agregando los elementos al node correspodiente.
  div.appendChild(img);
  grid.appendChild(div);
}

async function getPhotos(page = 1) {
  await fetch(
    `https://api.unsplash.com/photos?page=${Number(page)}&per_page=30&client_id=Pb6JlnihpP9By7V-kM4KWRP7CI75xb5VyVI-H5UyCOM`
  )
    .then((res) => res.json())
    .then((data) => {
      data.map((dato, index) => createElement(data[index]));
    });
}
function Masonry() {
  var colc = new Colcade(".grid", {
    columns: ".grid-col",
    items: ".grid-item",
  });
  console.log("cargo Masonry....");
}
