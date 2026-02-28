// -------------------------------
// Handle search from home1.html
// -------------------------------
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query")?.toLowerCase();

  const cards = document.querySelectorAll(".card");
  const grid = document.querySelector(".attractions-grid");

  if (query) {
    let found = false;

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const location = card.querySelector("span").textContent.toLowerCase();

      if (title.includes(query) || location.includes(query)) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      grid.innerHTML = `<p style="font-size:18px; color:red; text-align:center;">No details found in the page</p>`;
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const dashboardBtn = document.getElementById("dashboardBtn");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const overlay = document.getElementById("overlay");

  // Open Sidebar
  dashboardBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
    overlay.classList.add("show");
  });

  // Close Sidebar
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  });

  // Click outside sidebar
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  });
});


// -------------------------------
// Handle live search inside attractions.html
// -------------------------------
const searchBox = document.getElementById("searchBox");
if (searchBox) {
  searchBox.addEventListener("input", () => {
    const value = searchBox.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    const grid = document.querySelector(".attractions-grid");
    let found = false;

    cards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const location = card.querySelector("span").textContent.toLowerCase();

      if (title.includes(value) || location.includes(value)) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      grid.innerHTML = `<p style="font-size:18px; color:red; text-align:center;">No details found in the page</p>`;
    }
  });
}

// -------------------------------
// Handle category filters
// -------------------------------
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    const cards = document.querySelectorAll(".card");

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    let found = false;
    cards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      document.querySelector(".attractions-grid").innerHTML =
        `<p style="font-size:18px; color:red; text-align:center;">No details found in the page</p>`;
    }
  });
});
