// My projects section actions start
const left_btn = document.querySelector(".mypojects_left_btn"),
    right_btn = document.querySelector(".mypojects_right_btn"),
    change_box = document.querySelector(".myprojects_change_items");


const myprojects = [
    {
        "foto_1": "./image/card style (1).png",
        "foto_2": "./image/card style (2).png",
        "foto1_link": "./gucci Card/index.html",
        "foto2_link": "./h_navbar/homework.html",
        "text1": "Gucci Card",
        "text2": "Navbar and Cards"
    },
    {
        "foto_1": "./image/DC.png",
        "foto_2": "./image/kung fu panda.png",
        "foto1_link": "./gucci Card/index.html",
        "foto2_link": "./kung fu panda/index2.html",
        "text1": "DC Brand",
        "text2": "Kung Fu Panda"
    },
    {
        "foto_1": "./image/border style.png",
        "foto_2": "./image/card style (3).png",
        "foto1_link": "./border animation/border_animation.html",
        "foto2_link": "./phone advertaisment/homework.html",
        "text1": "Border Action",
        "text2": "Phone Advertaisment"
    }
]

let a = 1

right_btn.onclick=()=>{
    if(a<myprojects.length-1){
    a++;
    change_box.innerHTML= `
        <div class="myprojects_items items_h">
            <div class="myprojects_item">
                <img src="${myprojects[a].foto_1}" alt="myprojects image" class="myprojects_image image_h">
                <div class="myprojects_item_overlay"></div>
                <div class="myprojects_item_info">
                    <h4 class="foto1_name">
                        ${myprojects[a].text1}
                    </h4>
                    <a class="foto_1" href="${myprojects[a].foto1_link}">About my project</a>
                </div>
            </div>
        </div>
        <div class="myprojects_items items_w">
            <div class="myprojects_item">
                <img src="${myprojects[a].foto_2}" alt="myprojects image" class="myprojects_image image_w">
                <div class="myprojects_item_overlay"></div>
                <div class="myprojects_item_info">
                    <h4 class="foto2_name">
                        ${myprojects[a].text2}
                    </h4>
                    <a class="foto_2" href="${myprojects[a].foto2_link}">About my project</a>
                </div>
            </div>
        </div>`
    }
    else if(a==myprojects.length-1) {
    a=0
    change_box.innerHTML= `
        <div class="myprojects_items items_h">
            <div class="myprojects_item">
                <img src="${myprojects[a].foto_1}" alt="myprojects image" class="myprojects_image image_h">
                <div class="myprojects_item_overlay"></div>
                <div class="myprojects_item_info">
                    <h4 class="foto1_name">
                        ${myprojects[a].text1}
                    </h4>
                    <a class="foto_1" href="${myprojects[a].foto1_link}">About my project</a>
                </div>
            </div>
        </div>
        <div class="myprojects_items items_w">
            <div class="myprojects_item">
                <img src="${myprojects[a].foto_2}" alt="myprojects image" class="myprojects_image image_w">
                <div class="myprojects_item_overlay"></div>
                <div class="myprojects_item_info">
                    <h4 class="foto2_name">
                        ${myprojects[a].text2}
                    </h4>
                    <a class="foto_2" href="${myprojects[a].foto2_link}">About my project</a>
                </div>
            </div>
        </div>`
    }
}

