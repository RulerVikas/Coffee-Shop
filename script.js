// Responsive Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});
// Initialize AOS
AOS.init({
    duration: 1200, // Animation duration
    once: true // Animation happens only once when scrolled into view
});
// Image Modal
const modal = document.createElement('div');
const modalImage = document.createElement('img');
const modalClose = document.createElement('span');

modal.id = 'imageModal';
modal.classList.add('modal');
modalImage.id = 'modalImage';
modalClose.id = 'modalClose';
modalClose.textContent = '×';

modal.appendChild(modalImage);
modal.appendChild(modalClose);
document.body.appendChild(modal);

document.querySelectorAll('.menu-item img').forEach(image => {
    image.addEventListener('click', (e) => {
        modalImage.src = e.target.src;
        modal.classList.add('open');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
    if (e.target !== modalImage) {
        modal.classList.remove('open');
    }
});

// Parallax Scrolling
window.addEventListener('scroll', function() {
    const parallax = document.getElementById('parallax');
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + 'px';
});



const dailySpecials = [
    {
        "name": "Caramel Macchiato",
        "description": "A delightful blend of espresso, steamed milk, and caramel syrup.",
        "price": "$4.99"
    },
    {
        "name": "Blueberry Muffin",
        "description": "A fresh, fluffy muffin filled with blueberries.",
        "price": "$2.49"
    }
];

const specialsContainer = document.getElementById('daily-specials');

dailySpecials.forEach(special => {
    const specialDiv = document.createElement('div');
    specialDiv.classList.add('special');

    specialDiv.innerHTML = `
        <h3>${special.name}</h3>
        <p>${special.description}</p>
        <p class="price">${special.price}</p>
    `;

    specialsContainer.appendChild(specialDiv);
});


// Fetch and Display Daily Specials
fetch('specials.json')
    .then(response => response.json())
    .then(data => {
        const specialsContainer = document.getElementById('specials-container');
        data.dailySpecials.forEach(special => {
            const specialDiv = document.createElement('div');
            specialDiv.classList.add('special-item');
            
            specialDiv.innerHTML = `
                <h3>${special.name}</h3>
                <p>${special.description}</p>
                <p><strong>${special.price}</strong></p>
            `;
            
            specialsContainer.appendChild(specialDiv);
        });
    })
    .catch(error => console.error('Error fetching specials:', error));

