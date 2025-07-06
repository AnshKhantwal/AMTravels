function searchDestination() {
  const input = document.getElementById("searchInput").value;
  if (input.trim() !== "") {
    alert(`Searching for:${input}`);
  } else {
    alert("Please enter a destination!");
  }
}

function showPackages(type) {
  const container = document.getElementById('packageContainer');
  const buttons = document.querySelectorAll('.package-buttons button');

  // Remove active class
  buttons.forEach(btn => btn.classList.remove('active'));

  if (type === 'domestic') {
    buttons[0].classList.add('active');
  } else {
    buttons[1].classList.add('active');
  }

  if (type === 'domestic') {
    container.innerHTML = `
      <div class="package-card">
        <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?fm=jpg&q=60&w=3000" alt="Goa">
        <div class="package-info">
          <h3>Goa</h3>
          <p>From ₹ <span>8,000</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="Kerala.jpg" alt="Kerala">
        <div class="package-info">
          <h3>Kerala</h3>
          <p>From ₹ <span>11,999</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="https://plus.unsplash.com/premium_photo-1705363013491-0ed4a7a4fe99?fm=jpg&q=60&w=3000" alt="Andaman">
        <div class="package-info">
          <h3>Andaman</h3>
          <p>From ₹ <span>14,999</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="https://plus.unsplash.com/premium_photo-1697730464803-fcede713753e?fm=jpg&q=60&w=3000" alt="Gujarat">
        <div class="package-info">
          <h3>Gujarat</h3>
          <p>From ₹ <span>14,999</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObMtGdi4GJiYPxTG2RW8t6GtqWR2YsO74Tw&s" alt="Ladakh">
        <div class="package-info">
          <h3>Ladakh</h3>
          <p>From ₹ <span>18,500</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?fm=jpg&q=60&w=3000" alt="Rajasthan">
        <div class="package-info">
          <h3>Rajasthan</h3>
          <p>From ₹ <span>12,000</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    `;
  } else if (type === 'international') {
    container.innerHTML = `
      <div class="package-card">
        <img src="https://images.unsplash.com/photo-1557750255-c76072a7aad1?fm=jpg&q=60&w=3000" alt="Vietnam">
        <div class="package-info">
          <h3>Vietnam</h3>
          <p>From ₹ <span>25,000</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="Europe.jpg" alt="Europe">
        <div class="package-info">
          <h3>Europe</h3>
          <p>From ₹ <span>85,000</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.jpg?s=612x612&w=0&k=20&c=o7qSiUvYzMp94lYYb7R1ZUAMcEG54byX0bU3UY1z2sQ=" alt="Australia">
        <div class="package-info">
          <h3>Australia</h3>
          <p>From ₹ <span>95,000</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aJu6cFeYR_EKcW-b-9D7bC_s0T39Akcpmg&s" alt="Malaysia">
        <div class="package-info">
          <h3>Malaysia</h3>
          <p>From ₹ <span>35,000</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="https://t3.ftcdn.net/jpg/00/77/16/10/360_F_77161061_FdevXEertWnL3j7yeYCpH3xfD823cibi.jpg" alt="Singapore">
        <div class="package-info">
          <h3>Singapore</h3>
          <p>From ₹ <span>55,000</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="package-card">
        <img src="Thailand.jpg" alt="Thailand">
        <div class="package-info">
          <h3>Thailand</h3>
          <p>From ₹ <span>30,000</span></p>
          <a href="#">Explore <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    `;
  }
}

function scrollPackages(direction) {
  const container = document.getElementById('packageContainer');
  const scrollAmount = 250;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

showPackages('domestic');




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
