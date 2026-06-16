
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    let currentIndex = 0;

    function showImage(index){ 
      lightbox.style.display = "flex";
      lightboxImg.src = images[index].src;
    }

    images.forEach((img , index) => {
      img.addEventListener( "click" , () => {
        currentIndex = index;
        showImage(currentIndex);
      });
    });

    nextBtn.addEventListener("click" , () => {
      currentIndex++;

      if(currentIndex >= images.length){
        currentIndex = 0;
      }

      showImage(currentIndex);
    });

    prevBtn.addEventListener("click" , () => {
      currentIndex--;

      if(currentIndex < 0){
        currentIndex = images.length - 1;
      }

      showImage(currentIndex);
    });

    closeBtn.addEventListener("click" , () => {
      lightbox.style.display = "none";
    });

    lightbox.addEventListener("click" , (e) => {
      if(e.target === lightbox){
        lightbox.style.display = "none";
      }
    });
 