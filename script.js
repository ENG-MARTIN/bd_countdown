// Countdown logic
const countdownElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const targetDate = new Date('September 21, 2024 00:00:00').getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  // Calculate days, hours, minutes, seconds remaining
  const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  // Update the DOM
  countdownElement.innerText = daysRemaining;
  hoursElement.innerText = hoursRemaining < 10 ? '0' + hoursRemaining : hoursRemaining;
  minutesElement.innerText = minutesRemaining < 10 ? '0' + minutesRemaining : minutesRemaining;
  secondsElement.innerText = secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining;
}

// Initial call
updateCountdown();

// Update every 1 second
setInterval(updateCountdown, 1000);