left_btn.onclick=()=>{
    if(a>0){
        a--
        change_box.innerHTML= `
            <div class="myprojects_items items_h">
                <div class="myprojects_item">
                    <img src="${myprojects[a].foto_1}" alt="myprojects image" class="myprojects_image image_h">
                    <div class="myprojects_item_overlay"></div>
                    <div class="myprojects_item_info">
                        <h4 class="foto1_name">
                            ${myprojects[a].text1}
                        </h4>
                        <a class="foto_1" href="${myprojects[a].foto1_link}">About my project</a>
                    </div>
                </div>
            </div>
            <div class="myprojects_items items_w">
                <div class="myprojects_item">
                    <img src="${myprojects[a].foto_2}" alt="myprojects image" class="myprojects_image image_w">
                    <div class="myprojects_item_overlay"></div>
                    <div class="myprojects_item_info">
                        <h4 class="foto2_name">
                            ${myprojects[a].text2}
                        </h4>
                        <a class="foto_2" href="${myprojects[a].foto2_link}">About my project</a>
                    </div>
                </div>
            </div>`
    }
    else if(a==0) {
        a=myprojects.length-1
        change_box.innerHTML= `
            <div class="myprojects_items items_h">
                <div class="myprojects_item">
                    <img src="${myprojects[a].foto_1}" alt="myprojects image" class="myprojects_image image_h">
                    <div class="myprojects_item_overlay"></div>
                    <div class="myprojects_item_info">
                        <h4 class="foto1_name">
                            ${myprojects[a].text1}
                        </h4>
                        <a class="foto_1" href="${myprojects[a].foto1_link}">About my project</a>
                    </div>
                </div>
            </div>
            <div class="myprojects_items items_w">
                <div class="myprojects_item">
                    <img src="${myprojects[a].foto_2}" alt="myprojects image" class="myprojects_image image_w">
                    <div class="myprojects_item_overlay"></div>
                    <div class="myprojects_item_info">
                        <h4 class="foto2_name">
                            ${myprojects[a].text2}
                        </h4>
                        <a class="foto_2" href="${myprojects[a].foto2_link}">About my project</a>
                    </div>
                </div>
            </div>`
    }
}
// My projects section actions end

// Theme button function start
// const section_info = document.querySelector(".section_info"),
//     main_header = document.querySelector(".main_header"),
//     theme_btn = document.querySelector(".theme_btn"),
//     section_subtitle = document.querySelector(".section_subtitle"),
//     menu = document.querySelector(".menu"),
//     span = document.menu.querySelector("i");
// let tbtn_n1 = 1;
// theme_btn.onclick=()=>{
//     tbtn_n1++;
//     if(tbtn_n1%2==0){
//         document.querySelector("body").style.backgroundColor = "#31363F"
//         theme_btn.innerHTML=
//         `
//             <i class="fa-regular fa-sun"></i>
//         `

        // main_header.style.cssText=
        // `
        //     background-color: rgba(121,121,121, 0.618);
        // `
        // theme_btn.textContent = "sun";
        // theme_btn.style.cssText= 
        // `
        //     background-color: #FFD805;
        //     color: #000000;
        //     border: none;
        //     filter: drop-shadow(0px 0px 10px);
        // `
        // section_subtitle.style.cssText=
        // `
        //     color: white;
        // `
        // span.style.cssText=
        // `
        //     background-color: white;
        // `;
    // }
    // else{
        // document.querySelector("body").style.backgroundColor = "white"
        // main_header.style.cssText+=
        // `
        //     background-color: rgba(255,255,255, 0.618);
        // `
        // theme_btn.textContent = "moon"
        // theme_btn.style.cssText= 
        // `
        //     background-color: #000000;
        //     color: #FFD805;
        //     border: none;
        //     filter: drop-shadow(0px 0px 10px);
        // `
        // section_subtitle.style.cssText+=
        // `
        //     color: #797979;
        // `
        // span.style.cssText+=
        // `
        //     background-color: black;
        // `;
//     }
// }
// console.log(tbtn_n1);

// Theme button function end

// Partners section

// const pxs = [1100, 829, 490, 150, -120, 490];

// const ok = document.querySelector(".ok");
// const cards_box = document.querySelector(".cards_box");
// let i=0;
// ok.onclick=()=>{
//     i++;
//     if(i>5){
//         i=0;
//     }
//     for(let n=1;n<7;n++){
//         i++;
//         if(i>5){
//             i=0;
//         }
//         if(i==0 || i==5 || i==4){
//             document.querySelector(`.n${n}`).style.cssText=
//             `
//                 opacity: 0;
//                 right: ${pxs[i]}px;
//             `
//         }
//         else if(i==1 || i==2 || i==3){
//             document.querySelector(`.n${n}`).style.cssText=
//             `
//                 right: ${pxs[i]}px;
//                 opacity: 1;
//             `
//         }
//     }
// }

