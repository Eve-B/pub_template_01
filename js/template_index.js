function blockLinks() {
   const emptyLinks = document.querySelectorAll('a[href = "#"]');
   for (const a of emptyLinks) {
      a.addEventListener("click", function (e) {
         e.preventDefault();
      });
   }
}

// mobile menu control
document.querySelector(".close-btn").addEventListener("click", function () {
   document.querySelector("nav").classList.remove("active");
});

document.querySelector(".mo-menu-trigger").addEventListener("click", function () {
   document.querySelector("nav").classList.add("active");
});

//
function removeHover(list) {
   for (const item of list) {
      item.classList.remove("hover");
   }
}

//
function scrolling() {
   const gnb = document.querySelectorAll(".gnb a");
   const section = document.querySelectorAll("section");
   let i = 0;
   for (i; i < gnb.length - 1; i++) {
      const target = section[i + 1];
      gnb[i].addEventListener("click", function () {
         const header = document.querySelector("header");
         const point = target.offsetTop - header.offsetHeight;
         window.scrollTo({
            top: point,
            behavior: "smooth",
         });
      });
   }
}

//MADE WITH LOVE

function changeGallery() {
   const gallerySelectors = document.querySelectorAll(".gallery-list li a");

   for (const selector of gallerySelectors) {
      selector.addEventListener("mouseover", function () {
         removeHover(gallerySelectors);
         this.classList.add("hover");
      });

      selector.addEventListener("click", function () {
         const target = this.innerText.toLowerCase();
         fetch(`data/${target}`).then(function (response) {
            response.text().then(function (text) {
               document.querySelector(".img-gallery").innerHTML = text;
            });
         });
      });
   }
}

//
function init() {
   changeGallery();
   blockLinks();
   scrolling();
}

init();
