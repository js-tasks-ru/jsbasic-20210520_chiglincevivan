import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();
    this.elem.addEventListener('click', this.onClick.bind(this));
  };

  render() {
    const card = document.createElement('DIV');
    card.classList.add('card');

    const cardTop = document.createElement('DIV');
    cardTop.classList.add('card__top');

    const cardImg = document.createElement('IMG');
    cardImg.classList.add('card__image');
    cardImg.alt = 'product';
    cardImg.src = `/assets/images/products/${this.product.image}`;

    const cardPrice = document.createElement('SPAN');
    cardPrice.classList.add('card__price');
    cardPrice.textContent = `€${this.product.price.toFixed(2)}`;
    const cardBody = document.createElement('DIV');

    cardBody.classList.add('card__body');
    const cardName = document.createElement('DIV');

    cardName.classList.add('card__title');
    cardName.textContent = `${this.product.name}`;

    const cardButton = document.createElement('BUTTON');
    cardButton.classList.add('card__button');
    cardButton.addEventListener('click', this.onClick.bind(this));

    const cardButtonImg = document.createElement('IMG');
    cardButtonImg.src = '/assets/images/icons/plus-icon.svg';
    cardButtonImg.alt = 'icon';

    card.append(cardTop, cardBody);
    cardTop.append(cardImg, cardPrice);
    cardBody.append(cardName, cardButton);
    cardButton.append(cardButtonImg);

    return card;
  };

  onClick(event) {
    if (!event.target.closest('button')) return;
    this.elem.dispatchEvent(new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: this.product.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    }))
  };

}
