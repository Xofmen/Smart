let link1 = document.querySelector(".link_nav1");
let link2 = document.querySelector(".link_nav2");
let link3 = document.querySelector(".link_nav3");
let link4 = document.querySelector(".link_nav4");
let link5 = document.querySelector(".link_nav5");
let header = document.querySelector(".header");
let section_help = document.querySelector(".section_help_content");



let okno = document.querySelector(".okno");
let btn = document.querySelector(".header_content_txt_button");
let krest = document.querySelector(".krest");
let burger = document.querySelector(".burger");
let list_burger = document.querySelector(".list_burger");
let clouse = document.querySelector(".clouse");
let home_btn1 = document.querySelector(".home_btn1"); 
let home_btn2 = document.querySelector(".home_btn2");
let project_box2 = document.querySelector(".project_box2");
let div2 = document.querySelector(".div2");
let link = document.querySelector("link");



burger.onclick = () => {
    list_burger.style.transform = "translateY(0)";
    burger.style.display = "none";
    clouse.style.display = "block";
};
clouse.onclick = () => {
    list_burger.style.transform = "translateY(-100%)";
    clouse.style.display = "none";
    burger.style.display = "block";
};

home_btn2.onclick = () => {
    project_box2.style.display = "flex";
}
home_btn1.onclick = () => {
    project_box2.style.display = "none";
}

div2.onclick = () => {
    if (link.getAttribute("href") == "./css/main.css") {
        link.setAttribute("href", "./css/black.css");
      } else {
        link.setAttribute("href", "./css/main.css");
      }
}





// function header_src(event){
//     event.preventDefault()
//     header.scrollIntoView({
//         block : "center",
//         behavior:"smooth",
//         inline : "end"
//     })
// }
// function section_help_src(event){
//     event.preventDefault()
//     section_help_content.scrollIntoView({
//         block : "center",
//         behavior:"smooth",
//         inline : "end"
//     })
// }


// link1.addEventListener('click',header_src)
// link2.addEventListener('click',section_help_src)
