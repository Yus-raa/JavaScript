
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ["#F49BAB", "#8E7DBE", "#A6D6D6", "#FF8383", "#FFF574", "#E73879"] },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 6 },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.8, width: 3 },
        move: { enable: true, speed: 3 }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } }
      },
      retina_detect: true
    });

    const songs = [
      'music/song1.mp3',
      'music/song2.mp3',
      'music/song3.mp3',
      'music/song4.mp3',
      'music/song5.mp3',
      'music/song6.mp3'
    ];

    let currentAudio = null;
    let gameRunning = false;
    let round = 0;
    let countdownInterval;
    let countdownTime = 120;

    const status = document.getElementById('status');
    const toggleBtn = document.getElementById('toggleBtn');
    const roundCount = document.getElementById('roundCount');
    const countdown = document.getElementById('countdown');

    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    function getRandomDuration(min = 3000, max = 8000) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function playRandomSong() {
      if (!gameRunning) return;

      round++;
      roundCount.textContent = round;
      document.body.classList.add("playing");
      document.body.classList.remove("stopped");

      const shuffled = shuffle([...songs]);
      currentAudio = new Audio(shuffled[0]);
      currentAudio.play();
      status.textContent = `🎶 Round ${round} - Music Playing...`;

      const stopTime = getRandomDuration();
      setTimeout(() => {
        currentAudio.pause();
        status.textContent = `⏹️ Round ${round} - Music Stopped!`;
        document.body.classList.remove("playing");
        document.body.classList.add("stopped");
        startCountdownThenPlayNextRound();
      }, stopTime);
    }

    function startCountdownThenPlayNextRound() {
      countdownTime = 60;
      updateCountdownDisplay();

      countdownInterval = setInterval(() => {
        countdownTime--;
        updateCountdownDisplay();

        if (countdownTime <= 0) {
          clearInterval(countdownInterval);
          countdown.textContent = '';
          playRandomSong();
        }
      }, 1000);
    }

    function updateCountdownDisplay() {
      const minutes = String(Math.floor(countdownTime / 60)).padStart(2, '0');
      const seconds = String(countdownTime % 60).padStart(2, '0');
      countdown.textContent = `⏳ Next round in: ${minutes}:${seconds}`;
    }

    toggleBtn.addEventListener('click', () => {
      if (!gameRunning) {
        gameRunning = true;
        toggleBtn.textContent = 'STOP';
        playRandomSong();
      } else {
        gameRunning = false;
        if (currentAudio) currentAudio.pause();
        document.body.classList.remove("playing", "stopped");
        clearInterval(countdownInterval);
        countdown.textContent = '';
        status.textContent = "Game stopped.";
        toggleBtn.textContent = 'START';
      }
    });