// COLLAPSABLE SECTIONS

const legendTitles = document.querySelectorAll('.fieldset__title__container');
const panels = document.querySelectorAll('.panel');
const arrows =document.querySelectorAll('.arrow');

const handlerLegendClick = event =>{
    
    const element = event.currentTarget;
    const currentPanel = element.nextElementSibling;
    const currentArrow = element.querySelector('.arrow');
    if(currentArrow.classList.contains('fa-chevron-down')){
        for (let i=0; i<legendTitles.length; i++) {
            panels[i].classList.add('hidden');
            arrows[i].classList.add('fa-chevron-down');
            arrows[i].classList.remove('fa-chevron-up');
        }
    currentPanel.classList.remove('hidden');
    currentArrow.classList.remove('fa-chevron-down');
    currentArrow.classList.add('fa-chevron-up');
    }
    else {
        currentPanel.classList.add('hidden');
        currentArrow.classList.add('fa-chevron-down');
        currentArrow.classList.remove('fa-chevron-up');
    }
};

for (const legend of legendTitles){
    legend.addEventListener('click', handlerLegendClick);
}



