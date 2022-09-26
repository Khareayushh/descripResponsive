
let myDatato = JSON.parse(localStorage.getItem('myobj'));

console.log(myDatato);
function getdataLocal(){
    let itemsHTML=""; 
    let mineobject = JSON.parse(localStorage.getItem("myobj"));
    // console.log(mineobject);
    
        itemsHTML+=`
            <div class="history1">
                <p>Mens > Clothing > <span>Sweatshirts & Hoodies</span></p>
            </div>
            <div class="left">
                
                <div class="small-image-box">
                    <!-- <div class="small-image-box"> -->
                        <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
                        <!-- <div class="small-image"></div> -->
                    <!-- </div> -->
                </div>
                <div class="big-image">
                    <img src="${mineobject.image}" alt="">
                </div>
            </div>
            <div class="right">
                <div class="history2">
                    <p>Mens > Clothing > Sweatshirts & Hoodies</p>
                </div>
                <div class="product-name">
                    <p>${mineobject.title}</p>
                </div>
                <div class="price-and-review">
                    <div class="price">
                        <p class="new-price">₹<span>${mineobject.price}</span></p>
                        <p class="old-price">₹<span>1200</span></p>
                    </div>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <p><span>4.9</span> (69 reviews)</p>
                    </div>
                </div>
                <div class="size">
                    <p class="heading">Select Size:</p>
                    <div class="size-box">
                        <div class="select-size"><span class="size-1">XS</span></div>
                        <div class="select-size"><span class="size-2">S</span></div>
                        <div class="select-size"><span class="size-3">M</span></div>
                        <div class="select-size"><span class="size-4">L</span></div>
                        <div class="select-size"><span class="size-5">XL</span></div>
                        <div class="select-size"><span class="size-6">XXL</span></div>
                    </div>
                </div>
                <div class="color">
                    <p class="heading">Select Color:</p>
                    <div class="color-box">
                        <div class="select-color color1"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color2"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color3"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color4"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color5"><i class="fas fa-check tick"></i></div>
                        <div class="select-color color6"><i class="fas fa-check tick"></i></div>
                    </div>
                </div>
                <div class="quantity">
                    <p class="heading">Quantity: </p>
                    <div class="q-box">
                        <div class="plus"><i class="fas fa-plus"></i></div>
                        <span class="q-value">1</span>
                        <div class="minus"><i class="fas fa-minus"></i></div>
                    </div>
                </div>
                <div class="promo-note">
                    <p><i class="fa-solid fa-tags"></i> Enjoy upto ₹300 off with Promo code: <span>#478294</span> Until 9/10/22</p>
                </div>
                <div class="btns">
                    <button class="btn btn-primary">
                        <p>Add To Cart</p>
                        <i class="fas fa-bag-shopping"></i>
                    </button>
                    <button class="btn btn-secondary">
                        <p>Favroite</p>
                        <p class="fas fa-heart"></p>
                    </button>
                </div>
            </div>
        
        
        `
    document.querySelector(".product").innerHTML = itemsHTML;
};

getdataLocal();


let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let q_value = document.querySelector(".q-value");
let select_size = document.querySelectorAll(".select-size");

plus.addEventListener('click', () => {
    let x = parseInt(q_value.innerHTML);
    x += 1;
    let y = x.toString();
    q_value.innerHTML = y;
});

minus.addEventListener("click", () => {
    let x = parseInt(q_value.innerHTML);
    if(x > 1){
        x -= 1;
        let y = x.toString();
        q_value.innerHTML = y;
    }
});

let remove_size_active_effect = () => {
    Array.from(select_size).forEach((e) => {
        // console.log(e.classList)
        e.classList.remove("active");
    });
}

// console.log(select_size);
Array.from(select_size).forEach((e) => {
    e.addEventListener('click', () => {
        remove_size_active_effect();
        e.classList.toggle("active");
    });
});

