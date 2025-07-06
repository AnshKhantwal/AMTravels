function showTab(tabId) {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }

const toggleBtn = document.getElementById("toggle-more");
const moreGrid = document.getElementById("more-unique");
let expanded = false;

toggleBtn.addEventListener("click", () => {
  expanded = !expanded;
  moreGrid.style.display = expanded ? "grid" : "none";
  toggleBtn.textContent = expanded ? "Show less ▲" : "Show more ⌄";
});




//form validation
const subscribeForm = document.getElementById("subscribeForm");
const nameInput = document.getElementById("subscribename");
const emailInput = document.getElementById("subscribeemail");
const errorBox = document.getElementById("formError");

  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    errorBox.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (name === "") {
      errorBox.textContent = "Please enter your name.";
    } else if (email === "") {
      errorBox.textContent = "Please enter your email.";
    } else if (!emailPattern.test(email )) {
      errorBox.textContent = "Please enter a valid email address.";
    } else {
      alert("Subscribed successfully!");
      subscribeForm.reset();
    }
  });


//quotation validation

const travelForm = document.getElementById("travelForm");
const message = document.getElementById("message");
const spinner = document.getElementById("loadingSpinner");

travelForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (travelForm.checkValidity()) {
    // Show loading spinner
    spinner.style.display = "block";
    message.textContent = "";

    // Simulate network delay (3 seconds)
    setTimeout(() => {
      spinner.style.display = "none";
      message.textContent = "Your request has been submitted. We'll contact you soon!";
      travelForm.reset();

      // Hide message after 3 seconds
      setTimeout(() => {
        message.textContent = "";
      }, 4000);
    }, 2000);
  }
});



// testimonals
const track = document.getElementById("testimonialTrack");
const cards = document.querySelectorAll(".testimonial-card");
let currentIndex = 0;
const cardsToShow = 3;
const totalCards = cards.length;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20; // card + margin
  const newTransform = -currentIndex * cardWidth;
  track.style.transform = `translateX(${newTransform}px)`;
}

function nextSlide() {
  if (currentIndex < totalCards - cardsToShow) {
    currentIndex++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

// Auto slide every 2.5 seconds
setInterval(() => {
  if (currentIndex < totalCards - cardsToShow) {
    nextSlide();
  } else {
    currentIndex = 0;
    updateSlider();
  }
}, 2500);











// const track = document.getElementById("testimonialTrack");
// let cards = document.querySelectorAll(".testimonial-card");

// const cardsToShow = 3;
// let currentIndex = cardsToShow;
// let interval;

// function setupCarousel() {
//   // Clone first and last few elements for infinite scroll
//   const first = [...cards].slice(0, cardsToShow).map(card => card.cloneNode(true));
//   const last = [...cards].slice(-cardsToShow).map(card => card.cloneNode(true));

//   first.forEach(clone => track.appendChild(clone));
//   last.reverse().forEach(clone => track.prepend(clone));

//   cards = document.querySelectorAll(".testimonial-card");

//   updateSlider();
//   track.style.transition = "none";
//   requestAnimationFrame(() => {
//     updateSlider(); // jump to initial position
//     track.style.transition = "transform 0.6s ease-in-out";
//   });
// }

// function updateSlider() {
//   const cardWidth = cards[0].offsetWidth + 20;
//   track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }

// function nextSlide() {
//   currentIndex++;
//   updateSlider();
//   if (currentIndex === cards.length - cardsToShow) {
//     setTimeout(() => {
//       track.style.transition = "none";
//       currentIndex = cardsToShow;
//       updateSlider();
//       requestAnimationFrame(() => {
//         track.style.transition = "transform 0.6s ease-in-out";
//       });
//     }, 600);
//   }
// }

// function prevSlide() {
//   currentIndex--;
//   updateSlider();
//   if (currentIndex === 0) {
//     setTimeout(() => {
//       track.style.transition = "none";
//       currentIndex = cards.length - (2 * cardsToShow);
//       updateSlider();
//       requestAnimationFrame(() => {
//         track.style.transition = "transform 0.6s ease-in-out";
//       });
//     }, 600);
//   }
// }

// function autoSlide() {
//   interval = setInterval(() => nextSlide(), 5000);
// }

// setupCarousel();
// autoSlide();
