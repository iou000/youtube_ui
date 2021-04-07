const moreBtn = document.querySelector('.video_info .metadata .moreBtn');
const title = document.querySelector('.video_info .metadata .title');


moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});