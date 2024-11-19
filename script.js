const a = document.getElementById("ham");
a.addEventListener('click', () => {
    const c = document.getElementById("come");
    c.classList.add("use");
});
const b = document.getElementById("cross");
b.addEventListener('click', () => {
    const c = document.getElementById("come");
    c.classList.remove("use");
});

// searchbar
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const closeBtn = document.querySelector('.close-btn');

searchBtn.addEventListener('click', function () {
    console.log(search.classList.contains('active'))
    if (search.classList.contains('active')) {
        searchBox.value = ''
    }
    else {
        search.classList.add('active');
        searchBox.focus();
    }
})
closeBtn.addEventListener('click', function () {
    search.classList.remove('active');
    searchBox.value = '';
})
// filter buttons
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => filterContent(button.dataset.filter));
    });

    function filterContent(filter) {
        const items = document.querySelectorAll('.grid-item');

        items.forEach(item => {
            item.style.display = 'none';

            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            }
        });
    }
});



let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}


const heartIcons = document.querySelectorAll('.but-heart i.fa-regular.fa-heart');


heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {

        icon.classList.toggle('active');
    });
});
// search
const headings = [
    { title: 'Chocolava Cake', image: '/images/chocolava.jpg' },
    { title: 'Biscoff Cheesecake', image: '/images/biscoff.jpeg' },
    { title: 'Blueberry Cheesecake', image: '/images/BlueberryCheesecake.webp' },
    { title: 'Strawberry Pancake', image: '/images/strawberrypancake.jpeg' },
    { title: 'Blueberry Cake', image: '/images/cake1.jpeg' },
    { title: 'Chocolate Cupcake', image: '/images/chocolatecupcake.jpg' },
    { title: 'Cranberry Cheesecake', image: '/images/cranberry-cheesecake.jpeg' },
    { title: 'Vanila Cupcake', image: '/images/Vanilacupcake.jpeg' },
    { title: 'Pudding', image: '/images/pudding.jpeg' },
    { title: 'Oreo Pancake', image: '/images/oreopancake.jpeg' },
    { title: 'Oreo Cake', image: '/images/oreocake.jpeg' }
];

const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');

function displayResults(results) {
    searchResults.innerHTML = '';
    results.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `<img src="${item.image}" alt="">${item.title}`;
        resultItem.addEventListener('click', () => {
            searchInput.value = item.title;
            searchResults.innerHTML = '';
        });
        searchResults.appendChild(resultItem);
    });
}

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredResults = headings.filter(item =>
        item.title.toLowerCase().includes(searchText)
    );
    displayResults(filteredResults);
});

document.addEventListener('click', (e) => {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
        searchResults.innerHTML = '';
    }
});