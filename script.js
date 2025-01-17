document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const memoriesContainer = document.getElementById('memoriesContainer');
    
    revealButton.addEventListener('click', () => {
      memoriesContainer.classList.remove('hidden');
      setTimeout(() => memoriesContainer.classList.add('show'), 10);
      createEmojiRain();
    });
  });
  
  function createEmojiRain() {
    const emojis = ['🎉', '🎂', '🎁', '🥳'];
    for (let i = 0; i < 50; i++) {
      const emoji = document.createElement('div');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.cssText = `
        position: fixed;
        font-size: 24px;
        left: ${Math.random() * 100}vw;
        top: -10px;
        animation: fall ${Math.random() * 3 + 2}s linear forwards;
      `;
      document.body.appendChild(emoji);
      setTimeout(() => emoji.remove(), 5000);
    }
  }
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(styleSheet);
  