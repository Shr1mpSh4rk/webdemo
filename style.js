document.getElementById("btnBlue").addEventListener("click", function(){
  document.body.style.backgroundColor = "#87CEFA";
});
document.getElementById("btnRed").addEventListener("click", function(){
  document.body.style.backgroundColor = "#FF4500";
});
document.getElementById("btnReset").addEventListener("click", function(){
  document.body.style.backgroundColor = "white";
});

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Cập nhật slide tiếp theo sau mỗi khoảng thời gian
setInterval(nextSlide, 1000);





