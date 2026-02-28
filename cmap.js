const festivals = [
  {
    name: "Karma Festival",
    img: "https://pbs.twimg.com/media/FasZ3PcVUAASFBy.jpg:large",
    month: "August/September",
    time: "During the monsoon",
    description: "Worship of the Karma tree by tribal communities for prosperity and good harvest."
  },
  {
    name: "Sarhul",
    img: "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2022/04/07080859/Sarhul-Festival-04-1.jpg",
    month: "March/April",
    time: "Spring season",
    description: "Marks the beginning of the new year; Sal tree worship and celebration of nature."
  },
  {
    name: "Tusu Festival",
    img: "https://i.pinimg.com/736x/d1/5e/0c/d15e0c73f97fe02eaafd28dfc88b4a0f.jpg",
    month: "January",
    time: "End of Paush month",
    description: "Harvest festival with folk songs and rituals, culminating in immersion of idols."
  },
  {
    name: "Santhali Music",
    img: "https://th-i.thgim.com/public/society/article23455404.ece/alternates/FREE_1200/08SMARPITANEW1",
    duration: "Performed year-round during rituals, marriages, and harvests",
    description: "Folk music of the Santhal tribe featuring traditional instruments like the tamak, banam, and tiriyo, often accompanied by group dance."
  },
  {
    name: "Dokra Art",
    img: "https://media.assettype.com/outlooktraveller/import/outlooktraveller/public/uploads/articles/explore/shutterstock_1266769492.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    duration: "Ongoing traditional craft practiced year-round in artisan workshops and markets",
    description: "An ancient metal-casting craft using the lost-wax technique to create tribal figurines, ornaments, and ritual objects."
  },
  {
    name: "Folk Dance",
    img: "https://blogmedia.testbook.com/blog/wp-content/uploads/2023/07/chhauu-dance-b7e2277d.jpg",
    duration: "Performed year-round during cultural events and ceremonies",
    description: "A traditional martial dance form with elaborate masks and acrobatic movements, popular among tribes in Jharkhand."
  },
  {
    name: "Chhath Puja",
    img: "https://c.ndtvimg.com/2020-11/kvlkm7r8_chhath-puja-2020_625x300_17_November_20.jpg",
    month: "October/November",
    time: "6th day after Diwali",
    description: "Devotees offer prayers to the Sun God standing in water bodies, seeking blessings."
  },
  {
    name: "Sohrai Painting",
    img: "https://cultureandheritage.org/wp-content/uploads/2023/01/image-69-1024x1024.png",
    duration: "Practiced mainly for 2–3 weeks during Sohrai festival and seasonal rituals",
    description: "Wall paintings made by tribal women using natural colors and mud, depicting animals, plants, and daily life."
  },
  {
    name: "Jitiya",
    img: "https://static.officeholidays.com/images/1280x853c/nepal-jitiya-festival-01.jpg",
    month: "September/October",
    time: "Ashtami of Krishna Paksha in Ashwin",
    description: "A fasting day for mothers praying for their children's well-being."
  },
  {
    name: "Betla National Park",
    type: "Wildlife",
    emoji: "🐯",
    location: "Latehar (near Daltonganj)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgsHPaR30usv_ttrUded1xJVLZozSGyO1_g&s",
    description: "One of the first national parks in India to become a Tiger Reserve under Project Tiger."
  },
  {
    name: "Dalma Wildlife Sanctuary",
    type: "Wildlife",
    emoji: "🐘",
    location: "East Singhbhum (near Jamshedpur)",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Entry_gate_Dalma_Wildlife_Sanctuary_Jharkhand.jpg/1200px-Entry_gate_Dalma_Wildlife_Sanctuary_Jharkhand.jpg",
    description: "Known for elephants, leopards, and rich Sal forests."
  },
  {
    name: "Hazaribagh Wildlife Sanctuary",
    type: "Wildlife",
    emoji: "🦌",
    location: "Hazaribagh",
    img: "https://aryango.com/wp-content/uploads/2023/05/Palkot-Wildlife-Sanctuary-Jharkhand-1024x576.jpg",
    description: "A peaceful sanctuary with deer, peacocks, and rich flora."
  },
  {
    name: "Saranda Forest",
    type: "Wildlife",
    emoji: "🌳",
    location: "West Singhbhum (near Chaibasa)",
    img: "https://www.exploreourindia.com/backend/web/images/post/big/1419_Saranda%20Forest%20Jharkhand.webp",
    description: "The largest Sal forest in Asia, home to many tribal communities."
  },
  {
    name: "Topchanchi Wildlife Sanctuary",
    type: "Wildlife",
    emoji: "🦊",
    location: "Dhanbad (Topchanchi)",
    img: "https://tripxl.com/blog/wp-content/uploads/2024/09/Nature-Walks-And-Trekking.jpg",
    description: "Known for tranquil forest trails and scenic lake views."
  },
  {
    name: "Betla ESZ",
    type: "Eco-Zone",
    emoji: "🍃",
    location: "Around Betla, Latehar",
    img: "https://tripxl.com/blog/wp-content/uploads/2024/09/Location-114.jpg",
    description: "Eco-sensitive zone surrounding Betla National Park with rich biodiversity."
  },
  {
    name: "Dalma ESZ",
    type: "Eco-Zone",
    emoji: "🍃",
    location: "Around Dalma, East Singhbhum",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/dalma-hills-jamshedpur-jharkhand-3-attr-hero?qlt=82&ts=1742161761071",
    description: "Protected zone supporting sustainable development around Dalma hills."
  },
  {
    name: "Hazaribagh ESZ",
    type: "Eco-Zone",
    emoji: "🍃",
    location: "Around Hazaribagh",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/Cycling-Routes-around-Ranchi9-popular?qlt=82&ts=1726723858689",
    description: "Green buffer area maintaining ecological balance near the sanctuary."
  },
  {
    name: "Saranda ESZ",
    type: "Eco-Zone",
    emoji: "🍃",
    location: "Around Saranda, West Singhbhum",
    img: "https://www.sarandaforest.in/wp-content/uploads/2024/04/BANK-OF-KARO-RIVER.jpg",
    description: "Eco-zone near the Saranda Forest ensuring environmental conservation."
  }
];

// DOM Elements
const festivalList = document.getElementById("festivalList");
const modal = document.getElementById("festivalModal");
const modalTitle = document.getElementById("modalTitle");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.querySelector(".close");

// Render all entries
festivals.forEach(item => {
  const card = document.createElement("div");
  card.className = "festival-card";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.name;
  img.onerror = () => {
    img.src = "https://via.placeholder.com/300x200?text=Image+Not+Available";
  };

  const title = document.createElement("h3");
  title.textContent = `${item.emoji || ""} ${item.name}`;

  const button = document.createElement("button");
  button.textContent = "View Details";

  button.addEventListener("click", () => {
    modalTitle.textContent = `${item.emoji || ""} ${item.name}`;
    modalDetails.innerHTML = `
      ${item.month ? `<li><strong>Month:</strong> ${item.month}</li>` : ''}
      ${item.time ? `<li><strong>Time:</strong> ${item.time}</li>` : ''}
      ${item.duration ? `<li><strong>Duration:</strong> ${item.duration}</li>` : ''}
      ${item.location ? `<li><strong>Location:</strong> ${item.location}</li>` : ''}
      ${item.type ? `<li><strong>Type:</strong> ${item.type}</li>` : ''}
      <li><strong>Description:</strong> ${item.description}</li>
    `;
    modal.style.display = "block";
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(button);
  festivalList.appendChild(card);
});

// Modal close logic
closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
