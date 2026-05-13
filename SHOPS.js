const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropmenu = document.querySelector('.dropdown')
const head = document.querySelector('.sidebar')

toggleBtn.onclick = function () {
    dropmenu.classList.toggle('open')
    const isopen = dropmenu.classList.contains('open') 

    toggleBtnIcon.classList = isopen
    '<i class="fa-solid fa-bars"></i>'
    '<i class="fa-solid fa-x"></i>'
}

// const head = document.querySelector('.sidebar')
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    dropmenu.classList.toggle('open')
}

     // Update statistics
    function updateStats() {
      document.getElementById('productCount').textContent = products;
      document.getElementById('serviceCount').textContent = services;
      document.getElementById('totalClicks').textContent = totalClicks;
    };

    // Global variables
    let totalClicks = 0;
    let products = 3;
    let services = 3;
    
    // Update stats on load
    updateStats();

    // Reset stats
      totalClicks = 0;
      products = 3;
      services = 3;
      updateStats();

      function buyProduct(btn, productName, price) {
      btn.innerText = "✓ Added to Cart!";
      btn.style.background = "#27ae60";
      
      setTimeout(() => {
        btn.innerText = "✓ Added";
        btn.style.background = "#18fd03";
      }, 2000);
      
      totalClicks++;
      showNotification(`🛒 ${productName} added to cart! $${price}`);
      updateStats();
    };

    function bookService(btn, serviceName) {
      btn.innerText = "✓ Booked!";
      btn.style.background = "#4ff801";
      
      setTimeout(() => {
        btn.innerText = "Sold Now";
        btn.style.background = "#055252";
        btn.style.color = "white";
      }, 2000);
      
      totalClicks++;
      showNotification('📅 ${serviceName} service booked!');
      updateStats();
    }

    function selectCard(card) {
      card.style.background = "#e8f4f8";
      setTimeout(() => {
        card.style.background = "#cfcaca9f";
      }, 200);
      totalClicks++;
      updateStats();
    }

    const fab = document.createElement('button');
    fab.innerHTML = '+';
    fab.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #3498db;
      color: white;
      border: none;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 999;
    `;
    fab.onclick = addProduct;
    fab.title = "Add New Product";
    document.body.appendChild(fab);

    // Add product function (dynamic)
    function addProduct() {
      const productName = prompt("Enter product name:");
      if (productName) {
        const price = prompt("Enter price:");
        if (price) {
          products++;
          showNotification('✅ New product "${productName}" added!');
          updateStats();
        }
      }
    }