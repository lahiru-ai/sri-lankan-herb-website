const herbList = document.getElementById("herb-list");
const searchInput = document.getElementById("searchInput");

let allHerbs = [];

// Fetch herb data
fetch("data/herbs.json")
  .then(response => response.json())
  .then(data => {
    allHerbs = data;
    displayHerbs(allHerbs);
  })
  .catch(error => console.error("Error loading herbs:", error));

// Display herbs
function displayHerbs(herbs) {
  herbList.innerHTML = "";

  herbs.forEach(herb => {
    const card = document.createElement("div");
    card.classList.add("herb-card");
    card.addEventListener("click", () => {
  window.location.href = `herb.html?id=${herb.id}`;
});

    card.innerHTML = `
  <img src="${herb.image || 'images/default.jpg'}" alt="${herb.name}">
  <h3>${herb.name}</h3>
  <p><strong>Sinhala:</strong> ${herb.sinhala}</p>
  <p><strong>Scientific:</strong> ${herb.scientific}</p>
  <p>${herb.use}</p>
`;

    herbList.appendChild(card);
  });
}

// Live search
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredHerbs = allHerbs.filter(herb =>
    herb.name.toLowerCase().includes(searchTerm) ||
    herb.sinhala.includes(searchTerm) ||
    herb.scientific.toLowerCase().includes(searchTerm)
  );

  displayHerbs(filteredHerbs);
});