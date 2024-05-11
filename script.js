//light+dark mode toggle 
function modetoggle() {
    var element = document.body;
    if (element.classList.contains("dark-mode")) {
      element.classList.remove("dark-mode");
      element.classList.toggle("light-mode");
    } else {
      element.classList.remove("light-mode");
      element.classList.toggle("dark-mode");
    };

 }

//home button
function home() {
    window.location.href = "index.html";
}