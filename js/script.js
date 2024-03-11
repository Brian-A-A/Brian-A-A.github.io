const toggleButton = document.getElementsByClassName("navBtn")[0];
const navbarLinks = document.getElementsByClassName("navbar")[0];
const c_icon_container_id = document.getElementById("c_icon_container_id");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

function icons_Container() {
  c_icon_container_id.style.display = "block";
}

//////////////////// Typing effect code ////////////////////
// format_4 - typingEffect
const text = `I have a passion for creating engaging and user-friendly websites.
  My expertise lies in front-end development, where I bring ideas to
  life through clean and efficient code. I enjoy solving challenges
  and staying up-to-date with the latest web technologies to deliver
  exceptional user experiences.`;

let index = 0;
const typingEffectElement = document.getElementById("typingEffect");

function type() {
  typingEffectElement.innerHTML += text.charAt(index);
  index++;
  if (index < text.length) {
    setTimeout(type, 50); // Adjust typing speed (milliseconds)
  }
}
type();
setTimeout(icons_Container, 17000);

//////////////////// End - Typing effect code ////////////////////

//////////////////// Skill bar function ////////////////////
const targetSection = document.getElementById("skls");
const progressBar_html = document.getElementById("myProgressBar-html");
const progressBar_css = document.getElementById("myProgressBar-css");
const progressBar_bootstrap = document.getElementById(
  "myProgressBar-bootstrap"
);
const progressBar_js = document.getElementById("myProgressBar-js");
const progressBar_jquery = document.getElementById("myProgressBar-jquery");
const progressBar_php = document.getElementById("myProgressBar-php");
const progressBar_photo = document.getElementById("myProgressBar-photo");
const progressBar_ui = document.getElementById("myProgressBar-layout");

// Function to be executed once the section is in the viewport
function updateProgressBar() {
  progressBar_html.style.width = 90 + "%";
  progressBar_css.style.width = 80 + "%";
  progressBar_bootstrap.style.width = 70 + "%";
  progressBar_js.style.width = 60 + "%";
  progressBar_jquery.style.width = 40 + "%";
  progressBar_php.style.width = 60 + "%";
  progressBar_photo.style.width = 50 + "%";
  progressBar_ui.style.width = 60 + "%";
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // setTimeout(() => {
      //   updateProgressBar();
      // }, 1000);
      updateProgressBar();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

observer.observe(targetSection);
//////////////////// End - Skill bar function ////////////////////

//////////////////// Contact me word shuffle ////////////////////

const messages = document.getElementsByClassName("an_msg");
let currentIndex = 0;

function changeMessage() {
  messages[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % messages.length;
  messages[currentIndex].style.display = "block";
}

changeMessage(); // Initial display
setInterval(changeMessage, 7000); // Change message every 5 seconds

//////////////////// End - Contact me word shuffle ////////////////////
