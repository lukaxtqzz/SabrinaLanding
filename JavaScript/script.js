function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = [];

  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      speed: Math.random() * 0.5 + 0.2,
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      // Падение
      star.y += star.speed;
      star.x += star.speed * 0.5;

      // Если звезда выходит за пределы — вернуть наверх
      if (star.y > canvas.height || star.x > canvas.width) {
        star.x = Math.random() * canvas.width * 0.5;
        star.y = -10;
      }
    });

    requestAnimationFrame(drawStars);
  }

  drawStars();