//FUNCTIONS CIRCLES ON-OFF
const handlerCirclesCard = event => {
  const inputElement = event.currentTarget;
  const circleElement = document.querySelector(
    `.card-user__${inputElement.id}`
  );

  inputElement.value === ''
    ? (circleElement.classList.add('card__item-list-no-border'),
      circleElement.classList.remove('card__item-list'))
    : (circleElement.classList.remove('card__item-list-no-border'),
      circleElement.classList.add('card__item-list'));
};

const inputsElementArr = document.querySelectorAll('.circle-item');

for (let i = 0; i < inputsElementArr.length; i++) {
  inputsElementArr[i].addEventListener('keyup', handlerCirclesCard);
}
