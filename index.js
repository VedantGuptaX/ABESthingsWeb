function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
 
  let titles = ['Quiz', 'Attendance', '& More'];
  let currentIndex = 0;
  let aSpan = document.getElementById('p1');
  
  setInterval(() => {
     
     aSpan.innerHTML= titles[currentIndex];   
     
     currentIndex++;
     
     if (currentIndex === 3)
      currentIndex = 0;
  
  }, 1000)