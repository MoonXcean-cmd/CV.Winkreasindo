// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({behavior:'smooth'});
  });
});

// reveal
const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
});

// counter
document.querySelectorAll('.counter').forEach(counter=>{
  let target=+counter.dataset.target;
  let count=0;
  let inc=target/80;
  function update(){
    if(count<target){
      count+=inc;
      counter.innerText=Math.ceil(count);
      setTimeout(update,30);
    }else{
      counter.innerText=target;
    }
  }
  update();
});

// Header scroll effect
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("navbar");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
  
});

window.addEventListener("load", function () {
  const opening = document.getElementById("opening");

  setTimeout(() => {
    opening.style.opacity = "0";
    opening.style.transition = "0.5s";

    setTimeout(() => {
      opening.style.display = "none";
    }, 500);

  }, 2000); // durasi tampil (2 detik)
});