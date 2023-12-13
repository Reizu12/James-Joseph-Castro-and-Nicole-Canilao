document.addEventListener("DOMContentLoaded", function () {
    
    var heroCaption = document.getElementById("heroCaption");

    
    heroCaption.style.opacity = 0;

    
    function fadeIn(element, duration) {
        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            element.style.opacity = progress / duration;
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    
    fadeIn(heroCaption, 3000); 
});

document.addEventListener("DOMContentLoaded", function () {
   
    var aboutMe = document.querySelector(".about-me");

    
    function fadeIn() {
        aboutMe.style.opacity = 1;
    }
    setTimeout(fadeIn, 1000); 
});


document.addEventListener("DOMContentLoaded", function () {
   
    var navigation = document.getElementById("animationLeft");

  
    navigation.classList.add("slide-in");

   
    function removeSlideInClass() {
        navigation.classList.remove("slide-in");
    }

  
    navigation.addEventListener("animationend", removeSlideInClass);
});

document.addEventListener("DOMContentLoaded", function () {
   
    var navigation = document.getElementById("animationRight");

   
    navigation.classList.add("slide-in-right");

   
    function removeSlideInClass() {
        navigation.classList.remove("slide-in-right");
    }

  
    navigation.addEventListener("animationend", removeSlideInClass);
});


document.addEventListener("DOMContentLoaded", function () {
  
    var navigation = document.getElementById("navigation");

   
     navigation.classList.add("slide-down");

 
     function removeSlideDownClass() {
         navigation.classList.remove("slide-down");
     }
 
     navigation.addEventListener("animationend", removeSlideDownClass);
});

    document.addEventListener("DOMContentLoaded", function () {
        const bannerJames = document.getElementById("bannerJames");
        const bannerNicole = document.getElementById("bannerNicole");

        window.addEventListener("scroll", function () {
            const bannerJamesPosition = bannerJames.getBoundingClientRect().top;
            const bannerNicolePosition = bannerNicole.getBoundingClientRect().top;

            const screenHeight = window.innerHeight;
            
            if (bannerJamesPosition < screenHeight) {
                bannerJames.classList.add("visible");
            } else {
                bannerJames.classList.remove("visible");
            }

            if (bannerNicolePosition < screenHeight) {
                bannerNicole.classList.add("visible");
            } else {
                bannerNicole.classList.remove("visible");
            }

            
        });
    });
