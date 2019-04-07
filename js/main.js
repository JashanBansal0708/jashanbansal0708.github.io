window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      var element = document.querySelector('#header');
      element.classList.add("myStyle");
    } else {
      var element = document.querySelector('#header');
      element.classList.remove("myStyle");
    }
  });
  

window.addEventListener('scroll', function() {
if (window.scrollY > 300) {
        var element = document.querySelector('#about');
        element.classList.remove("dark");
    } else {
        var element = document.querySelector('#about');
        element.classList.add("dark");
    }
});
