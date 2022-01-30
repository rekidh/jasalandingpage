
// function tulisan(){
//     let text =" ";
//   for( let i of tulisanSpand){
//       let t = text += i;
//       span.innerHTML[t]
//   }
// }

// Can also be included with a regular script tag


//  strings: [ "baik","murah","aman","amanah" ],
//   typeSpeed: 200,
//   loop:true
// });var typed = new Typed('.typed', {
 
// let width = window.screen.width;
// let depth = screen.pixelDepth;

// // console.log(width)
// let windowWidth = window.innerWidth
// window.addEventListener("resize", () => {
//   windowWidth = window.innerWidth
// })

// const btnMenu = document.getElementById("btn-menu")
// const menuYgHilang = document.getElementById("menu")
// const ss = btnMenu.childNodes[0]
// let i =0
// btnMenu.addEventListener("click",function(){
//     menuYgHilang.style.display="block";
//     ss.classList.remove('fa-bars');
//     ss.classList.toggle("fa-times");
//     console.log(ss)
//         i++
//         if(i%2 == 0){
//             menuYgHilang.style.display="none";
//             ss.classList.remove('fa-times');
//             ss.classList.toggle("fa-bars");
//         }
// })

// button for nav-content
// const navbarContent= document.getElementById("navbarContent") ;
// const mediaQuery = window.matchMedia("( max-width:780px )");          // media query fariabel and metode
// const burgerMenu = document.getElementById("burger");
// const fas = document.getElementById("fa-bars");


// burgerMenu.addEventListener("click",function(){
//   navbarContent.style.display="block";
//   fas.classList.remove('fa-bars');
//   fas.classList.toggle("fa-times");
//   console.log(fas);
//         i++
//         console.log(i)
//   if(i%2==0){
//     navbarContent.style.display="none";
//     fas.classList.remove("fa-times");
//     fas.classList.toggle('fa-bars');
//   }
  
// })

// let h1=document.querySelectorAll("h1")
// window.addEventListener("scroll",(event)=>{
//   let scroll = this.scrollY;
//   console.log(scroll)
//   if(scroll == 100){
//     h1[1].innerHTML="tes"
//   } else if(scroll==0){
// h1[1].innerHTML="yang"
//   }
  
// })

const navbarContent= document.getElementById("navbarContent") ;
const mediaQuery = window.matchMedia("( max-width:780px )");          // media query fariabel and metode
const burgerMenu = document.getElementById("burger");
const fas = document.getElementById("fa-bars");


console.log( fas.classList[1])

let addButton = ()=>{        // fanction ini menerapkan prinsip closure
  let i = 0
  return function (){
    return ++i
  }
}
let a = addButton()       //sampai di var a ini function uudah berjalan setengah


burgerMenu.addEventListener('onClick',function(){
  o=1
  let i = fas.classList[1]
  let chage =function (parm){ if (i!==parm){ i=`${parm}`}}
  if(o%2==0){
    chage('fa-times')
  }else{
    chage('fa-bars')
  }
  o++
})

// navbarContent.addEventListener('click',()=>{ let a= a() , console.log() })
console.log(burgerMenu)