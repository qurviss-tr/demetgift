onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const playButton = document.getElementById("play-audio");
  const audio = document.getElementById("background-audio");

  // Simulate the button click after the page is fully loaded
  setTimeout(() => {
    playButton.click();
  }, 1000);

  playButton.addEventListener("click", () => {
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  });
};
