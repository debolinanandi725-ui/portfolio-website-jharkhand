// Open modal with product details
document.querySelectorAll('.craft-item').forEach(item => {
  item.addEventListener('click', function () {
    document.getElementById('modalImage').src = this.dataset.image;
    document.getElementById('modalName').textContent = this.dataset.name;
    document.getElementById('modalPrice').textContent = this.dataset.price;
    document.getElementById('modalBrand').textContent = this.dataset.brand;
    document.getElementById('modalLocation').textContent = this.dataset.location;
    document.getElementById('modalPhone').textContent = this.dataset.phone;
    document.getElementById('modalReview').textContent = this.dataset.review;

    document.getElementById('craftModal').style.display = 'block';
  });
});

// Close modal
document.querySelector('.modal .close').addEventListener('click', function () {
  document.getElementById('craftModal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) {
    document.getElementById('craftModal').style.display = 'none';
  }
});

console.log("Marketplace script loaded.");
