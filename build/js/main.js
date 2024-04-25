const initApp=()=>{
    const hamberBtn=document.getElementById('hamburger-button');
    const mobileMenu=document.getElementById('mobile-menu');

    const toggleMenu = () =>{
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamberBtn.addEventListener('click',toggleMenu);
    mobileMenu.addEventListener('click',toggleMenu);
}
document.addEventListener('DOMContentLoaded',initApp);