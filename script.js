const photoSlides = [
  { src: "images/photo1.jpg", title: "Team Photo", meta: "Welverdiend • Season" },
  { src: "images/photo2.jpg", title: "Match Day", meta: "Players & Supporters" },
  { src: "images/photo3.jpg", title: "Training", meta: "Fitness & Drills" }
];

const $ = (id) => document.getElementById(id);

let slideIndex = 0;
let slideTimer = null;

function showSlide(i){
  if(!photoSlides.length) return;

  slideIndex = (i + photoSlides.length) % photoSlides.length;
  const s = photoSlides[slideIndex];

  const img = $("slideImage");
  if(img) img.src = s.src;

  const title = $("slideTitle");
  if(title) title.textContent = s.title || "Photo";

  const meta = $("slideMeta");
  if(meta) meta.textContent = s.meta || "";
}

function startAutoSlides(){
  if(slideTimer) clearInterval(slideTimer);
  slideTimer = setInterval(()=> showSlide(slideIndex + 1), 4500);
}

function init(){
  const y = $("yearNow");
  if(y) y.textContent = new Date().getFullYear();

  const prev = $("prevPhoto");
  const next = $("nextPhoto");

  if(prev) prev.addEventListener("click", ()=> { showSlide(slideIndex - 1); startAutoSlides(); });
  if(next) next.addEventListener("click", ()=> { showSlide(slideIndex + 1); startAutoSlides(); });

  showSlide(0);
  startAutoSlides();
}

document.addEventListener("DOMContentLoaded", init);
