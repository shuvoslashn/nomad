// responsive menu bar
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-items');
const bar = document.querySelector('.bar');
const xmark = document.querySelector('.xmark');

bar.addEventListener('click', () => {
    menu.classList.add('active');
});
xmark.addEventListener('click', () => {
    menu.classList.remove('active');
});
// menuItems.addEventListener('click', () => {
//     menu.classList.remove('active');
// });
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
