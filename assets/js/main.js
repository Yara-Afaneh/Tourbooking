// start home page js 
const navbar=document.querySelector('.navbar-section');
const first=document.querySelector('.first-section')
const load=document.querySelector('.loading');
const scrolltotop=document.querySelector('.scroll-top');
const scrollsection=document.querySelector('.scroll-section');
let username=document.querySelector('#name');
let email=document.querySelector('#email');
let submit=document.querySelector('.submit-btn');
let popularsection=document.querySelector('.popular-category');
const searchresult=document.querySelector('#search-content1');
const searchresult2=document.querySelector('#search-content2');
const clickbutton=document.querySelector('.click1');
const clickbutton2=document.querySelector('.click2');
let isnameTrue=false;
let isemailTrue=false;
const popCat1=document.querySelector('.cat1');
const popCat2=document.querySelector('.cat2');
const popCat3=document.querySelector('.cat3');
const popCat4=document.querySelector('.cat4');
const popCat5=document.querySelector('.popular-content');
const aboutsection=document.querySelector('.about');
const aboutimg=document.querySelector('.about-img');
const aboutimg2=document.querySelector('.about-img2');
const aboutinfo=document.querySelector('.about-info');
const aboutinfo2=document.querySelector('.about-info-yellow');
const aboutinfo3=document.querySelector('.about-info-special');
const aboutpara=document.querySelector('.about-content-para');
const acheivment=document.querySelector('.acheivments');



// start home page 

window.addEventListener('scroll', function(){
    if (window.scrollY>=first.offsetTop){
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.right = '0';
    } else {
        navbar.style.position = 'static'; 
    }

   

    if (window.scrollY>=scrollsection.offsetTop){
        scrolltotop.classList.remove('opacity-0', 'invisible');
        
    } else {
        scrolltotop.classList.add('opacity-0','invisible'); 
    }

    if (window.scrollY>=scrollsection.offsetTop){
        popCat1.style.animation = 'movecat1 1s reverse';
        popCat2.style.animation = 'movecat2 1s reverse';
        popCat3.style.animation = 'movecat3 1s reverse';
        popCat4.style.animation = 'movecat4 1s reverse';
        popCat5.style.animation = 'scale 2s forwards';

        
    } else {
         popCat1.style.animation = 'none';
         popCat2.style.animation = 'none';
         popCat3.style.animation = 'none';
         popCat4.style.animation = 'none';
         popCat5.style.animation = 'none';
    }


    if (window.scrollY>=aboutsection.offsetTop){
        aboutimg.style.animation = 'moveabout 1s reverse';
        aboutimg2.style.animation = 'moveabout2 1s reverse';
        aboutinfo.style.animation = 'moveabout3 1s reverse';
        aboutinfo2.style.animation = 'moveabout3 1s reverse';
        aboutinfo3.style.animation = 'moveabout4 1s reverse';
        aboutpara.style.animation = 'moveabout5 1s reverse';
    

        
    } else {
         aboutimg.style.animation = 'none';
         aboutimg2.style.animation = 'none';
         aboutinfo.style.animation = 'none';
         aboutinfo2.style.animation = 'none';
         aboutinfo3.style.animation = 'none';
         aboutpara.style.animation = 'none';
        
    }

})

window.addEventListener('scroll', function(){
    if (window.scrollY>=acheivment.offsetTop){
        animateValue('id', 0, 28, 1000);
        animateValue('id1', 0, 13, 1000);
        animateValue('id2', 0, 68, 1000);
         animateValue('id3', 0, 10, 1000);
    } else {
        animateValue(none); 
    }
})




window.addEventListener('load', function(){
    setTimeout(function(){
        load.classList.add('opacity-0','invisible');
        document.body.style.overflow = 'auto'
    },2000)
})

scrolltotop.addEventListener('click', function(){
    window.scroll({
       top:0,
       behavior:"smooth"
    })
})

const images = ["assets/img/image-1-about-home-4.jpg", "assets/img/image-banner-01.jpg"];
const interval = 4000; // 4 seconds

let currentIndex = 0; // Start with the first image

// Function to update the image source
function switchImage() {
  const imageElement = document.getElementById("header-img");
  imageElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length; // Loop through images
}

// Set an interval to switch images
setInterval(switchImage, interval);


// start contact page (regex)
window.addEventListener("keyup", function(){
    let pattern =/^[A-Z][a-z]{2,20}$/;
      if(pattern.test(username.value)){
        if(username.classList.contains("is-invalid")){
           username.classList.remove("is-invalid");
           username.classList.add("is-valid");
        }

        username.classList.add("is-valid");
        isnameTrue=true;
        
    }else{
        if(username.classList.contains("is-valid")){
        username.classList.remove("is-valid");
        username.classList.add("is-invalid");
     }

     username.classList.add("is-invalid");
     isnameTrue=false;
    }

  
});
window.addEventListener("keyup", function(){
    let pattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(pattern.test(email.value)){  
          if(email.classList.contains("is-invalid")){
           email.classList.remove("is-invalid");
           email.classList.add("is-valid");
     }

        email.classList.add("is-valid");
        isemailTrue=true;
        
    }else{
        if(email.classList.contains("is-valid")){
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
     }

     email.classList.add("is-invalid");
     isemailTrue=false;
    }

    if (isemailTrue && isnameTrue) {
        submit.removeAttribute("disabled");
        submit.style.backgroundColor = '#fd4c5c';
        submit.style.color = 'white';

    } else {
        submit.setAttribute("disabled", "true");
    }

});



    function animateValue(id, start, end, duration) {
        if (start === end) return;
        var range = end - start;
        var current = start;
        var increment = end > start? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementById(id);
        var timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current+'k';
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
   


    $(function() {
        // Owl Carousel
        var owl = $(".client-owl");
        owl.owlCarousel({
          items: 3,
          margin: 10,
          loop: true,
          nav: true,
          autoplay:true,
          autoplayTimeout:3000,
          responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
         
        });
      });

      $(function() {
        // Owl Carousel
        var owl2 = $(".popular");
        owl2.owlCarousel({
            responsiveClass:true,
          items: 4,
          margin: 10,
          loop: true,
          nav: true,
          responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    
        });
      });


     
function nextpage1() {
        searchresult2.style.display = "none";
        searchresult.style.display = "block";
        clickbutton.classList.add("special-button")
        clickbutton2.classList.remove("special-button")
            

}
   

    function nextpage2() {
       
            searchresult.style.display = "none";
            searchresult2.style.display = "block";
            clickbutton2.classList.add("special-button")
            clickbutton.classList.remove("special-button")
     
    }



      


