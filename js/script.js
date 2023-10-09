//<МЕНЮ БУРГЕР>=========================================================================
let header_burger = document.querySelector('.header__burger');
let header__content = document.querySelector('.header__content');
let body = document.querySelector('body');

header_burger.addEventListener('click', () => {
    header_burger.classList.toggle('active');
    header__content.classList.toggle('active');
    body.classList.toggle('lock');
})
//<МЕНЮ БУРГЕР>=========================================================================
// Плавный переход (скролл) от ссылок-пунктов меню в header к ссылкам-якорям на странице ниже
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
// Плавный переход (скролл) от ссылок-пунктов меню в header к ссылкам-якорям на странице ниже
