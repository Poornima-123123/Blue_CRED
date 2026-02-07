const projects = [
  {
    name: "Pichavaram Mangrove Forest",
    location: "Tamil Nadu, India",
    area: 1100,
    year: 2023,
    credits: 42000,
    price: 300,
    image: "assets/images/mangrove1.jpg"
  },
  {
    name: "Sundarbans Mangrove Restoration",
    location: "West Bengal, India",
    area: 15000,
    year: 2022,
    credits: 100000,
    price: 450,
    image: "assets/images/mangrove2.jpg"
  },
  {
    name: "Bhitarkanika Mangroves",
    location: "Odisha, India",
    area: 6500,
    year: 2023,
    credits: 56000,
    price: 320,
    image: "assets/images/mangrove3.jpg"
  },
  {
    name: "Krishna Delta Mangroves",
    location: "Andhra Pradesh, India",
    area: 4000,
    year: 2021,
    credits: 30000,
    price: 280,
    image: "assets/images/mangrove4.jpg"
  },
  {
    name: "Mikoko Pamoja",
    location: "Kenya",
    area: 1200,
    year: 2022,
    credits: 25000,
    price: 500,
    image: "assets/images/mangrove5.jpg"
  },
  {
    name: "Cispatá Bay Mangroves",
    location: "Colombia",
    area: 8000,
    year: 2023,
    credits: 72000,
    price: 380,
    image: "assets/images/mangrove6.jpg"
  },
  {
    name: "Rufiji Delta Mangroves",
    location: "Tanzania",
    area: 9000,
    year: 2021,
    credits: 65000,
    price: 350,
    image: "assets/images/mangrove7.jpg"
  },
  {
    name: "Mahakam Delta Mangroves",
    location: "Indonesia",
    area: 7000,
    year: 2022,
    credits: 54000,
    price: 330,
    image: "assets/images/mangrove8.jpg"
  }
];

function login() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("dashboard").classList.remove("hidden");
  renderProjects();
  updateSummary();
}

function logout() {
  location.reload();
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";

  projects.forEach(p => {
    grid.innerHTML += `
      <div class="project-card">
        <img src="${p.image}" />
        <div class="project-info">
          <h3>${p.name}</h3>
          <p>${p.location}</p>
          <p>Area: ${p.area} ha</p>
          <p>Year: ${p.year}</p>
          <p>Credits: ${p.credits} tCO₂</p>
          <p>Price: ₹${p.price}/ton</p>
          <span class="badge">VCS Verified</span>
          <button class="buy-btn">Buy Credits</button>
        </div>
      </div>
    `;
  });
}

function updateSummary() {
  const totalCredits = projects.reduce((a, b) => a + b.credits, 0);
  const avgPrice = Math.round(projects.reduce((a, b) => a + b.price, 0) / projects.length);

  document.getElementById("totalCredits").innerText = totalCredits;
  document.getElementById("activeProjects").innerText = projects.length;
  document.getElementById("verifiedProjects").innerText = projects.length;
  document.getElementById("avgPrice").innerText = `₹${avgPrice}`;
}
