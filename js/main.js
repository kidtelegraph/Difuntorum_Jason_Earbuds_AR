const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const detailContainer = document.getElementById("detail-list");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute('aria-expanded', "true");
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute('aria-expanded', "false");
    }
});

const details = [{
  title: "Emblem Design",
  description: "The emblem design for PlugPlay earbuds is a unique and eye-catching resin design element that adds a touch of style and personality to your audio experience."
},
{
  title: "plugplay Logo",
  description: "Our logo features a distinctive exclamation point design, symbolizing the excitement and emphasis we place on delivering exceptional audio quality and user satisfaction."
},
{
  title: "Charging Port",
  description: "The charging port on PlugPlay earbuds is designed for easy connection in its case, with a simple and minimal design for hassle-free recharging."
},
{
  title: "Speaker 2",
  description: "This secondary speaker is dedicated to delivering extra bass and enhancing the lower-frequency range of your music, ensuring a deep and immersive audio experience."
},
{
  title: "Main Speaker",
  description: "The main speaker in PlugPlay earbuds is engineered for premium quality sound, offering crystal-clear audio and immersive soundscapes that elevate your listening experience to new heights."
},
{
  title: "Ear Plug",
  description: "Our comfortable and ergonomically designed ear plugs ensure a secure and snug fit, allowing you to enjoy your music for hours on end without discomfort or fatigue."
},
];

details.forEach((detail, index) => {
  const detailElement = document.createElement("div");
  detailElement.classList.add("detail");
  detailElement.innerHTML = `
    <span class="detail-title">${detail.title}</span>
    <span class="detail-description">${detail.description}</span>
    <button class="add-to-cart btn btn-primary" data-index="${index}">BUY NOW</button>
  `;
  detailContainer.appendChild(detailElement);
});

function toggleDetails() {
  const detailList = document.getElementById('detail-list');
  if (detailList.style.display === 'none') {
    detailList.style.display = 'block';
  } else {
    detailList.style.display = 'none';
  }
}

(() => {
  //console.log("IIFE Fired");
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  //functions
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.