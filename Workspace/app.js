document.node('button').addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('text').value;
    let password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      alert('I think its Empty😒🤞');
    } else {
      alert("I think you should click okay😁😁");
      createSnowflakes();
      celebrate();
      setTimeout(() => {
        window.location.reload();
      },2*2800);
    }
  });

  
  function createSnowflakes() {
    const numberOfSnowflakes = 150; 
    for (let i = 0; i < numberOfSnowflakes; i++) {
      let snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
  

      const layer = Math.floor(Math.random() * 3) + 1;
      snowflake.classList.add(`layer${layer}`);
  
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.opacity = Math.random();
      document.body.appendChild(snowflake);
  
     
      setTimeout(() => {
        snowflake.remove();
      }, 8000); 
    }
  }

  function celebrate() {

    const sound = document.getElementById('celebrationSound');
    sound.play();

    confetti({
      particleCount: 300,
      spread: 360,
      origin: { y: 0.6 },
      scalar: 1.5,
      startVelocity: 45,
      gravity: 1.2,
    });

    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 360,
        origin: { x: 0.2, y: 0.6 },
        scalar: 1.2,
        startVelocity: 50,
        gravity: 1.5,
      });
    }, 250);
  
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 360,
        origin: { x: 0.8, y: 0.6 },
        scalar: 1.2,
        startVelocity: 50,
        gravity: 1.5,
      });
    }, 500);
  
    setTimeout(() => {
      confetti({
        particleCount: 300,
        spread: 360,
        origin: { y: 0.6 },
        scalar: 2,
        startVelocity: 60,
        gravity: 1,
      });
    }, 750);
  }
 

