function updateCurrentDay() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];
  const currentDayElement = document.querySelector('[data-testid="currentDayofTheWeek"]');
  currentDayElement.textContent = currentDay;
}

function updateCurrentLocalTime() {
  const currentLocalTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

  function updateTime() {
      const now = new Date();
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      const currentLocalTime = now.toLocaleTimeString(undefined, options);
      currentLocalTimeElement.textContent = currentLocalTime;
  }

  updateTime();
  setInterval(updateTime, 1000); 
}

updateCurrentDay();
updateCurrentLocalTime();
