// Configuration pour l'effet de particules personnalisé
const particlesConfig = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

// Initialiser les particules sur l'effet de lumière
tsParticles.load("cursor-particles", particlesConfig);
// sliding side bar //
function openSidebar() {
  document.getElementById("sidebar").style.transform = "translateX(0)";
  document.getElementById("content").style.marginLeft = "250px";
  document.getElementsByClassName("open-btn")[0].style.display = "none";
  document.getElementsByClassName("close-btn")[0].style.display = "block";
}

function closeSidebar() {
  document.getElementById("sidebar").style.transform = "translateX(-100%)";
  document.getElementById("content").style.marginLeft = "50px";
  document.getElementsByClassName("open-btn")[0].style.display = "block";
  document.getElementsByClassName("close-btn")[0].style.display = "none";
}

// contact script //
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission to handle it with JavaScript

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Send the form data to the server for processing
  fetch("send_email.php", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
      // You can redirect to a thank-you page here if desired
    } else {
      alert("An error occurred. Please try again later.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
