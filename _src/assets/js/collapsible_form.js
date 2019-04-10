'use strict';

// COLLAPSABLE SECTIONS

//SECTION DESIGN

const arrowIconDesign = document.querySelector('#arrow-design');
const sectionDesign = document.querySelector('#section-design');
const arrowButtonDesign = document.querySelector('#ButtonDesign');
function hideDesignSection() {
    // sectionDesign.classList.toggle('design');
    sectionDesign.classList.toggle('hidden');
    arrowIconDesign.classList.toggle('fa-chevron-up');
    arrowIconDesign.classList.toggle('fa-chevron-down');
    if (!sectionFill.classList.contains('hidden')) {
        sectionFill.classList.add('hidden');
        arrowIconFill.classList.toggle('fa-chevron-up');
        arrowIconFill.classList.toggle('fa-chevron-down');
    }
    else if (!sectionShare.classList.contains('hidden')) {
        sectionShare.classList.add('hidden');
        arrowIconShare.classList.toggle('fa-chevron-up');
        arrowIconShare.classList.toggle('fa-chevron-down');

    }
}

{/* <i class="fas fa-chevron-up"></i> */ }

arrowButtonDesign.addEventListener('click', hideDesignSection);

//SECTION FILL THE GAP
const arrowIconFill = document.querySelector('#arrow-fillTheGap');
const sectionFill = document.querySelector('.fillTheGap');
const arrowButtonFill = document.querySelector('#ButtonFill');


function hideFillSection() {

    sectionFill.classList.toggle('hidden');
    arrowIconFill.classList.toggle('fa-chevron-up');
    arrowIconFill.classList.toggle('fa-chevron-down');
    if (!sectionDesign.classList.contains('hidden')) {
        sectionDesign.classList.add('hidden');
        arrowIconDesign.classList.toggle('fa-chevron-up');
        arrowIconDesign.classList.toggle('fa-chevron-down');
    }
    else if (!sectionShare.classList.contains('hidden')) {
        sectionShare.classList.add('hidden');
        arrowIconShare.classList.toggle('fa-chevron-up');
        arrowIconShare.classList.toggle('fa-chevron-down');

    }

}

arrowButtonFill.addEventListener('click', hideFillSection);

//SECTION SHARE

const arrowIconShare = document.querySelector('#arrow-share');
const sectionShare = document.querySelector('#section-share');
const arrowButtonShare = document.querySelector('#ButtonShare');

function hideShareSection() {

    sectionShare.classList.toggle('hidden');
    arrowIconShare.classList.toggle('fa-chevron-up');
    arrowIconShare.classList.toggle('fa-chevron-down');
    if (!sectionDesign.classList.contains('hidden')) {
        sectionDesign.classList.add('hidden');
        arrowIconDesign.classList.toggle('fa-chevron-up');
        arrowIconDesign.classList.toggle('fa-chevron-down');
    }
    else if (!sectionFill.classList.contains('hidden')) {
        sectionFill.classList.add('hidden');
        arrowIconFill.classList.toggle('fa-chevron-up');
        arrowIconFill.classList.toggle('fa-chevron-down');
    }
}
arrowButtonShare.addEventListener('click', hideShareSection);

