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

// Cari produk berdasarkan kata kunci yang dimasukkan pengguna.
// Cari produk berdasarkan kata kunci yang dimasukkan pengguna.
document.getElementById("search-input").addEventListener("input", function () {
    const query = document.getElementById("search-input").value.toLowerCase();
    const products = document.querySelectorAll(".menu-card");

    let hasResult = false;
    products.forEach(product => {
        const productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(query)) {
            product.classList.remove("hidden");
            hasResult = true;
        } else {
            product.classList.add("hidden");
        }
    });

    // Scroll to menu section if there are results
    if (hasResult) {
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    }
});

// Jika ingin pencarian dipicu oleh tombol pencarian
document.querySelector("#search-button").addEventListener("click", function(e) {
    const query = document.getElementById("search-input").value.toLowerCase();
    const products = document.querySelectorAll(".menu-card");

    let hasResult = false;
    products.forEach(product => {
        const productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(query)) {
            product.classList.remove("hidden");
            hasResult = true;
        } else {
            product.classList.add("hidden");
        }
    });

    // Scroll to menu section if there are results
    if (hasResult) {
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    }

    e.preventDefault(); // Menghindari form submit jika tombol berada di dalam form
});
