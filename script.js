const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#search-input');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchInput.focus();
    e.preventDefault();
};

const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
})

// Search
document.getElementById("search-box").addEventListener("click", function () {
    const searchInput = document
      .getElementById("search-input")
      .value.toLowerCase();
    const elements = document.querySelectorAll("section, h3, p, div.menu-card");
    let found = false;
  
    elements.forEach((element) => element.classList.remove("highlight"));
  
    elements.forEach((element) => {
      if (
        element.textContent.toLowerCase().includes(searchInput) &&
        searchInput.trim() !== ""
      ) {
        found = true;
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  
    if (!found) {
      alert("Konten tidak ditemukan!");
    }
  });
