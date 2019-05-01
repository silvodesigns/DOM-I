const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navi =  document.querySelectorAll("nav a");
let navigation = Array.from(navi);
navigation.forEach(function(item,index){

  item.textContent = siteContent["nav"]["nav-item-"+`${index+1}`];
  console.log(index);

});

let cta_h1 =  document.querySelector('.cta h1'); 
let cta_button =  document.querySelector('.cta button'); 
let cta_img =  document.querySelector('.cta img'); 

cta_h1.textContent = siteContent["cta"]["h1"];
cta_button.textContent = siteContent["cta"]["button"];
cta_img.src = siteContent["cta"]["img-src"];


let textContent_h4 =  document.querySelectorAll('.main-content .top-content h4'); 
let textContent_p =  document.querySelectorAll('.main-content .top-content  p'); 
let middleImage = document.querySelector(".middle-img");
let bottomContent_h4 = document.querySelectorAll(".bottom-content h4");
let bottomContent_p = document.querySelectorAll(".bottom-content p");

textContent_h4[0].textContent =siteContent["main-content"]["features-h4"];
textContent_p[0].textContent = siteContent["main-content"]["features-content"]; 
textContent_h4[1].textContent =siteContent["main-content"]["about-h4"];
textContent_p[1].textContent = siteContent["main-content"]["about-content"]; 

middleImage.src = siteContent["main-content"]["middle-img-src"];

bottomContent_h4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent_h4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContent_h4[2].textContent = siteContent["main-content"]["vision-h4"];


bottomContent_p[0].textContent = siteContent["main-content"]["services-content"];
bottomContent_p[1].textContent = siteContent["main-content"]["product-content"];
bottomContent_p[2].textContent = siteContent["main-content"]["vision-content"];

let contact_h4 = document.querySelector('.contact h4');
let contact_p = document.querySelectorAll('.contact p');

contact_h4.textContent = siteContent["contact"]["contact-h4"];

contact_p[0].textContent = siteContent["contact"]["address"];
contact_p[1].textContent = siteContent["contact"]["phone"];
contact_p[2].textContent = siteContent["contact"]["email"];

let footer_p = document.querySelector("footer p");

footer_p.textContent = siteContent["footer"]["copyright"];