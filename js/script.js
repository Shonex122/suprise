let container = document.getElementById("container");

container.innerHTML =
  "<button id=messageButton onclick='HNM()'> Layomi, click Me!</button>";

function HNM() {
  container.innerHTML +=
    "<h1> 💕 'My love, today you’ve shown me once again that you are the most amazing person I know. Your courage, strength, and intelligence are unmatched. Seeing you in that graduation gown fills my heart with so much joy and pride. Congratulations on your convocation. I love you endlessly!' </h1> ";
  document.getElementById("messageButton").disabled = true;
}
