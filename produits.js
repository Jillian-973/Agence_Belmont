let currentIndex = 0;
const visibleImages = 4;
let currentCarousel = 0;

// Liste des carrousels avec leurs titres
const carousels = [
    {
        title: "Objet Sacré",
        items: [
            { id: 1, src: "produits/fouet.jpg", alt: "Fouet" },
            { id: 2, src: "produits/eau_benite.jpg", alt: "Eau Bénite" },
            { id: 3, src: "produits/fiole.jpg", alt: "Fiole" },
            { id: 4, src: "produit/dague.jpg", alt: "Dague" },
            { id: 5, src: "produits/lanterne.jpg", alt: "Lanterne Uv" },
            { id: 6, src: "produit/bougie.jpg", alt: "Bougie" },
            { id: 7, src: "produit/grimoire_sacre.jpg", alt: "Grimoire Sacré" },
            { id: 8, src: "produits/pieu.jpg", alt: "Pieu" },
            { id: 9, src: "produit/potion_feu.jpg", alt: "Potion de Feu" },
            { id: 10, src: "produits/rune.jpg", alt: "Rune" },
            { id: 11, src: "produits/tomahawk.jpg", alt: "Tomahawk" },
     
        ]
    },
    {
        title: "Objet Maudit",
        items: [
            { id: 12, src: "produits/amulette.jpg", alt: "Amulette" },
            { id: 13, src: "produits/pieu.jpg", alt: "Pieu" },
            { id: 14, src: "produit/dague_maudite.jpg", alt: "Dague Maudite" },
            { id: 15, src: "produit/fouet_maudit.jpg", alt: "Fouet Maudit" },
            { id: 16, src: "produit/grimoire_maudit.jpg", alt: "Grimoire Maudit" },
            { id: 17, src: "produit/carte_maudite.jpg", alt: "Carte Maudite" },
            { id: 18, src: "produits/amulette_beni.jpg", alt: "amulette de quetsiyah" },
            { id: 19, src: "produit/chaudron.jpg", alt: "Chaudron" },
            { id: 20, src: "produits/dague_george.jpg", alt: "Dague de George" },
            { id: 21, src: "produit/ensent.jpg", alt: "Ensent" },
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