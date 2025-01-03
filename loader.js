// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the loader and background elements
    const loadingScreen = document.querySelector(".terminal-loader");
    const loaderBackground = document.querySelector(".loader-background");
  
    // Function to fade out the loader and background
    function fadeOutLoadingScreen() {
      // Fade out the loader
      loadingScreen.style.opacity = "0";
  
      // Fade out the background
      loaderBackground.style.opacity = "0";
  
      // After the fade-out transition is complete, remove both elements
      loaderBackground.addEventListener(
        "transitionend",
        function () {
          loadingScreen.style.display = "none";
          loaderBackground.style.display = "none";
        },
        { once: true }
      );
    }
  
    // Simulate a loading delay (e.g., 3 seconds)
    setTimeout(fadeOutLoadingScreen, 3000); // Adjust the time as needed
  });