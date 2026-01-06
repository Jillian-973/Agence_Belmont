let currentIndex = 0;
const visibleImages = 4;
let currentCarousel = 0;

// Liste des carrousels avec leurs titres
const carousels = [
    {
        title: "Chasseurs",
        items: [
            { id: 1, src: "chasseurs/trevor.jpg", alt: "Trevor Bemont" },
            { id: 2, src: "chasseurs/alucard.jpg", alt: "Alucard" },
            { id: 3, src: "chasseurs/sypha.jpg", alt: "Sypha" },
            { id: 4, src: "chasseurs/richter.jpg", alt: "Richter" },
            { id: 5, src: "chasseurs/annette.jpg", alt: "Annette" },
            { id: 6, src: "chasseurs/maria.jpg", alt: "Maria" },
            { id: 7, src: "chasseur/juste.webp", alt: "Juste" },
            { id: 8, src: "chasseurs/julia.jpg", alt: "Julia Belmont" },
            { id: 9, src: "chasseurs/simon.jpg", alt: "Simon Belmont" },
            { id: 10, src: "chasseurs/leon.jpg", alt: "Leon Belmont" },
        ]
    },
    {
        title: "Packs",
        items: [
            { id: 11, src: "services/embleme.jpg", alt: "Embleme" },
            { id: 12, src: "services/consultation.jpg", alt: "Consultation" },
            { id: 13, src: "services/guide.jpg", alt: "Guide" },
            { id: 14, src: "services/purification.jpg", alt: "Purificaton" },
            { id: 15, src: "services/servies.jpg", alt: "extermination" }
        ]
    }
];

function loadCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = ""; // Effacer l'ancien contenu

    // Mettre à jour le titre
    document.getElementById("carousel-title").innerText = carousels[currentCarousel].title;

    // Ajouter les images
    carousels[currentCarousel].items.forEach(imgData => {
        let card = document.createElement("div");
        card.classList.add("card");

        let img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;

        card.appendChild(img);
        carousel.appendChild(card);
    });

    currentIndex = 0; // Réinitialisation
    updateCarousel();
}

function updateCarousel() {
    let maxIndex = carousels[currentCarousel].items.length - visibleImages;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    let translateValue = -currentIndex * (240 + 20); // Nouvelle largeur + marge
    document.getElementById("carousel").style.transform = `translateX(${translateValue}px)`;
}

function nextSlide() {
    let maxIndex = carousels[currentCarousel].items.length - visibleImages;
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    } else {
        currentIndex = 0; // Revenir au début
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    } else {
        currentIndex = carousels[currentCarousel].items.length - visibleImages; // Aller à la fin
        updateCarousel();
    }
}

function nextCarousel() {
    if (currentCarousel < carousels.length - 1) {
        currentCarousel++;
    } else {
        currentCarousel = 0; // Revenir au premier carrousel
    }
    loadCarousel();
}

function prevCarousel() {
    if (currentCarousel > 0) {
        currentCarousel--;
    } else {
        currentCarousel = carousels.length - 1; // Aller au dernier carrousel
    }
    loadCarousel();
}

// Chargement initial
loadCarousel();