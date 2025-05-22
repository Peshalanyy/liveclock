function animateClock(newTime) {
  const clock = document.getElementById("clock");
  clock.classList.remove("fade");
  void clock.offsetWidth; // trigger reflow
  clock.classList.add("fade");
  clock.textContent = `${cityCode} — ${newTime}`;
}
