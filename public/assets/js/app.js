//============================
// Fade Animation
//============================
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    
    // Verificamos se a navbar realmente existe antes de tentar mudar a classe
    if (navbar) {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade-up").forEach((el)=>{

    observer.observe(el);

});

//============================
// Navbar Scroll
//============================

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});