let select_color = document.querySelectorAll(".select-color");
let select_tick = document.querySelectorAll(".tick");

// console.log(select_color.chil);
let remove_tick = () => {
    Array.from(select_tick).forEach((e) => {
        e.style.display = "none";
    });
}


Array.from(select_color).forEach((e) => {
    e.addEventListener('click', () => {
        remove_tick();
        e.children[0].style.display = "block";
    });
});

// let myDatato = JSON.parse(localStorage.getItem('myobj'));

// console.log(myDatato);
// function getdataLocal(){
//     let itemsHTML=""; 
//     let mineobject = JSON.parse(localStorage.getItem("myobj"));
//     // console.log(mineobject);
    
//         itemsHTML+=`
//             <div class="history1">
//                 <p>Mens > Clothing > <span>Sweatshirts & Hoodies</span></p>
//             </div>
//             <div class="left">
                
//                 <div class="small-image-box">
//                     <!-- <div class="small-image-box"> -->
//                         <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
//                         <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
//                         <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
//                         <div class="small-image"><img src="./description/description_assets/hoodie.remove.bg-removebg-preview.png" alt=""></div>
//                         <!-- <div class="small-image"></div> -->
//                     <!-- </div> -->
//                 </div>
//                 <div class="big-image">
//                     <img src="${mineobject.image}" alt="">
//                 </div>
//             </div>
//             <div class="right">
//                 <div class="history2">
//                     <p>Mens > Clothing > Sweatshirts & Hoodies</p>
//                 </div>
//                 <div class="product-name">
//                     <p>${mineobject.title}</p>
//                 </div>
//                 <div class="price-and-review">
//                     <div class="price">
//                         <p class="new-price">₹<span>${mineobject.price}</span></p>
//                         <p class="old-price">₹<span>1200</span></p>
//                     </div>
//                     <div class="rating">
//                         <i class="fas fa-star"></i>
//                         <p><span>4.9</span> (69 reviews)</p>
//                     </div>
//                 </div>
//                 <div class="size">
//                     <p class="heading">Select Size:</p>
//                     <div class="size-box">
//                         <div class="select-size"><span class="size-1">XS</span></div>
//                         <div class="select-size"><span class="size-2">S</span></div>
//                         <div class="select-size"><span class="size-3">M</span></div>
//                         <div class="select-size"><span class="size-4">L</span></div>
//                         <div class="select-size"><span class="size-5">XL</span></div>
//                         <div class="select-size"><span class="size-6">XXL</span></div>
//                     </div>
//                 </div>
//                 <div class="color">
//                     <p class="heading">Select Color:</p>
//                     <div class="color-box">
//                         <div class="select-color color1"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color2"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color3"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color4"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color5"><i class="fas fa-check tick"></i></div>
//                         <div class="select-color color6"><i class="fas fa-check tick"></i></div>
//                     </div>
//                 </div>
//                 <div class="quantity">
//                     <p class="heading">Quantity: </p>
//                     <div class="q-box">
//                         <div class="plus"><i class="fas fa-plus"></i></div>
//                         <span class="q-value">1</span>
//                         <div class="minus"><i class="fas fa-minus"></i></div>
//                     </div>
//                 </div>
//                 <div class="promo-note">
//                     <p><i class="fa-solid fa-tags"></i> Enjoy upto ₹300 off with Promo code: <span>#478294</span> Until 9/10/22</p>
//                 </div>
//                 <div class="btns">
//                     <button class="btn btn-primary">
//                         <p>Add To Cart</p>
//                         <i class="fas fa-bag-shopping"></i>
//                     </button>
//                     <button class="btn btn-secondary">
//                         <p>Favroite</p>
//                         <p class="fas fa-heart"></p>
//                     </button>
//                 </div>
//             </div>
        
        
//         `
//     document.querySelector(".product").innerHTML = itemsHTML;
// };

// getdataLocal();
