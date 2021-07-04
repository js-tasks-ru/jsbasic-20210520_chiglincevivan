import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;
    this.event();
  }

  render() {
    // блок карусели
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    // кнопки управления
    carousel.insertAdjacentHTML('beforeend', `<!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left" style="display: none;">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>`);

    // галлерея с изображениями
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel__inner');
    this.slides.forEach(slide => {
      carouselInner.insertAdjacentHTML('beforeend', `<div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`)
    });
    carousel.append(carouselInner);

    return carousel
  }

  // arrowCheck() {
  //   const rightArrow = this.elem.querySelector('.carousel__arrow_right');
  //   const leftArrow = this.elem.querySelector('.carousel__arrow_left');
  //   (this.slidePos == 0) ? leftArrow.style.display = 'none' : leftArrow.style.display = null;
  //   (this.slidePos == this.lastSlide) ? rightArrow.style.display = 'none' : rightArrow.style.display = null;
  // }

  event() {
    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__button')) {
          this.elem.dispatchEvent(new CustomEvent("product-add", { // имя события должно быть именно "product-add"
          detail: event.target.closest('.carousel__slide').dataset.id, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        }));
      }

      if (event.target.closest('.carousel__arrow_right')) {
        this.currentSlide++;
      }

      if (event.target.closest('.carousel__arrow_left')) {
        this.currentSlide--;
      }

      this.move();
      this.checkArrows();
    });
  }

  move() {
    const carouselInner = document.querySelector('.carousel__inner');
    const carouselInnerWidth = carouselInner.offsetWidth;
    carouselInner.style.transform = `translateX(${this.currentSlide * -carouselInnerWidth}px)`;
  }

  checkArrows() {
    const rightArrow = document.querySelector('.carousel__arrow_right');
    const leftArrow = document.querySelector('.carousel__arrow_left');
    (this.currentSlide == 0) ? leftArrow.style.display = 'none' : leftArrow.style.display = null;
    (this.currentSlide == this.totalSlides - 1) ? rightArrow.style.display = 'none' : rightArrow.style.display = null;
  }
}

