'use string';

let btn = document.querySelector('#header__close');
let header = document.querySelector('#header__top');

btn.addEventListener('click',event=>{
    event.stopPropagation();
    event.preventDefault();

header.classList.add('hidden')

    setTimeout(()=>{
        header.classList.remove('hidden')
    },5000)
})

let menuBtn=document.querySelector('.burger-menu_button');
let menu = document.querySelector('#menu')
menuBtn.addEventListener('click',event=>{
    event.stopPropagation();
    event.preventDefault();

    menu.classList.toggle('hidden')

})