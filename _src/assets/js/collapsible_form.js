// COLLAPSABLE SECTIONS

const legendTitles = document.querySelectorAll('.fieldset__title__container');

const handlerLegendClick = event =>{
    const element = event.currentTarget;
    const currentPanel = element.nextElementSibling;
    const currentArrow = element.querySelector('.arrow');
    currentPanel.classList.toggle('hidden');
    currentArrow.classList.toggle('fa-chevron-up');
    currentArrow.classList.toggle('fa-chevron-down');
};

for (const legend of legendTitles){
    legend.addEventListener('click', handlerLegendClick);
}



