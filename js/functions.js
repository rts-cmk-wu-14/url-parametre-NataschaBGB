// Funktion til at initialisere hearts array, hvis det ikke allerede findes
function initializeHearts() {
  const storedHearts = localStorage.getItem('hearts');
  if (!storedHearts) {
    const heartsArray = [
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
      { id: 7, active: false },
      { id: 8, active: false }
    ];
    localStorage.setItem('hearts', JSON.stringify(heartsArray));
  }
}

// Funktion til at hente det nuværende array hver gang siden loader
function getHearts() {
  const hearts = JSON.parse(localStorage.getItem('hearts'));
  return hearts;
}

// Funktion til at opdatere et hjerte
function hearts(id) {
  let hearts = getHearts();
  hearts = hearts.map(heart => {
    if (heart.id === id) {
      heart.active = !heart.active; // Skift aktiv status
    }
    return heart;
  });
  localStorage.setItem('hearts', JSON.stringify(hearts));
  console.log(hearts);
  // Her kan du også kalde en funktion for at opdatere UI, hvis nødvendigt
}


// Funktion til at opdatere UI baseret på hearts array
function updateHeartsUI() {
  const hearts = getHearts();
  hearts.forEach(heart => {
    const element = document.querySelector(`.heart[data-id="${heart.id}"]`);
    if (element) {
      if (heart.active) {
        element.classList.remove('inactive');
        element.classList.add('active');
      } else {
        element.classList.remove('active');
        element.classList.add('inactive');
      }
    }
  });
}

// Når siden loader, initialiserer vi hearts og opdaterer UI
window.addEventListener('load', () => {
  initializeHearts();
  updateHeartsUI();

  // Event listener for klik på hjerterne
  document.querySelectorAll('.heart').forEach(element => {
    element.addEventListener('click', () => {
      const id = parseInt(element.getAttribute('data-id'));
      hearts(id); // Opdater hearts i localStorage
      updateHeartsUI(); // Opdater UI for at afspejle ændringer
    });
  });
});