let passwordLength = document.querySelector("#sliderValue");
let slider = document.querySelector("#lengthRange");
let passwords = document.querySelectorAll(".password");
let toast = document.getElementById("toast");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
let generateBtn = document.getElementById("generatebtn");


passwords.forEach(password => {
  password.addEventListener("click", function () {
    const text = this.innerText;
    navigator.clipboard.writeText(text).then(() => {
      showToast("Password Copied!");
    }).catch(err => {
      console.log("Error copying text!", err);
    });
  });
});

// Generate 4 passwords and display them
generateBtn.addEventListener("click", () => {
  passwords.forEach(password => {
    password.textContent = generatePassword(slider.value); 
  });
});

// Function to generate a random password of given length
function generatePassword(length = 10) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500); // hide after 1.5 seconds
}


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
