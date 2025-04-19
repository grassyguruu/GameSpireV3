function getRandomGreeting() {
  var greetings = [
    "You bum",
    "Shoutout to the GameSpire Dev Team",
    "Mission failed, we will get them next time",
    "NUKE INCOMING!",
    "SIGMA",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
