const detailContainer = document.getElementById("herb-detail");

// Get ID from URL
const params = new URLSearchParams(window.location.search);
const herbId = parseInt(params.get("id"));

// Fetch herb data
fetch("data/herbs.json")
  .then(response => response.json())
  .then(data => {
    const herb = data.find(h => h.id === herbId);

    if (herb) {
      displayHerbDetail(herb);
    } else {
      detailContainer.innerHTML = "<p>Herb not found.</p>";
    }
  })
  .catch(error => console.error("Error loading herb:", error));

// Display selected herb
function displayHerbDetail(herb) {
  detailContainer.innerHTML = `
    <div class="herb-card">
      <img src="${herb.image}" alt="${herb.name}" style="width:100%; border-radius:8px;">
      <h2>${herb.name}</h2>
      <p><strong>Sinhala Name:</strong> ${herb.sinhala}</p>
      <p><strong>Scientific Name:</strong> ${herb.scientific}</p>
      <p><strong>Medicinal Use:</strong> ${herb.use}</p>
    </div>
  `;
}