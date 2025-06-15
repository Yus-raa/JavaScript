let passwordLength = document.querySelector("#sliderValue");
let slider = document.querySelector("#lengthRange");

slider.addEventListener('input', () => { passwordLength.textContent = slider.value });

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 50 },
    "size": { "value": 5 },
    "color": { "value": ["#00ff99", "#00cfff", "#ffffff"] },
    "opacity": { "value": 0.3 },
    "move": { "speed": 0.6 },
    "line_linked": { "enable": false },
    "shape": { "type": "polygon",
        "polygon": {
            "nb_sides": 6  // hexagon
        }
     }
  }
});
