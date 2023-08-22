const urlApi = "https://jsonplaceholder.typicode.com/users";
fetch(urlApi)
  .then((response) => response.json())
  .then((data) => {
    showData(data);
    crearPaginacion(data);
  })
  .catch((error) => console.log(error));

// constante para mostrar cuantos elementos se mostraran en la pagina y en que pagina va a empezar
const itemsPerPage = 3;
let currentPage = 1;

//==========================================================
// funcion showData
const showData = (data) => {
  console.log(data); // imprime en consola los datos

  const startIndex = (currentPage - 1) * itemsPerPage; // Calcula el índice de inicio de los elementos a mostrar en la página actual
  const endIndex = startIndex + itemsPerPage; // Calcula el índice final de los elementos a mostrar en la página actual
  const currentPageData = data.slice(startIndex, endIndex); // Obtiene los datos que se mostrarán en la página actual

  // recorremos el arreglo y lo mostramos con la paginacion
  let body = "";
  for (let i = 0; i < currentPageData.length; i++) {
    body += `<tr>
      <td>${currentPageData[i].id}</td>
      <td>${currentPageData[i].name}</td>
      <td>${currentPageData[i].username}</td>
      <td>${currentPageData[i].email}</td>
      <td>${currentPageData[i].address.city}</td>
            </tr>`;
  }
  document.getElementById("data__api").innerHTML = body;
};

//==========================================================
// funcion crearPaginacion
const crearPaginacion = (data) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  let paginacion = "";
  for (let page = 1; page <= totalPages; page++) {
    paginacion += `<li class="page-item"><a class="page-link" href="#" data-page="${page}">${page}</a></li>`;
  }
  document.querySelector(".pagination").innerHTML = paginacion;

  //==========================================================
  // evento click

  document.querySelectorAll(".page-link").forEach((pageLink) => {
    pageLink.addEventListener("click", (event) => {
      event.preventDefault();
      currentPage = parseInt(event.target.getAttribute("data-page"));
      showData(data);
    });
  });
};
