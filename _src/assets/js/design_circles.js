const inputsElementArr = document.querySelectorAll('.circle-item');

//FUNCTIONS CIRCLES ON-OFF
const handlerCirclesCard = event => {
  const inputElement = event.currentTarget;
  const circleElement = document.querySelector(`.${inputElement.id}`);
  console.log(inputElement, circleElement, inputElement);

  inputElement.value === ''
    ? (circleElement.classList.add('card__item-list-no-border'),
      circleElement.classList.remove('card__item-list'))
    : (circleElement.classList.remove('card__item-list-no-border'),
      circleElement.classList.add('card__item-list'));
};

for (let i = 0; i < inputsElementArr.length; i++) {
  inputsElementArr[i].addEventListener('keyup', handlerCirclesCard);
}
