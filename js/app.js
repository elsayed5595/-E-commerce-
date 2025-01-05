const sliderWrapper = document.querySelector('.sliderWrapper');
const navBottom = document.querySelectorAll('.navBottom h3');

navBottom.forEach((item, index) => {
    item.addEventListener('click', () => {
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});