// const no = document.querySelector(".no");


const img_items = [
    {
        "fullname":"Jo'raqulov Abror",
        "info":"Future frontend developer and wife's slave",
        "img":"./image/Abror.jpg",
    },
    {
        "fullname":"Xaydarov Samandar",
        "info":"Future frontend developer.",
        "img":"./image/Samandar.jpg",
    },
    {
        "fullname":"Xudoyqulov Zafar",
        "info":"Future fullstack developer.",
        "img":"./image/Zafar.jpg",
    },
    {
        "fullname":"Javohir",
        "info":"Future marketing manager.",
        "img":"./image/Javohir.jpg",
    },
    {
        "fullname":"O'talov Jasur",
        "info":"Future frontend developer and senior programmer.",
        "img":"./image/Jasur.jpg",
    },
    {
        "fullname":"Rahimov Tohir",
        "info":"Future web developer or ...",
        "img":"./image/Tohir.jpg",
    },
]
const l_btn = document.querySelector("#partnerscard_lbtn");
const r_btn = document.querySelector("#partnerscard_rbtn");
const items_l = document.querySelector(".partners_card_l");
const items_r = document.querySelector(".partners_card_r");
const items_m = document.querySelector(".partners_card_m");
let l = 0;
let m = 5;
let r = 4;


r_btn.onclick=()=>{
    if(l<img_items.length-1){
        l++;
        items_l.innerHTML=
        `
            <div class="partners_img">
                <img src="${img_items[l].img}" alt="img">
            </div>
            <div class="partners_items">
                <h4>${img_items[l].fullname}</h4>
                <h5>${img_items[l].info}</h5>
                <div class="partners_rate">
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star"></i>
                </div> 
            </div>
        `             
        }
        else if(l==img_items.length-1){
            l=0;
            items_l.innerHTML=
            `
                <div class="partners_img">
                <img src="${img_items[l].img}" alt="img">
                </div>
                <div class="partners_items">
                    <h4>${img_items[l].fullname}</h4>
                    <h5>${img_items[l].info}</h5>
                    <div class="partners_rate">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star"></i>
                    </div> 
                </div>
            `   
        }
    if(m<img_items.length-1){
        m++;
        items_m.innerHTML=
        `
            <div class="partners_img">
                <img src="${img_items[m].img}" alt="img">
            </div>
            <div class="partners_items">
                <h4>${img_items[m].fullname}</h4>
                <h5>${img_items[m].info}</h5>
                <div class="partners_rate">
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star"></i>
                </div> 
            </div>
        `             
        }
        else if(m==img_items.length-1){
            m=0;
            items_m.innerHTML=
            `
                <div class="partners_img">
                <img src="${img_items[m].img}" alt="img">
                </div>
                <div class="partners_items">
                    <h4>${img_items[m].fullname}</h4>
                    <h5>${img_items[m].info}</h5>
                    <div class="partners_rate">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star"></i>
                    </div> 
                </div>
            `   
        }
    if(r<img_items.length-1){
        r++;
        items_r.innerHTML=
        `
            <div class="partners_img">
                <img src="${img_items[r].img}" alt="img">
            </div>
            <div class="partners_items">
                <h4>${img_items[r].fullname}</h4>
                <h5>${img_items[r].info}</h5>
                <div class="partners_rate">
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star active"></i>
                    <i class="fas fa-star"></i>
                </div> 
            </div>
        `             
        }
        else if(r==img_items.length-1){
            r=0;
            items_r.innerHTML=
            `
                <div class="partners_img">
                <img src="${img_items[r].img}" alt="img">
                </div>
                <div class="partners_items">
                    <h4>${img_items[r].fullname}</h4>
                    <h5>${img_items[r].info}</h5>
                    <div class="partners_rate">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star"></i>
                    </div> 
                </div>
            `   
        }
}

