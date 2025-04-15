const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
  });
  
  sr.reveal('.logo',{delay:500, origin:'left'});
  sr.reveal('.nav-items',{delay:500, origin:'top'});
  sr.reveal('.hero-container h1',{delay:750, origin:'left'});
  sr.reveal('.hero-container p',{delay:750, origin:'left'});
  sr.reveal('.main-btn',{delay:750, origin:'left'});
  sr.reveal('.name',{delay:750, origin:'bottom'});
  sr.reveal('.hero-img',{delay:750, origin:'right'});
  
  // Play pop sound
  function playPop() {
    const sound = document.getElementById('popSound');
    sound.currentTime = 0;
    sound.play();
  }
  
  // Confetti + sound
  function launchConfetti() {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
    playPop();
  }
  
  // Random h1 text with animation
  const headings = ['Hello!', 'Welcome!', 'Nice to see you!', 'Click again!', 'Surprise!', 'Goodluck!'];
  function changeText() {
    const h1 = document.querySelector('.hero-container h1');
    const newText = headings[Math.floor(Math.random() * headings.length)];
    h1.textContent = newText;
    h1.classList.add('sparkle');
  
    setTimeout(() => h1.classList.remove('sparkle'), 1000);
    playPop();
  }
  
  // Change theme 
  let currentTheme = 'light';
  function changeTheme() {
    const root = document.documentElement;
    const nav = document.querySelector('nav');
    const pTags = document.querySelectorAll('p');
    const btns = document.querySelectorAll('.btn');
  
    if (currentTheme === 'light') {
      // Dark theme
      root.style.setProperty('--bg-color', '#1a1a1a');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--main-color', '#800000');
  
      nav.style.background = '#2a2a2a';
  
      pTags.forEach(p => p.style.color = '#ffffff');
      btns.forEach(btn => {
        btn.style.border = '2px solid #ffffff';
        btn.style.background = 'linear-gradient(130.08deg, #b22222 0%, #400000 100%)';
        btn.style.color = '#ffffff';
      });
  
      currentTheme = 'dark';
    } else {
      // Light theme
      root.style.setProperty('--bg-color', '#e9e3df');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--main-color', '#800000');
  
      nav.style.background = '#e1ddda';
  
      pTags.forEach(p => p.style.color = '#000000');
      btns.forEach(btn => {
        btn.style.border = '2px solid #800000';
        btn.style.background = 'linear-gradient(130.08deg, #d02f27 0%, #400000 100%)';
        btn.style.color = '#ffffff';
      });
  
      currentTheme = 'light';
    }
  
    playPop();
  }
  