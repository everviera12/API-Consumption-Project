// url de la api
const urlApi = "https://jsonplaceholder.typicode.com/users";

// Realizar la solicitud get
fetch(urlApi) //llamamos a la api
  .then((response) => {
    if (response.status === 200) {
      //validamos el status
      return response.json();
    } else {
      throw new Error("Error al solicitar los datos");
    }
  })
  .then((data) => {
    console.log(data); //imprimimos los datos
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

//=======================================
// Realizar la solicitud POST
// datos para insertar
const usuario = {
  name: "Victor Viera",
  username: "everviera12",
  email: "ever@gmail.com",
};

// configuracion solicitud post
const solicitud = {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Tipo de contenido
  },
  body: JSON.stringify(usuario),
};

fetch(urlApi, solicitud)
  .then((response) => {
    if (response.status === 201) {
      return response.json(); // Si se crea con éxito, la API puede devolver el nuevo objeto
    } else {
      throw new Error("No se pudo crear el usuario");
    }
  })
  .then((data) => {
    console.log("El nuevo usuario es: ", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
