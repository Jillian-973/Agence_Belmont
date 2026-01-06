document.querySelectorAll('.options').forEach(ul => {
    ul.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            ul.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
            e.target.classList.add('selected');
            ul.nextElementSibling.disabled = false;
        }
    });
});

function nextQuestion(current) {
    console.log("Changement de question : q" + current + " → q" + (current + 1));

    let currentQuestion = document.getElementById('q' + current);
    let nextQuestion = document.getElementById('q' + (current + 1));
    document.getElementById('foot').classList.add('footer');

setTimeout(() => {
    if (currentQuestion) {
        currentQuestion.style.display = "none"; 
    }
    if (nextQuestion) {
        nextQuestion.style.display = "block"; 
    }

},200);
  
}

function showConfirmation() {
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}

function addComment() {
    let commentBox = document.getElementById("commentBox");
    let commentSection = document.getElementById("commentSection");
    
    if (commentBox.value.trim() !== "") {
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = commentBox.value;
        
        commentSection.appendChild(newComment);
        commentBox.value = "";  
    } else {
        alert("Veuillez entrer un commentaire !");
    }
}

let currentIndex = 0;
const visibleCards = 4;
const carousel = document.getElementById("carousel");
const totalCards = document.querySelectorAll(".card").length;

function updateCarousel() {
    let translateValue = -currentIndex * (120 + 10); // Largeur carte + marge
    carousel.style.transform = `translateX(${translateValue}px)`;
}

function nextSlide() {
    if (currentIndex + visibleCards < totalCards) {
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function nextCarousel() {
    alert("Passage au carrousel suivant ! (Ici, il faudrait charger un autre ensemble de cartes)");
}

function prevCarousel() {
    alert("Retour au carrousel précédent !");
}