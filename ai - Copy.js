// Handle trip form
document.getElementById('tripForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const budget = parseInt(document.getElementById('budget').value);
  const duration = parseInt(document.getElementById('duration').value);
  const interests = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

  if (!interests.length) { 
    alert('Please select at least one interest.'); 
    return; 
  }

  let suggestions = {
    places: [],
    itinerary: [],
    tips: ['Carry ID proof for forest entry', 'Best time to visit: October to March', 'Local cuisine includes exclusive tribal delicacies'],
    totalCost: 0
  };

  if (interests.includes('wildlife')) {
    suggestions.places.push('Betla National Park (Tiger Reserve)', 'Palamu Wildlife Sanctuary');
    suggestions.itinerary.push(`Day 1-${Math.min(3, duration)}: Explore wildlife reserves and go on safari adventures.`);
    suggestions.totalCost += 3000 * Math.min(3, duration);
  }
  if (interests.includes('culture')) {
    suggestions.places.push('Ranchi (Patratu Dam)', 'Netarhat (Hill Station)');
    suggestions.itinerary.push(`Day ${Math.max(1, duration-3)}-${duration}: Visit cultural sites and museums showcasing tribal artifacts.`);
    suggestions.totalCost += 2000 * Math.max(1, duration - 3);
  }
  if (interests.includes('adventure')) {
    suggestions.places.push('Dalma Hill', 'Tagore Hill');
    suggestions.itinerary.push(`Day 2-${Math.min(duration-1, 4)}: Engage in trekking and adventure activities like cave explorations.`);
    suggestions.totalCost += 2500 * (Math.min(duration-1, 4) - 1);
  }
  if (interests.includes('relax')) {
    suggestions.places.push('Dassam Falls', 'Hundru Falls');
    suggestions.itinerary.push(`Day ${duration}: Relax at scenic waterfalls and enjoy spa treatments if available.`);
    suggestions.totalCost += 1500;
  }

  if (budget < 10000) { 
    suggestions.places = suggestions.places.slice(0, 2); 
    suggestions.itinerary.pop(); 
  } else if (budget > 25000) { 
    suggestions.tips.push('Consider private guided tours for premium experiences'); 
  }

  suggestions.totalCost = Math.min(suggestions.totalCost, budget);

  document.getElementById('itinerary').innerHTML = 
    suggestions.itinerary.map(i => `<div class="itinerary-item">${i}</div>`).join('');
  
  document.getElementById('budgetBreakdown').innerHTML = 
    `<h4 class="font-semibold mb-2">Estimated Cost: ₹${suggestions.totalCost}</h4>`;
  
  document.getElementById('places').innerHTML = 
    suggestions.places.map(place => `<li class="flex items-center"><span class="text-green-500 font-bold mr-2">•</span>${place}</li>`).join('');
  
  document.getElementById('tips').innerHTML = 
    suggestions.tips.map(tip => `<li class="flex items-center"><span class="text-yellow-500 font-bold mr-2">•</span>${tip}</li>`).join('');

  document.getElementById('suggestions').classList.remove('hidden');
  document.getElementById('suggestions').scrollIntoView({ behavior: 'smooth' });

  if (typeof updateMarkers === 'function') updateMarkers(suggestions.places);
});

// Google Maps
let map, geocoder, markerObjects = [];

function initMap() {
  const center = { lat: 23.6102, lng: 85.2799 }; // Ranchi
  map = new google.maps.Map(document.getElementById('map'), { center, zoom: 7 });
  geocoder = new google.maps.Geocoder();
}

function updateMarkers(placeNames) {
  if (!map || !geocoder) return;

  markerObjects.forEach(m => m.setMap(null));
  markerObjects = [];

  placeNames.forEach(place => {
    geocoder.geocode({ address: place + ", Jharkhand, India" }, (results, status) => {
      if (status === "OK" && results[0]) {
        const m = new google.maps.Marker({ map, position: results[0].geometry.location, title: place });
        markerObjects.push(m);
        if (markerObjects.length === 1) map.setCenter(results[0].geometry.location);
      } else {
        console.warn('Geocode failed for', place, status);
      }
    });
  });
}