l_btn.onclick=()=>{
    if(l>0){
        l--;
        items_l.innerHTML=
            `
                <div class="partners_img">
                    <img src="${img_items[l].img}" alt="Jasur">
                </div>
                <div class="partners_items">
                    <h4>${img_items[l].fullname}</h4>
                    <h5>${img_items[l].info}</h5>
                    <div class="partners_rate">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star"></i>
                    </div> 
                </div>
            `
        }
        else if(l==0){
            l=img_items.length-1;
            items_l.innerHTML=
            `
                <div class="partners_img">
                    <img src="${img_items[l].img}" alt="Jasur">
                </div>
                <div class="partners_items">
                    <h4>${img_items[l].fullname}</h4>
                    <h5>${img_items[l].info}</h5>
                    <div class="partners_rate">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star"></i>
                    </div> 
                </div>
            `  
        }
    if(m>0){
        m--;
        items_m.innerHTML=
            `
                <div class="partners_img">
                    <img src="${img_items[m].img}" alt="Jasur">
                </div>
                <div class="partners_items">
                    <h4>${img_items[m].fullname}</h4>
                    <h5>${img_items[m].info}</h5>
                    <div class="partners_rate">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star"></i>
                    </div> 
                </div>
            `
        }
        else if(m==0){
            m=img_items.length-1;
            items_m.innerHTML=
            `
                <div class="partners_img">
                    <img src="${img_items[m].img}" alt="Jasur">
                </div>
                <div class="partners_items">
                    <h4>${img_items[m].fullname}</h4>
                    <h5>${img_items[m].info}</h5>
                    <div class="partners_rate">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star"></i>
                    </div> 
                </div>
            `  
        }
        if(r>0){
            r--;
            items_r.innerHTML=
                `
                    <div class="partners_img">
                        <img src="${img_items[r].img}" alt="Jasur">
                    </div>
                    <div class="partners_items">
                        <h4>${img_items[r].fullname}</h4>
                        <h5>${img_items[r].info}</h5>
                        <div class="partners_rate">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                        </div> 
                    </div>
                `
            }
            else if(r==0){
                r=img_items.length-1;
                items_r.innerHTML=
                `
                    <div class="partners_img">
                        <img src="${img_items[r].img}" alt="Jasur">
                    </div>
                    <div class="partners_items">
                        <h4>${img_items[r].fullname}</h4>
                        <h5>${img_items[r].info}</h5>
                        <div class="partners_rate">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                        </div> 
                    </div>
                `  
            }
}



// responsiv menu button
const main_navigation_items = document.querySelectorAll("li"),
    close_btn = document.querySelector(".close");

menu.addEventListener("click", ()=>{
    main_navigation_items.style.cssText+=`
        transform: translateY(0);
        display: block;

    `
});
close_btn.addEventListener("click", ()=>{
    main_navigation_items.style.transform="translateY(-200%)";
});
// /responsiv menu button



document.onscroll=()=>{
    if(tbtn_n1%2==0){
        main_header.style.backgroundColor="rgba(121,121,121, 0.618)";
    }else{
        main_header.style.backgroundColor="rgba(255,255,255, 0.618)";
    }
}
document.onscrollend=()=>{
    if(tbtn_n1%2==0){
        main_header.style.backgroundColor="rgb(121, 121, 121)";
    }else{
        main_header.style.backgroundColor="rgb(255, 255, 255)";
    }
}

// Add active class to the current button (highlight it)
const header = document.querySelector(".main_navigation_items");
const ahrefs = header.querySelectorAll(".main_navigation_item");
for (let i = 0; i < ahrefs.length; i++) {
    ahrefs[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}