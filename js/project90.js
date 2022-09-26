import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, getDoc, collection, onSnapshot, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";


//add your credentials from firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBC6D0aZol-1AT5hfy59chfBEvfWzF03NY",
  authDomain: "do-test-1a7d0.firebaseapp.com",
  projectId: "do-test-1a7d0",
  storageBucket: "do-test-1a7d0.appspot.com",
  messagingSenderId: "285727750796",
  appId: "1:285727750796:web:94ed0bb10f9c0e755299a9"
};

initializeApp(firebaseConfig);
const db = getFirestore();

const colRef = collection(db , 'main');

// getDocs(colRef)
//   .then((snapshot)=>{
//     console.log(snapshot.docs);
//   })

onSnapshot(colRef, (snapshot)=>{
  let cartItems=[];
  snapshot.docs.forEach((doc)=>{
    cartItems.push({ ...doc.data(), id: doc.id })
  })
  console.log(cartItems);
  generatecartItems(cartItems);
})

// import { collection, onSnapshot, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// import { db } from "../js/firebase";

// const colRef = collection(db, 'main');
// console.log(db);
// onSnapshot(colRef, (snapshot)=>{
//   let cartItems = [];
//   snapshot.docs.forEach((doc)=>{
//     console.log( ...doc.data());
//   })
  
//   // generateCartItems(cartItems);
// })

function addingtoDescription(itemId){
  let cartItem = doc(db, 'main', itemId);
  getDoc(cartItem)
    .then(function(doc){
      // console.log(doc.data());
      
      let obj = JSON.stringify(doc.data());
      // console.log(obj);
      localStorage.setItem("myobj", obj);
      
      let desreilobj = JSON.parse(localStorage.getItem("myobj"));
      console.log(desreilobj);

      location.href = "http://127.0.0.1:5500/description.html";
    })
}

function generatecartItems(cartItems){
  let itemsHTML="";
  cartItems.forEach(items=>{
    itemsHTML+=`
    <section class="swiper-slide arrival-cards clicktoCart" data-id="${items.id}">
      <div class="arrival-image">
          <img src="${items.image}" alt="">
      </div>
      <div class="arrivals-info">
          <h6>${items.title}</h6>
          <span>$${items.price}</span>
          <a href="#" class="product-cart">Add To Cart</a>
      </div>
      <div class="arrival-cards-2 arrival-cards-3 arrival-cards-4 arrival-cards-5">
          -$20
      </div>
    </section>
    `
  });

  document.querySelector(".getingdata").innerHTML=itemsHTML;
  createEventLinstner();
}

function createEventLinstner(){
  let clicktoDescription = document.querySelectorAll(".clicktoCart");

  clicktoDescription.forEach((button)=>{
    button.addEventListener("click", function(){
      addingtoDescription(button.dataset.id);
      console.log(button.dataset.id);
    })
  })
}

let icon;
let searchbox;
let searchicon;
let hamburger;
let sidenav;
let search1;
let line1;
let line2;
let line3;
let dropmenu;
let content;
let dropdown_icon;
dropdown_icon=document.querySelectorAll(".dropdown-icon");
dropmenu=document.getElementsByClassName("sidenav-item1");
for( let i=0 ; i < dropmenu.length ; i++)
{
       dropmenu[i].addEventListener("click",() =>
       {
       let result=dropmenu[i].classList.toggle("active6");
       if(result)
       {
          dropdown_icon[i].classList.add("active8");
       }
       else
       {
         dropdown_icon[i].classList.remove("active8");
       }
       })
}
 hamburger=document.querySelector(".hamburger");
line1=document.querySelector(".line-1");
line2=document.querySelector(".line-2");
line3=document.querySelector(".line-3")
sidenav=document.querySelector(".sidenav");
hamburger.addEventListener("click",xyz2);
function xyz()
{
    let x;
    x=searchbox.classList.toggle("active");
    
   
    
}
function xyz2()
{
    sidenav.classList.toggle("active3");
    line1.classList.toggle("active4");
    line2.classList.toggle("active5");
    line3.classList.toggle("active1");
}
function xyz3()
{
  
}
/*swiper js starts here*/
var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    // dynamicBullets: true,
    loop:true,
    grabCursor:true,
  },
});
/*swiper js for second slider */
var swiper = new Swiper(".home-slider2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    grabCursor:true
  },
});

var swiper = new Swiper(".card-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  autoplay:{
    delay:2000,
  }
  ,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 5,
     
    },
    768: {
      loop:true,
      slidesPerView: 2,
      spaceBetween: 20,
      
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
     
 
    },
  },
});


/*product-cards*/
var swiper = new Swiper(".arrivals-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});


// function generateCartItems(cartItems){
//   let itemsHTML = "";
//   cartItems.forEach(item => {
//     itemsHTML += `
//       <section class="swiper-slide arrival-cards">
//         <div class="arrival-image">
//             <img src="${item.image}" alt="">
//         </div>
//         <div class="arrivals-info">
//             <h6>${item.title}</h6>
//             <span>$${item.price}</span>
//             <a href="#" class="product-cart">Add To Cart</a>
//         </div>
//         <div class="arrival-cards-2 arrival-cards-3 arrival-cards-4 arrival-cards-5">
//             ${item.discount}
//         </div>
//       </section>
//     `
    
//   });
//   document.querySelector(".getingdata").innerHTML = itemsHTML;
// }