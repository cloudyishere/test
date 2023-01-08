window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }