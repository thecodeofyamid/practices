const fetchButton = document.getElementById("fetch-personajes");
const fom = document.querySelector("#new-post form");
const listElement = document.getElementById("personajes");
const loader = document.getElementById("loader");
const personajesList = document.getElementById("personajes-list");
let color
let count = 0
let fontColor


function validateColor(color) {
  // Limpia y normaliza el color
  color = color.trim().toLowerCase();
  console.log("Color pasado a función (limpiado):", color);
  if (color === "black" || color === "brown" || color === "grey") {
    fontColor = "white"
  } else {
    fontColor = "black"
  }
  console.log("color de fuente: ", fontColor)
  return fontColor
}

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}


async function fetchPersonajes() {
  count += 1
  try {
    if (count < 2) {
      const responseData = await sendHTTPRequest("GET", "https://swapi.py4e.com/api/people");
      console.log(responseData);
      loader.style.display = "none";
      const listPersonajes = responseData.results;
      for (const personaje of listPersonajes) {
        const postContainer = document.createElement("article");
        postContainer.id = personaje.name;
        console.log("background 1: ", personaje.hair_color, typeof personaje.hair_color)
        postContainer.classList.add("personaje");
        if (personaje.hair_color == "n/a" || personaje.hair_color == "none") {
          personaje.hair_color = "white"
        } else {
          color = personaje.hair_color.split(",");
          console.log(color)
          if (color.length > 1) {
            personaje.hair_color = color[1]
          }
        }
        console.log("color 2: ", validateColor(personaje.hair_color))
        fontColor = validateColor(personaje.hair_color)
        console.log("background 2: ", personaje.hair_color, typeof personaje.hair_color)
        console.log("color: ", fontColor)
        postContainer.innerHTML = `
                    <li class="border border-black p-2 rounded-lg" style="background-color: ${personaje.hair_color}; color: ${fontColor}">
                        <h2>${personaje.name}</h2>
                        <p>${personaje.height}</p>
                        <p>${personaje.mass}</p>
                        <p>${personaje.hair_color}</p>
                        <p>${personaje.skin_color}</p>
                        <input type="button" class="delete" value="DELETE Content" />
                    </li>
                `;
        personajesList.appendChild(postContainer);
      }
    }
  }
  catch (error) {
    console.log(error)
  } finally {
    console.log("finally")
  }
}

fetchButton.addEventListener("click", fetchPersonajes);

function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post)
}

// evitar comportamiento de recarga en la web al enviar info;
fom.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;

  createPost(title, content);
})

personajesList.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.classList.contains("delete")) { // Verifica si el elemento tiene la clase "delete"
    const personajeId = event.target.closest("article").id; // Obtiene el id del artículo padre más cercano
    console.log(personajeId); 
    sendHTTPRequest("DELETE", `https://swapi.py4e.com/api/people/${personajeId}`)
  }
});
