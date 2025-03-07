const playersWrapper = document.getElementById("top10");
playersWrapper.childNodes.forEach((child) => {
  child.addEventListener("click", (e) => {
    localStorage.setItem("userID", e.target.className);
    window.location.href = "/pages/results.html";
  });
});
