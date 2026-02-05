

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#modified").textContent = document.lastModified;

const  menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click",() => {
  navMenu.classList.toggle("hidden");
} ) 








const temples = [
  {
    name: "Salt Lake",
    location: "Utah, USA",
    dedicated: "1893-04-06",
    area: 382207,
    imageUrl: "images/salt-lake.jpg"
  },
  {
    name: "Laie Hawaii",
    location: "Hawaii, USA",
    dedicated: "1919-11-27",
    area: 42100,
    imageUrl: "images/laie-hawaii-.jpg"
  },
  {
    name: "Mesa Arizona",
    location: "Arizona, USA",
    dedicated: "1927-10-23",
    area: 113916,
    imageUrl: "images/mesa_temple.webp"
  },
  {
    name: "Idaho Falls",
    location: "Idaho, USA",
    dedicated: "1945-09-23",
    area: 85624,
    imageUrl: "images/Idaho.jpg"
  },
  {
    name: "Provo City Center",
    location: "Utah, USA",
    dedicated: "2016-03-20",
    area: 85084,
    imageUrl: "images/provo.webp"
  },
  {
    name: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019-05-21",
    area: 41010,
    imageUrl: "images/rome_temple.webp"
  },
  {
    name: "Paris France",
    location: "Paris, France",
    dedicated: "2017-01-27",
    area: 44000,
    imageUrl: "images/paris.webp"
  },
  {
    name: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1994-10-08",
    area: 30000,
    imageUrl: "images/templogye8.jpg"
  },
  {
    name: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2022-11-20",
    area: 27800,
    imageUrl: "images/quito_temple.jpg"
  }
];

// ==================
// CONTENEDOR
// ==================
const container = document.querySelector("#temples");

// ==================
// CREAte CARD
// ==================
function createTempleCard(temple) {
  const card = document.createElement("article");

  const name = document.createElement("h2");
  name.textContent = temple.name;

  const location = document.createElement("p");
  location.textContent = `Location: ${temple.location}`;

  const dedication = document.createElement("p");
  dedication.textContent = `Dedicated: ${temple.dedicated}`;

  const area = document.createElement("p");
  area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.name;
  img.loading = "lazy";

  card.append(name, location, dedication, area, img);
  return card;
}

// ==================
// MOSTRAR TEMPLOS
// ==================
function displayTemples(templeList) {
  container.innerHTML = "";
  templeList.forEach(temple => {
    container.appendChild(createTempleCard(temple));
  });
}

// ==================
// FILTROS
// ==================
document.querySelector("#home").addEventListener("click", () => {
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  const oldTemples = temples.filter(
    temple => new Date(temple.dedicated).getFullYear() < 1900
  );
  displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
  const newTemples = temples.filter(
    temple => new Date(temple.dedicated).getFullYear() > 2000
  );
  displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});

// ==================
// CARGA INICIAL
// ==================
displayTemples(temples);