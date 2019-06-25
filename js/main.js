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


const items = document.querySelectorAll('.resume li');
const items2 = document.querySelectorAll('.skills li');
const items3 = document.querySelectorAll('.certificates .certificate');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>{
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });
  items2.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });
  items3.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

}

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
