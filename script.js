// Store and retrieve user preferences
function saveUserName() {
    const name = document.getElementById('usernameInput').value;
    localStorage.setItem('username', name);
    updateUserNameDisplay(name);
  }
  
  function loadUserName() {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      updateUserNameDisplay(storedName);
    }
  }
  
  function updateUserNameDisplay(name) {
    document.getElementById('usernameDisplay').textContent = name;
  }
  
  // Trigger animation
  function animateImage() {
    const image = document.getElementById('image');
    image.classList.remove('bounce'); // Reset in case it's still animating
    void image.offsetWidth; // Trigger reflow
    image.classList.add('bounce');
  }
  
  // Event listeners
  document.getElementById('saveBtn').addEventListener('click', saveUserName);
  document.getElementById('animateBtn').addEventListener('click', animateImage);
  
  // Load name on page load
  loadUserName();
  