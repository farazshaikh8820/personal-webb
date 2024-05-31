// Header toggle
 
let MenuBtn = document.getElementById("MenuBtn")

MenuBtn.addEventListener("click",function(e){
    document.querySelector("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("fa-xmark")
})


// Typing effect




// Active link state on scroll

// Get all link
let navlinks = document.querySelectorAll('nav ul li a')
// Get all sections
let section = document.querySelectorAll('section')
    console.log(section);
    window.addEventListener('scroll',function(){
        const scrollPos = window.scrollY + 20
        section.forEach(section => {
            if(scrollPos > section.offsetTop && scrollPos <(section.offsetTop + section.offsetHeight)){
                navlinks.forEach(link => {
                    link.classList.remove('active');
                    if(section.getAttribute('id')=== link.getAttribute('href').substring(1)){
                        link.classList.add('active')
                    }
                });
            }
        });
    });